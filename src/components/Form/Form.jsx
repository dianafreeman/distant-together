import React from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import { default as BsForm } from 'react-bootstrap/Form'
import Radio from './Radio/Radio'
import colors from '../../lib/theme/colors'
import ItemLabel from './Item/ItemLabel'

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
    return (
        <FormWrapper>
            <FormEl onSubmit={(e) => e.preventDefault()}>
                <FormContent>
                    {store.filterOptions.map((f, idx) => {
                        return (
                            <>
                                <FormGroup>
                                    <Radio
                                        key={`radio-${f
                                            .replace(' ', '-')
                                            .toLowerCase()}`}
                                        label={f}
                                        selected={store.query[f]}
                                        options={store[f]}
                                        onOptionClick={store.onTermOptionChange}
                                        onClearSelectedClick={(e) => {
                                            e.preventDefault()
                                            store.clearFiltersFor(
                                                e.currentTarget.name
                                            )
                                        }}
                                    />
                                </FormGroup>
                            </>
                        )
                    })}
                    <FormGroup>
                        <ItemLabel>Search By Keyword</ItemLabel>
                        <Input
                            type="text"
                            name="resource-search-term"
                            placeholder={`Looking for something specific?`}
                            onChange={(e) =>
                                store.onSearchTermChange(e.target.value)
                            }
                        />
                    </FormGroup>
                </FormContent>
            </FormEl>
        </FormWrapper>
    )
}

export default inject('store')(observer(Form))
