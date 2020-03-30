import React from 'react'

const PageLayout = ({children}) => {
    return (
        <>
        <Navbar />
        {children}
        </>

    )
}

export default PageLayout
