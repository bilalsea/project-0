import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from './store';
import {Login, AdminPanel, AdminDashboard, Plants, Settings } from './components';
import './index.css';

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={browserHistory}>
               <Route path="/" component={Login}/>
                <Route path="/adminpanel" component={AdminPanel}>
                    <IndexRoute component={AdminDashboard}/>
                    <Route path="/plants" component={Plants}/>
                    <Route path="/admindashboard" component={AdminDashboard}/>
                    <Route path="/settings" component={Settings}/>
                </Route>
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)