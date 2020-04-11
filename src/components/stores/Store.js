import { observable, computed, decorate, action, toJS } from 'mobx'
import Axios from 'axios'
import RESOURCES from '../__fixtures__/resources'
import dotenv from 'dotenv'

dotenv.config()

class Store {
    // Observables
    // ---------------------------------------------------------------------------

    isLoading = false
    formIsOpen = false

    resources = []
    'Resources For' = []
    Area = []

    searchTerm = ''
    query = {
        'Source (Organization)': '',
        'Resources For': '',
        Area: '',
        Title: '',
        Link: '',
        Tags: '',
        'Release Date': '',
    }

    // below used in View!
    // Resources For === Audience
    filterOptions = ['Resources For', 'Area']
    stringSearchOptions = ['Source (Organization)', 'Title', 'Tags']

    // Computed
    // ---------------------------------------------------------------------------

    get filtered() {
        return this.resources.filter((resource) => {
            for (let key in this.query) {
                if (this.query[key] && this.query[key].length > 0) {
                    return this.filterWithRegex(resource, key)
                }
            }
            return true
        })
    }

    filterWithRegex(resource, key) {
        // console.log(this.query[key])
        const pattern = new RegExp(this.query[key], 'i')
        return resource[key].match(pattern)
    }

    // Actions
    // ---------------------------------------------------------------------------

    async getData() {
        this.setLoading(true)
        let resp = await Axios.get('/api/data', {
            headers: { 'X-API-KEY': process.env.REACT_APP_MASTER_KEY },
        })
        // console.log(resp.data)
        this['Area'] = resp.data.areas
        this['Resources For'] = resp.data.audiences
        this.setLoading(false)
    }
    async getResources() {
        this.setLoading(true)
        let resp = await Axios.get('/api/resources', {
            headers: { 'X-API-KEY': process.env.REACT_APP_MASTER_KEY },
        })
        this.resources = resp.data.response.resources
        return this.setLoading(false)
    }

    onSearchTermChange(term) {
        return (this.query = {
            ...this.query,
            'Source (Organization)': term,
            Title: term,
            Tags: term,
        })
    }

    clearFiltersFor = (name) => {
        console.log(`clearing filters for ${name}`)
        return (this.query[name] = '')
    }

    onTermOptionChange = (e) => {
        return (this.query = {
            ...this.query,
            [e.target.name]: e.target.value,
        })
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

    toggleFormOpen = () => {
        return (this.formIsOpen = !this.formIsOpen)
    }
}

decorate(Store, {
    formIsOpen: observable,
    isLoading: observable,
    resources: observable,

    tags: observable,
    'Resources For': observable,
    Area: observable,
    query: observable,

    filtered: computed,

    getData: action,
    getResources: action,
    getAreas: action,
    getAudiences: action,
    useAllFilters: action,
    onSearchTermChange: action,
    toggleFormOpen: action,
})

export default Store
