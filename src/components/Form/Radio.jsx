import React, { useState } from 'react'
import { css } from 'styled-components'
import { default as BsButtonGroup } from 'react-bootstrap/ButtonGroup'
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
        outline: none;
        border: 1px solid ${colors['blue-dark']};
        background-color: ${colors['blue-dark']};
        color: ${colors['blue-light']};
    }
`
const ClearSelectedBtn = styled.button`
    margin: none;
    margin-left: 1ch;
    padding: 0;
    background: none;
    border: none;
    color: ${colors.white};
    display: -inline-flex;
    &:hover,
    &:active,
    &:focus {
        color: 1px solid ${colors['blue-light']};
    }
`
const ButtonGroup = styled(BsButtonGroup)`
    flex-flow: wrap;
`
const ClearSelectedToggle = ({ name, onClick }) => {
    return (
        <ClearSelectedBtn name={name} onClick={onClick}>
            <i className="fas fa-times-circle"> </i>
        </ClearSelectedBtn>
    )
}
const RadioOption = ({
    value,
    name,
    selected,
    onOptionClick,
    onClearSelectedClick,
}) => {
    return (
        <Option
            onClick={value === selected ? onClearSelectedClick : onOptionClick}
            Button
            value={value}
            name={name}
            isActive={value === selected}
        >
            {value}
            {value === selected && <ClearSelectedToggle />}
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
            <ButtonGroup aria-label={label}>
                {options.map((o) => (
                    <RadioOption
                        key={`radio-option-${o
                            .replace(' ', '-')
                            .toLowerCase()}`}
                        value={o}
                        name={label}
                        selected={selected}
                        onOptionClick={onOptionClick}
                        onClearSelectedClick={onClearSelectedClick}
                    />
                ))}
            </ButtonGroup>
        </Wrapper>
    )
}

export default Radio
