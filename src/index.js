import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from './store';
import './index.css';
import {
    Login, 
    AdminPanel, 
    AdminDashboard, 
    Plants, 
    Settings,
    ManagerPanel,
    Customers,
    Vendors,
    Quality 
} from './components';


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
                <Route path="/managerpanel" component={ManagerPanel}>
                    <IndexRoute component={Plants}/>
                    <Route path="/customers" component={Customers}/>
                    <Route path="/vendors" component={Vendors}/>
                    <Route path="/quality" component={Quality}/>
                </Route>           
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)