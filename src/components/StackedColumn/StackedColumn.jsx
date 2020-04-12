import React from 'react'

const StackedColumn = ({ TopSection, children, ...rest }) => {
    return (
        <div {...rest}>
            <div className="col-sm-12">{TopSection()}</div>
            <div className="col-sm-12">{children}</div>
        </div>
    )
}

export default StackedColumn
