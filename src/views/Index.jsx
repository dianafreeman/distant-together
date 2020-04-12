/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import sitemeta from '../lib/sitemeta'
import colors from '../lib/theme/colors'
import screens from '../lib/theme/screens'
import Form from '../components/Form'
import headerText from '../assets/headerText.png'
import ResultsBar from '../components/Form/ResultsBar'
import ResultsList from '../components/ResultsList'
import StackedColumn from '../components/StackedColumn'

const LoadingIndicator = () => {
    return (
        <div className="fa-5x">
            <i className="fas fa-spinner fa-spin"></i>
        </div>
    )
}

const FixedContainer = styled.div`
    width: 100vw;
    overflow: hidden;
    top: 0;
    left: 0;
    @media screen and (min-width: ${screens.md}) {
        height: 100vh;
    }
`

const FixedRow = styled.div`
    height: inherit;
    padding: 1em
    z-index: 1;
    display: flex;

`

const ColumnTitle = styled.h1`
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 26px;
    color: white;
    line-height: 1.25em;
    text-align: center;
    width: 100%;
`

const HeaderImage = styled.img`
    max-width: 400px;
    width: 100%;
    margin-bottom: 2em;
    display: flex;
`

const SectionFooter = styled.div`
    bottom: 0;
    width: 100%;
    padding-right: 1;
    padding-left: 0.5;
    display: flex;
    justify-content: space-between;
    background: ${colors['grey-dark']};
    color: ${colors.white};
`

function Index({ store }) {
    useEffect(() => {
        store.getResources()
        store.getData()
    }, [store])
    return (
        <FixedContainer className="container-fluid">
            <FixedRow className="row">
                <div
                    className="col-md-5 col-lg-4"
                    style={{
                        backgroundColor: colors['grey-dark'],
                        display: 'flex',
                    }}
                >
                    <div className="col-sm-12" style={{ margin: 'auto' }}>
                        <HeaderImage
                            src={headerText}
                            width="100%"
                            aria-hidden="true"
                            alt={sitemeta.title}
                        />
                        <ColumnTitle>{sitemeta.subtitle}</ColumnTitle>
                    </div>
                </div>
                <StackedColumn
                    className="col-md-7 col-lg-8"
                    TopSection={() => (
                        <>
                            <Form />
                            <SectionFooter>
                                <ResultsBar
                                    listLength={() => store.filtered.length}
                                />
                            </SectionFooter>
                        </>
                    )}
                >
                    {store.isLoading ? (
                        <LoadingIndicator />
                    ) : (
                        <ResultsList />
                    )}
                </StackedColumn>
            </FixedRow>
        </FixedContainer>
    )
}

export default inject('store')(observer(Index))
