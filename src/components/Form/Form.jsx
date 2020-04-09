import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import { default as BsForm } from 'react-bootstrap/Form'
import Radio from './Radio'
import colors from '../../lib/theme/colors'
import screens from '../../lib/theme/screens'
import ItemLabel from './ItemLabel'
import ResultsBar from './ResultsBar'
import { getUniqueSet } from '../utils'

const StaticWrapper = styled.div`
position: relative;
background-color: ${colors.white};
z-index: 1;
right:0;
top: 0
width: 100%;
@media screen and (min-width: ${screens.md}){
  width: 50%;
  position: fixed;
}

@media screen and (min-width: ${screens.lg}){
  width: 66.66667%
}
`
const FormWrapper = styled.div`
    z-index: 2;
`
const FormContent = styled.div`
    margin: 0 1em;
`
const FormFooter = styled.div`
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: ${colors['grey-dark']};
    color: ${colors.white};
    padding: 0.5em;
`
const FormGroup = styled(BsForm.Group)`
    display: flex;
    width: 100%;
    flex-flow: row wrap;
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

const Form = ({ store, onSearchTermChange, listLength, onOptionToggle }) => {
    return (
        <StaticWrapper>
            <FormWrapper>
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
                            // console.log('store.query[f]')
                            // console.log(store.query[f])
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
                    <FormFooter>
                        <ResultsBar listLength={listLength} />
                    </FormFooter>
                </FormEl>
            </FormWrapper>
        </StaticWrapper>
    )
}

export default inject('store')(observer(Form))
