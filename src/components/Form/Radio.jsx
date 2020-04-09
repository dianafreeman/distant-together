import React, { useState } from 'react'
import { css } from 'styled-components'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
import colors from '../../lib/theme/colors'
import ItemLabel from './ItemLabel'

const Wrapper = styled.div``
const Option = styled(Button)`
    outline: none;
    border-radius: 5px;
    border: none;
    border: 1px solid ${colors['blue-dark']};
    color: ${(props) =>
        props.isActive ? colors['blue-light'] : colors['blue-dark']};
    background-color: ${(props) =>
        props.isActive ? colors['blue-dark'] : colors['blue-light']};
    &:hover,
    &:active,
    &:focus {
        border: 1px solid ${colors['blue-dark']};
    }
`
const ClearSelectedBtn = styled.button`
    margin: auto;
    background: none;
    border: none;
    color: ${colors.grey};
    margin: 0.5em;
    &:hover,
    &:active,
    &:focus {
        color: ${colors['grey-dark']};
    }
`
const ClearSelectedToggle = ({ name, onClick }) => {
    return (
        <ClearSelectedBtn name={name} onClick={onClick}>
            <i className="fas fa-times-circle"> </i>
        </ClearSelectedBtn>
    )
}
const RadioOption = ({ value, name, selected, onOptionClick }) => {
    return (
        <Option
            onClick={onOptionClick}
            Button
            value={value}
            name={name}
            isActive={value === selected}
        >
            {value}
        </Option>
    )
}
const Radio = ({
    label,
    options,
    selected,
    onOptionClick,
    onClearSelectedClick,
}) => {
    return (
        <Wrapper>
            <ItemLabel>{label}</ItemLabel>
            <ButtonGroup aria-label="Basic example">
                {options.map((o) => (
                    <RadioOption
                        key={`radio-option-${o
                            .replace(' ', '-')
                            .toLowerCase()}`}
                        value={o}
                        name={label}
                        selected={selected}
                        onOptionClick={onOptionClick}
                    />
                ))}
            </ButtonGroup>
            {selected && (
                <ClearSelectedToggle
                    name={label}
                    onClick={onClearSelectedClick}
                />
            )}
        </Wrapper>
    )
}

export default Radio
