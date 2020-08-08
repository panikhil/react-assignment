import React from 'react';

import ReactDOM from 'react-dom';
import App from './components/App'
import NotFound from './components/NotFound'

 
 import 'semantic-ui-css/semantic.min.css'
 
 import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
 
const root=(
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route component={NotFound} />
            
        </Switch>
    </Router>
)
ReactDOM.render(root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA



