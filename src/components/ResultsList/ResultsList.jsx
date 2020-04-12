import React from 'react'
import { inject, observer } from 'mobx-react'
import { FixedSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import ListItem from '../ListItem'
import NothingFound from '../NothingFound'


const GUTTER_SIZE = 5

const ResultsList = ({ store }) => {
    let data = store.filtered

    const Item = ({ style, index, ...rest }) => (
        <ListItem
            divStyle={style}
            item={data[index]}
            key={`list-item-${index}-${data[index].Title.replace(
                ' ',
                '-'
            ).toLowerCase()}`}
            {...rest}
        />
    )


    return (
        <FixedSizeList height={600} itemCount={data.length} itemSize={100}>
            {Item}
        </FixedSizeList>
    )
}

export default inject('store')(observer(ResultsList))
