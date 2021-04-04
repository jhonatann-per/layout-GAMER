import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Intro from './pages/Intro'

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Intro} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;

