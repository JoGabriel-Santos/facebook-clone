import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Authentication from './pages/Authentication';
import Home from './pages/Home'

import './styles/styles.css';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/auth'} component={Authentication} exact />
                <Route path={'/'} component={Home} exact />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
