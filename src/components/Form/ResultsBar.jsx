import React, { useState } from 'react'
import styled from 'styled-components'
import colors from '../../lib/theme/colors'

const Wrapper = styled.div``

const Count = styled.span``

const ResultsBar = ({ listLength, onToggleClick, children, ...rest }) => {
    return (
        <>
            <Count>Showing {listLength} results</Count>
        </>
    )
}

export default ResultsBar
