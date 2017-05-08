import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from './store';
import {Login, AdminPanel, Settings } from './components';

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={browserHistory}>
                <Route path="/" component={AdminPanel}>
                    <IndexRoute component={Login}/>
                    <Route path="/settings" component={Settings}/>                    
                </Route>
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)