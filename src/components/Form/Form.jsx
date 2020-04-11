import React, { useRef } from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import { default as BsForm } from 'react-bootstrap/Form'
import Radio from './Radio/Radio'
import colors from '../../lib/theme/colors'
import ItemLabel from './Item/ItemLabel'
import Collapsible from '../Collapsible/Collapsible'
import { useSpring, animated } from 'react-spring'

import { getUniqueSet } from '../utils'

const FormWrapper = styled.div``
const FormContent = styled.div`
    margin: 0 1em;
`
const FormGroup = styled(BsForm.Group)`
    display: flex;
    width: 100%;
    margin: 1em 0em;
    justify-content: space-between;
`

const Input = styled(BsForm.Control)`
    flex: 1;
    color: ${colors.blue};
    position: relative;
`

const FormEl = styled(BsForm)`
    margin: 0;
`

const Toggle = ({ onClick, label, isOpen }) => {
    const { rotation } = useSpring({
        rotation: isOpen ? 0 : 180,
    })

    const Icons = animated(styled.button`
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

    return (
        <div onClick={onClick}>
            {label}
            <Icons
                style={{
                    transform: rotation.interpolate((r) => `rotate(${r}deg)`),
                }}
            >
                <i className={`fas fa-chevron-up`}></i>
            </Icons>
        </div>
    )
}
const Form = ({ store }) => {
    const formRef = useRef(null)
    return (
        <FormWrapper ref={formRef}>
            <FormEl onSubmit={(e) => e.preventDefault()}>
                <FormContent>
                    <FormGroup>
                        <ItemLabel>Search By Term</ItemLabel>
                        <Input
                            type="text"
                            name="resource-search-term"
                            placeholder={`What are you looking for?`}
                            onChange={(e) =>
                                store.onSearchTermChange(e.target.value)
                            }
                        />
                    </FormGroup>
                    <Collapsible formRef={formRef} isOpen={store.formIsOpen}>
                        {store.filterOptions.map((f) => {
                            return (
                                <FormGroup>
                                    <Radio
                                        key={`radio-${f
                                            .replace(' ', '-')
                                            .toLowerCase()}`}
                                        label={f}
                                        selected={store.query[f]}
                                        options={getUniqueSet(
                                            store.resources,
                                            f
                                        )}
                                        onOptionClick={store.onTermOptionChange}
                                        onClearSelectedClick={(e) => {
                                            e.preventDefault()
                                            store.clearFiltersFor(
                                                e.currentTarget.name
                                            )
                                        }}
                                    />
                                </FormGroup>
                            )
                        })}
                    </Collapsible>
                </FormContent>
            </FormEl>
        </FormWrapper>
    )
}

export default inject('store')(observer(Form))
