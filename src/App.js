import React from 'react';

import Header from './components/Layouts/Header.js';
import Counter from './components/pages/Counter.js';

import './sass/main.scss';

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Counter />
        </React.Fragment>
    )
}

export default App
