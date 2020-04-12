import React from 'react'
import { ListRow, Title, GoArrow, FlexCol } from './styled'

const ListItem = ({ item, divStyle, ...rest }) => {
    return (
        <ListRow className="card p-1" {...rest} style={divStyle}>
            <FlexCol justify="start" className="col-sm-8">
                <div>
                    <Title>{item.Title}</Title>
                    <p>{item['Source (Organization)']}</p>
                </div>
            </FlexCol>

            <FlexCol justify="flex-end" className="col-sm-4">
                <GoArrow href={item.Link}>
                    <i className="fas fa-arrow-right"> </i>
                </GoArrow>
            </FlexCol>
        </ListRow>
    )
}
export default ListItem
