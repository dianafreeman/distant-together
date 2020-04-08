import { observable, computed, decorate, action, toJS } from 'mobx'
import Axios from 'axios'
import RESOURCES from '../__fixtures__/resources'
import dotenv from 'dotenv'

dotenv.config()

class Store {
    // Observables
    // ---------------------------------------------------------------------------

    isLoading = false
    resources = RESOURCES.resources || []
    tags = []
    areas = []

    query = {
        searchTerm: '',
        filters: { 'Resources For': [], Area: [], Tags: [] },
    }
    filterTerms = []
    useSearchTerm = this.query.searchTerm.length > 0
    // Computed
    // ---------------------------------------------------------------------------
    filtersAreEmpty() {
        return (
            this.query.searchTerm.length === 0 &&
            (!Object.values(this.query.filters)[0] ||
                Object.values(this.query.filters)[0].map(
                    (v) => v[0] && v[0].length > 0
                ).length === 0)
        )
    }
    get results() {
        if (!this.useSearchTerm && this.filtersAreEmpty()) {
            return this.resources
        } else {
            return this.resources.filter((r) => this.filterByAll(r))
        }
    }
    get resourcesFor() {
        let set = this.createUniqueSet(this.resources, 'Resources For')
        // console.log(set)
        return set
    }
    createUniqueSet = (data, key) => {
        let unique = data
            .filter((d) => d[key] && d[key].length > 0)
            .map((d) => (d[key].includes(',') ? d[key].split(',')[0] : d[key]))

        return [...new Set(unique)]
    }

    matchesAudienceFilter = (r) => {
        console.log(`checking ${r['Resources For']}`)

        // console.log(this.query.filters['Resources For'])
        return r['Resources For'].length > 0
            ? this.query.filters['Resources For'].indexOf(r['Resources For']) >
                  -1
            : true
    }
    matchesSearchTerm = (r) => {
        const pattern = new RegExp(this.query.searchTerm, 'i')
        return this.query.searchTerm
            ? (r.Title && r.Title.match(pattern)) || // if title exists and matches
                  (r['Source (Organization)'] && // if source exists and matches
                      r['Source (Organization)'].match(pattern)) ||
                  (r.Tags && r.Tags.includes(this.query.searchTerm))
            : r
    }

    matchesAudience(r) {
        // console.log(this.query.filters['Resources For'].length)
        return this.query.filters['Resources For'].length > 1
            ? this.query.filters['Resources For'] === r['Resources For']
            : true
        // return r.Area === this.query.filters['Resources For']
    }
    filterByAll(r) {
        if (this.matchesSearchTerm(r)) {
            return true
        } else if (this.matchesAudienceFilter(r)) {
            return true
        }
    }

    // Actions
    // ---------------------------------------------------------------------------
    async getResources() {
        this.setLoading(true)
        let resp = await Axios.get('/api/resources', {
            headers: { 'X-API-KEY': process.env.REACT_APP_MASTER_KEY },
        })
        this.resources = resp.data.response.resources
        console.log(this.resources)
        return this.setLoading(false)
    }
    async getAreas() {
        this.setLoading(true)
        let resp = await Axios.get('/api/areas', {
            headers: { 'X-API-KEY': process.env.APP_MASTER_KEY },
        })
        this.resources = resp.data.response.areas
        return this.setLoading(false)
    }

    onSearchTermChange(term) {
        this.useSearchTerm = term.length > 0
        return (this.query.searchTerm = term)
    }

    toggleFilterTerm(term, key) {
        return (this.query.filters[key] =
            this.query.filters[key][0] !== term ? [term] : [])
    }

    toggleSortBy(value) {
        return (this.sortBy =
            this.sortBy.indexOf(value) === -1
                ? this.sortBy.push(value)
                : this.sortBy.filter((v) => v !== value))
    }

    setLoading(bool) {
        return (this.isLoading = bool)
    }
}

decorate(Store, {
    isLoading: observable,
    resources: observable,
    tags: observable,
    areas: observable,
    query: observable,
    useSearchTerm: observable,

    resourcesFor: computed,

    getResources: action,
    getAreas: action,
    useAllFilters: action,
    onSearchTermChange: action,
})

export default Store
