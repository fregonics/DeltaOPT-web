import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProdutsView from './pages/ProductsView';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={ProdutsView} />
            </Switch>
        </BrowserRouter>
    )    
}

export default Router;