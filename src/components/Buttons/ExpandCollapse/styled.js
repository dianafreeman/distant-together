import styled from 'styled-components'
import colors from '../../lib/theme/colors'

export const IconWrap = animated(styled.button`
    background: none;
    border-radius: 100px;
    outline: none;
    border: none;
    color: ${colors.blue};
    &:hover,
    &:active,
    &:focus {
        color: ${colors['blue-light']};
        i {
            color: ${colors['blue']};
        }
    }
`)
