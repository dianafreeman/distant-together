import React, { useState } from 'react'
import { ListRow, Title, GoArrow, FlexCol, Source, Toggle } from './styled'

const ListItem = ({ item }) => {
    const [isOpen, setOpen] = useState(false)
    return (
        <ListRow className="card">
            <div className="col-sm-12">
                <FlexCol justify="start">
                    <div>
                        <Title>{item.Title}</Title>
                    </div>
                </FlexCol>
                <div style={{ width: '80%', float: 'left' }}>
                    <p>{item['Source (Organization)']}</p>
                </div>

                <FlexCol justify="end">
                    <GoArrow href={item.Link}>
                        <i className="fas fa-arrow-right"> </i>
                    </GoArrow>{' '}
                </FlexCol>
            </div>

            <div style={{ position: 'absolute', left: '0', bottom: '0' }}>
                <p>{item.Tags}</p>
            </div>
        </ListRow>
    )
}
export default ListItem
