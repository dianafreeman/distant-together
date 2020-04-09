export const getUniqueSet = (data, key) => {
    let unique = data
        .filter((d) => d[key] && d[key].length > 0)
        .map((d) => (d[key].includes(',') ? d[key].split(',')[0] : d[key]))

    return [...new Set(unique)]
}

export const matchesAudienceFilter = (store, r) =>
    r['Resources For'] &&
    store.query.filters['Resources For'] === r['Resources For']

export const matchesAreaFilter = (store, r) => {
    return r.Area && store.query.filters.Area === r.Area
}

export const matchesSearchTerm = (store, r) => {
    const pattern = new RegExp(store.searchTerm, 'i')
    return (
        (r.Title && r.Title.match(pattern)) || // if title exists and matches
        (r['Source (Organization)'] && // if source exists and matches
            r['Source (Organization)'].match(pattern)) ||
        (r.Tags && r.Tags.includes(store.searchTerm))
    )
}

export const filterByAll = (store, r) => {
    if (store.searchTerm.length > 0 && matchesSearchTerm(store, r)) {
        return true
    } else if (
        store.query.filters['Resources For'].length > 0 &&
        matchesAudienceFilter(store, r)
    ) {
        return true
    } else if (
        store.query.filters.Area.length > 0 &&
        matchesAreaFilter(store, r)
    ) {
        return true
    } else if (
        store.searchTerm.length == 0 &&
        store.query.filters['Resources For'].length == 0 &&
        store.query.filters.Area.length === 0
    ) {
        return true
    } else {
        return false
    }
}

export function filter() {}
