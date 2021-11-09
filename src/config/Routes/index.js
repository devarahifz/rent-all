import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Login, Register } from '../../pages';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/register'>
                    <Register />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes