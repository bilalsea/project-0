import React, { Component } from 'react';
import { Link } from 'react-router';

import AdminDashboard from '../AdminDashboard/AdminDashboard';
import Plants from '../Plants/Plants';
import Settings from '../Settings/Settings';
import './AdminPanel.css';

export default class App extends Component {
    render() {
        return (
            <div className="AdminPanel">
                <div className="wrapper">
                    <div className="sidebar" data-active-color="blue" data-background-color="black" data-image="./assets/img/sidebar-1.jpg">
                        {/*<!--
        Tip 1: You can change the color of active element of the sidebar using: data-active-color="purple | blue | green | orange | red | rose"
        Tip 2: you can also add an image using data-image tag
        Tip 3: you can change the color of the sidebar with data-background-color="white | black"
    -->*/}
                        <div className="logo">
                            <a href="#" className="simple-text">
                                AdamJee Ro Plant
                            </a>
                        </div>
                        <div className="logo logo-mini">
                            <a href="" className="simple-text">
                                AJ
                            </a>
                        </div>
                        <div className="sidebar-wrapper">
                            <div className="user">
                                <div className="photo">
                                    <img src="./assets/img/admin.jpg" alt="" />
                                </div>
                                <div className="info">
                                    <a data-toggle="collapse" href="#collapseExample" className="collapsed">
                                        AdamJee
                                    <b className="caret"></b>
                                    </a>
                                    <div className="collapse" id="collapseExample">
                                        <ul className="nav">

                                            <li>
                                                <a href="#">Edit Profile</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <ul className="nav">
                                <li className="active">
                                    <Link to="/admindashboard">
                                        <i className="material-icons">dashboard</i>
                                        <p>Dashboard</p>
                                    </Link>
                                </li>
                                <li>
                                    <a data-toggle="collapse" href="#pagesExamples">
                                        <i className="material-icons">image</i>
                                        <p>Plants
                                        <b className="caret"></b>
                                        </p>
                                    </a>
                                    <div className="collapse" id="pagesExamples">
                                        <ul className="nav">
                                            <li>
                                                <Link to="/plants">Plant 1</Link>
                                            </li>
                                            <li>
                                                <Link to="/plants">Plant 2</Link>
                                            </li>
                                            <li>
                                                <Link to="/plants">Plant 3</Link>
                                            </li>
                                            {/*<li>
                                                <a href="./pages/register.html">Register Page</a>
                                            </li>
                                            <li>
                                                <a href="./pages/lock.html">Lock Screen Page</a>
                                            </li>
                                            <li>
                                                <a href="./pages/user.html">User Profile</a>
                                            </li>*/}
                                        </ul>
                                    </div>
                                </li>

                                <li>
                                    <a data-toggle="collapse" href="#mapsExamples">
                                        <i className="material-icons">place</i>
                                        <p>Maps
                                        <b className="caret"></b>
                                        </p>
                                    </a>
                                    <div className="collapse" id="mapsExamples">
                                        <ul className="nav">
                                            <li>
                                                <a href="#">Google Maps</a>
                                            </li>
                                            <li>
                                                <a href="#">Full Screen Map</a>
                                            </li>
                                            <li>
                                                <a href="#">Vector Map</a>
                                            </li>

                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <Link to="/settings">
                                        <i className="material-icons">settings</i>
                                        <p>Settings</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-panel">
                        <nav className="navbar navbar-transparent">
                            <div className="container-fluid">
                                <div className="navbar-minimize">
                                    <button id="minimizeSidebar" className="btn btn-round btn-white btn-fill btn-just-icon">
                                        <i className="material-icons visible-on-sidebar-regular">more_vert</i>
                                        <i className="material-icons visible-on-sidebar-mini">view_list</i>
                                    </button>
                                </div>
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <a className="navbar-brand" href="#"> Dashboard </a>
                                </div>
                                <div className="collapse navbar-collapse">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li>
                                            <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                                                <i className="material-icons">dashboard</i>
                                                <p className="hidden-lg hidden-md">Dashboard</p>
                                            </a>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                                <i className="material-icons">notifications</i>
                                                <span className="notification">5</span>
                                                <p className="hidden-lg hidden-md">
                                                    Notifications
                                                <b className="caret"></b>
                                                </p>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a href="#">Mike John responded to your email</a>
                                                </li>
                                                <li>
                                                    <a href="#">You have 5 new tasks</a>
                                                </li>
                                                <li>
                                                    <a href="#">You're now friend with Andrew</a>
                                                </li>
                                                <li>
                                                    <a href="#">Another Notification</a>
                                                </li>
                                                <li>
                                                    <a href="#">Another One</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                                                <i className="material-icons">person</i>
                                                <p className="hidden-lg hidden-md">Profile</p>
                                            </a>
                                        </li>
                                        <li className="separator hidden-lg hidden-md"></li>
                                    </ul>
                                    {/*<form className="navbar-form navbar-right" role="search">
                                        <div className="form-group form-search is-empty">
                                            <input type="text" className="form-control" placeholder="Search" />
                                            <span className="material-input"></span>
                                        </div>
                                        <button type="submit" className="btn btn-white btn-round btn-just-icon">
                                            <i className="material-icons">search</i>
                                            <div className="ripple-container"></div>
                                        </button>
                                    </form>*/}
                                </div>
                            </div>
                        </nav>
                        {this.props.children}
                        <footer className="footer footerDiv">
                            <div className="container-fluid">
                                <p className="copyright pull-right">
                                    &copy;
                                    2017
                                    <a href="">Saylani Software House</a>, work with passion for a better Experience
                                </p>
                            </div>
                        </footer>
                    </div>

                </div>

            </div>
        )
    }
}