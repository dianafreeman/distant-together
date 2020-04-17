import React from 'react'
import { ListRow, Title, GoArrow, FlexCol } from './styled'

const ListItem = ({ item, divStyle, ...rest }) => {
    return (
        <ListRow className="card p-1" {...rest} style={divStyle}>
            <div className="col-sm-10 col-md-8">
                <Title>{item.Title}</Title>
                <p>{item['Source (Organization)']}</p>
            </div>

            <FlexCol justify="flex-end" className="col-sm-4">
                <GoArrow href={item.Link}>
                    <i className="fas fa-arrow-right"> </i>
                </GoArrow>
            </FlexCol>
        </ListRow>
    )
}
export default ListItem
