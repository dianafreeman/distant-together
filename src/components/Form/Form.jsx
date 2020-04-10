import React, { useState, useEffect, useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import { default as BsForm } from 'react-bootstrap/Form'
import Radio from './Radio'
import colors from '../../lib/theme/colors'
import screens from '../../lib/theme/screens'
import ItemLabel from './ItemLabel'
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

const Form = ({ store }) => {
    const ref = useRef()
    const [height, setHeight] = useState(0)
    const { h } = useSpring({
        h: store.formIsOpen ? height : 0,
    })
    useEffect(() => {
        setHeight(ref.current.clientHeight + ref.current.offsetHeight)
    }, [])
    return (
        <animated.div
            style={{
                height: h.interpolate((h) => `${h}px`),
                overflow: 'hidden',
            }}
        >
            <FormWrapper ref={ref}>
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
                    </FormContent>
                </FormEl>
            </FormWrapper>
        </animated.div>
    )
}

export default inject('store')(observer(Form))
