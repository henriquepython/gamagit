import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Repositories from './Repositories';

export default Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Router path='/repositories' component={Repositories} />
            </Switch>
        </BrowserRouter>
    )
}