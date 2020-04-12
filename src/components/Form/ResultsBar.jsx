import React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'

const Count = styled.span`
    margin: 0.5em;
`

const ResultsBar = ({ store }) => {
    let length = store.filtered.length
    return (
        <>
            <Count>
                Showing {length > 0 ? length : 'no'} result
                {length === 1 ? '' : 's'}
            </Count>
        </>
    )
}

export default inject('store')(observer(ResultsBar))
