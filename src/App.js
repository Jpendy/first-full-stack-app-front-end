import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import HomePage from './HomePage.js'
import DetailPage from './DetailPage.js'
import Header from './Header.js'
import FormPage from './FormPage.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    
                    <Header/>

                    <Switch>

                        <Route
                            path="/"
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />}                       
                        />

                        <Route
                            path="/dogs/:id"
                            exact
                            render={(routerProps) => <DetailPage {...routerProps} />}

                        />

                        <Route
                            path="/form/"
                            exact
                            render={(routerProps) => <FormPage {...routerProps} />}

                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}
