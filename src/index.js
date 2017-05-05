import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from './store';
import {Login, AdminPanel } from './components';

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={browserHistory}>
                <Route path="/" component={Login}/>
                <Route path="/adminpanel" component={AdminPanel}/>
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)