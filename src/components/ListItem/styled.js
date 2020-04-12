import styled from 'styled-components'
import colors from '../../lib/theme/colors'

export const ListRow = styled.div`
    position: relative;
    background-color: ${colors.white};
    margin-bottom: 20px !important;
    display: flex;
    width: 100%;
    justify-content: space-between;
    transition: backround-color 0.5s;
    &:hover {
        background-color: ${colors['blue-light']};
    }
`

export const Title = styled.p`
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 700;
    font-size: 1.5em;
    margin: unset;
    padding: unset;
`
export const GoArrow = styled.a`
    color: ${colors.white}
    border-radius: 100px;
    border: 1px solid ${colors['grey-dark']};
    color: ${colors['grey-dark']};
    border-radius: 100%;
    padding: 0.5em 0.75em;
    font-size: 1.5em;
    margin: auto 0;
    &:hover, &:active, &:focus{
        border-color: ${colors.blue};
        color: ${colors.blue};
    }
`

export const FlexCol = styled.div`
    display: flex;
    flex: ${(props) => props.flex || '1'};
    margin: auto;
    justify-content: ${(props) => props.justify || 'center'};
`

export const Source = styled.p`
    a {
    }
`

export const Toggle = styled.a`
    background: none;
    display: block;
    border-radius: 100px;
    outline: none;
    border: 1px solid white;
`
