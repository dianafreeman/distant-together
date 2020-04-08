import React, { useState } from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'
import colors from '../../lib/theme/colors'

const ListItemWrap = styled.div`
    background-color: ${colors.white};
    min-height: 100px;
    margin-bottom: 1em;
    margin-top: 1em;
    padding: 0 0.5em;
    display: flex;
    position: relative;
`

const Title = styled.p`
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 700;
    font-size: 1.5em;
    margin: unset;
    padding: unset;
`
const GoArrow = styled.a`
color: ${colors.white}
border-radius: 100px;
border: 1px solid ${colors['grey-dark']};
color: ${colors['grey-dark']};
border-radius: 100%;
padding: 0.5em 0.75em;
font-size: 1.5em;
margin: auto;
&:hover, &:active, &:focus{
  border-color: ${colors.blue};
}
`

const FlexCol = styled.div`
    display: inline-flex;
    flex: 1;
    margin: auto;
`

const Source = styled.p`
    a {
    }
`

const Toggle = styled.a`
    background: none;
    display: block;
    border-radius: 100px;
    outline: none;
    border: 1px solid white;
`

const ListItem = ({ item }) => {
    const [isOpen, setOpen] = useState(false)
    return (
        <ListItemWrap className="card">
            <FlexCol>
                <div>
                    <Title>{item.Title}</Title>
                    <Source>Source: {item['Source (Organization)']}</Source>
                </div>
            </FlexCol>
            <GoArrow href={item.Link}>
                <i className="fas fa-arrow-right"> </i>
            </GoArrow>

            <i className="fas fa-chevron-down" />
        </ListItemWrap>
    )
}

export default ListItem
