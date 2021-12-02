import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Footer, Header } from '../../components'
import Profile from '../Profile';
import Home from '../Home';
import "./mainApp.css"

const MainApp = () => {
    return (
        <div className="main-app-wrapper">
            <Header />
            <div className="content-wrapper">
                <Router>
                    <Switch>
                        <Route path="/profile">
                            <Profile />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <Footer />
        </div>
    )
}

export default MainApp
