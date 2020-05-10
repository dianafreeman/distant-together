import React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'

const Count = styled.span`
    margin: 0.5em;
`

const ResultsBar = ({ store }) => {
    const length = store.filtered.length
    const numberOfResults = length > 0 ? length : 'no'
    const audience = store.query['Resources For']
    const term = store.query.searchTerm

    const hasAudienceTerm = audience && audience.length > 0
    const hasSearchTerm = term && term.length > 0

    const audienceMessage = `${hasAudienceTerm ? `for ${audience}` : ''}`
    const termMessage = `${
        hasSearchTerm ? `matching term ${store.searchTerm}` : ''
    }`
    // console.log(store.searchTerm)
    return (
        <>
            <Count>
                {`Showing ${numberOfResults} ${
                    length === 1 ? 'result' : 'results'
                } ${audienceMessage} ${termMessage}`}
            </Count>
        </>
    )
}

export default inject('store')(observer(ResultsBar))
