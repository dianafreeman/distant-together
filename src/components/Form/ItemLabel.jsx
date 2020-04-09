import React, { useState } from 'react'
import { default as BsForm } from 'react-bootstrap/Form'
import styled from 'styled-components'
import colors from '../../lib/theme/colors'

const ItemLabel = styled(BsForm.Label)`
    text-transform: uppercase;
    text-align: left;
    color: ${colors['blue-dark']};
    margin-top: auto;
    margin-right: 1em;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
`

export default ItemLabel
