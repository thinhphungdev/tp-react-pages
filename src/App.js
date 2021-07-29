import React from 'react';

import Header from './components/Layouts/Header.js';
import Counter from './components/pages/Counter.js';
import Table from './components/pages/Table.js';
import NotFound from './components/pages/NotFound.js';

import './sass/main.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const App = () => {
    return (
        <React.Fragment>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <Counter />
                    </Route>

                    <Route path="/table">
                        <Table />
                    </Route>

                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default App
