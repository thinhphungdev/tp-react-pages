import React, { useState } from 'react';

import Header from './components/Layouts/Header.js';
import Counter from './components/pages/Counter.js';
import Table from './components/pages/Table/Table.js';
import NotFound from './components/pages/NotFound.js';
import CustomModal from './components/UI/CustomModal.js';

import './sass/main.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const App = () => {
    const [show, setShow] = useState(false);

    const handleOpenModal = () => {
        setShow(true);
    }

    const handleCloseModal = () => {
        setShow(false);
    }

    return (
        <React.Fragment>
            <CustomModal openModal={handleOpenModal} closeModal={handleCloseModal} show={show} />

            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <Counter />
                    </Route>

                    <Route path="/table">
                        <Table openModal={handleOpenModal} />
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
