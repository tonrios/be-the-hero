import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logon from './pages/logon'
import Register from './pages/register'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} ></Route>
                <Route path="/register" component={Register} ></Route>
            </Switch>
        </BrowserRouter>
    )
}