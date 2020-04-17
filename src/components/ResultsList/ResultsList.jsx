import React from 'react'
import { inject, observer } from 'mobx-react'
import LazyLoad from 'react-lazyload'
import SimpleBar from 'simplebar-react'
import ListItem from '../ListItem'
import NothingFound from '../NothingFound'
import 'simplebar/dist/simplebar.min.css'

const ResultsList = ({ store }) => {
    let data = store.filtered

    const Item = ({ item, index, ...rest }) => (
        <ListItem
            item={item}
            key={`list-item-${index}-${item.Title.replace(
                ' ',
                '-'
            ).toLowerCase()}`}
            {...rest}
        />
    )

    return data.length === 0 ? (
        <NothingFound />
    ) : (
        <SimpleBar id={'scrollContainer'} style={{ maxHeight: '80vh' }}>
            {data.map((d, index) => (
                <LazyLoad scrollContainer={'#scrollContainer'} resize>
                    <Item item={d} index={index} />
                </LazyLoad>
            ))}
        </SimpleBar>
    )
}

export default inject('store')(observer(ResultsList))
