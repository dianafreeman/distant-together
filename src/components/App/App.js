import React, { useState, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from '../../views/Index'

import './App.scss'

const App = ({ store }) => {
    const results = store.resources

    useEffect(() => {
        store.getResources()
    }, [])
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home store={store} />
                </Route>
            </Switch>
        </Router>
    )
}

export default inject('store')(observer(App))
