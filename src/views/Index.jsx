/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react'
import { inject, observer } from 'mobx-react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import ScrollArea from 'react-scrollbar'
import sitemeta from '../lib/sitemeta'
import colors from '../lib/theme/colors'
import { ColBottom, ColTop } from './layouts/Column'
import Form from '../components/Form'
import ListItem from '../components/ListItem'
import NothingFound from '../components/NothingFound'
import headerText from '../assets/headerText.png'
import ResultsBar from '../components/Form/ResultsBar'

const LoadingIndicator = () => {
    return (
        <div className="fa-3x">
            <i className="fas fa-spinner fa-spin"></i>
        </div>
    )
}

const FixedContainer = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    top: 0;
    left: 0;
`

const FixedRow = styled.div`
    height: inherit;
    padding: 1em
    z-index: 1;
    display: flex;

`
const RelativeCol = styled.div`
    position: relative;
    margin: 0;
    padding: 0;
`
const ColumnTitle = styled.h1`
    margin: 1em 0;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 24px;
    color: white;
    line-height: 1.5em;
`

const HeaderImage = styled.img`
    max-width: 300px;
    margin: auto;
`

// const ScrollContainer = styled.div`
//     height: auto;
//     overflow: hidden scroll;
// `

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

function Index({ store, isLoading }) {
    const [colHeight, setFixedColumnHeight] = useState(0)
    const topColRef = useRef(null)

    useEffect(() => {
        let bottom =
            topColRef.current.offsetHeight + topColRef.current.offsetTop
        setFixedColumnHeight(window.innerHeight - bottom)
    }, [])

    return (
        <FixedContainer className="container-fluid">
            <FixedRow className="row">
                <RelativeCol
                    className="col-md-5 col-lg-4 "
                    style={{ backgroundColor: colors['grey-dark'] }}
                >
                    <ColTop
                        style={{
                            margin: 'auto',
                            textAlign: 'center',
                            padding: '1em',
                            paddingTop: '2em',
                        }}
                    >
                        <HeaderImage
                            src={headerText}
                            width="100%"
                            aria-hidden="true"
                            alt={sitemeta.title}
                        />
                        <ColumnTitle className="my-auto">
                            {sitemeta.subtitle}
                        </ColumnTitle>
                    </ColTop>
                    <ColBottom></ColBottom>
                </RelativeCol>
                <RelativeCol className="col-md-7 col-lg-8">
                    <ColTop ref={topColRef}>
                        <Form />
                        <SectionFooter>
                            <ResultsBar
                                onToggleClick={store.toggleFormOpen}
                                listLength={store.filtered.length}
                            ></ResultsBar>
                        </SectionFooter>
                    </ColTop>
                    <ColBottom>
                        <ScrollArea
                            speed={0.8}
                            className="area"
                            contentClassName="content"
                            horizontal={false}
                            style={{ height: colHeight }}
                            stopScrollPropagation={true}
                        >
                            {store.isLoading ? (
                                <LoadingIndicator>LOADING</LoadingIndicator>
                            ) : store.filtered.length > 0 ? (
                                store.filtered.map((r, idx) => (
                                    <ListItem
                                        key={`list-item-${idx}-${r.Title.replace(
                                            ' ',
                                            '-'
                                        ).toLowerCase()}`}
                                        item={r}
                                    />
                                ))
                            ) : (
                                <NothingFound />
                            )}
                        </ScrollArea>
                    </ColBottom>
                </RelativeCol>
            </FixedRow>
        </FixedContainer>
    )
}

export default inject('store')(observer(Index))
