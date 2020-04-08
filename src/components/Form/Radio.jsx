import React, { useState } from 'react'
import { css } from 'styled-components'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
import colors from '../../lib/theme/colors'
import ItemLabel from './ItemLabel'

const Wrapper = styled.div``
const Option = styled(Button)`
    border-radius: 5px;
    border: 1px solid ${colors['blue-dark']};
    color: ${(props) =>
        props.isActive
            ? props.variant !== 'secondary'
                ? colors['blue-dark']
                : colors['blue-light']
            : colors['blue-dark']};
`
const RadioOption = ({ value, name, selected, onOptionClick }) => {
    const onClick = (e) => {
        onOptionClick && onOptionClick(e)
    }

    return (
        <Option
            onClick={onClick}
            value={value}
            name={name}
            variant={value === selected ? 'secondary' : 'primary'}
            isActive={value === selected}
        >
            {value}
        </Option>
    )
}
const Radio = ({ label, options, selected, onOptionClick }) => {
    return (
        <Wrapper>
            <ItemLabel>{label}</ItemLabel>
            <ButtonGroup aria-label="Basic example">
                {options.map((o) => (
                    <RadioOption
                        value={o}
                        name={label}
                        selected={selected}
                        onOptionClick={onOptionClick}
                    />
                ))}
            </ButtonGroup>
        </Wrapper>
    )
}

export default Radio
