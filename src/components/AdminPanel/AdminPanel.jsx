import React, { Component } from 'react';
import './AdminPanel.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="sidebar" data-active-color="blue" data-background-color="black" data-image="./assets/img/sidebar-1.jpg">
                        {/*<!--
        Tip 1: You can change the color of active element of the sidebar using: data-active-color="purple | blue | green | orange | red | rose"
        Tip 2: you can also add an image using data-image tag
        Tip 3: you can change the color of the sidebar with data-background-color="white | black"
    -->*/}
                        <div className="logo">
                            <a href="" className="simple-text">
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
                                    <a href="./dashboard.html">
                                        <i className="material-icons">dashboard</i>
                                        <p>Dashboard</p>
                                    </a>
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
                                                <a href="./pages/pricing.html">Plant 1</a>
                                            </li>
                                            <li>
                                                <a href="./pages/timeline.html">Plant 2</a>
                                            </li>
                                            <li>
                                                <a href="./pages/login.html">Plant 3</a>
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
                                                <a href="./maps/google.html">Google Maps</a>
                                            </li>
                                            <li>
                                                <a href="./maps/fullscreen.html">Full Screen Map</a>
                                            </li>
                                            <li>
                                                <a href="./maps/vector.html">Vector Map</a>
                                            </li>

                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="./dashboard.html">
                                        <i className="material-icons">settings</i>
                                        <p>Settings</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-panel">
                        <nav className="navbar navbar-transparent navbar-absolute">
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

                        <div className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="card card-stats">
                                            <div className="card-header" data-background-color="blue">
                                                <i className="material-icons">account_balance</i>
                                            </div>
                                            <div className="card-content">
                                                <p className="category">Plant 1</p>
                                                <h3 className="card-title">$30000</h3>
                                            </div>
                                            <div className="card-footer anchorDiv">
                                                <div className="stats">
                                                    <i className="material-icons">info</i>
                                                    <a href="#pablo" style={{ textDecoration: 'none', color: '#999' }}>More info....</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="card card-stats">
                                            <div className="card-header" data-background-color="blue">
                                                <i className="material-icons">account_balance</i>
                                            </div>
                                            <div className="card-content">
                                                <p className="category">Plant 2</p>
                                                <h3 className="card-title">$75521</h3>
                                            </div>
                                            <div className="card-footer anchorDiv">
                                                <div className="stats">
                                                    <i className="material-icons">info</i>
                                                    <a href="#pablo" style={{ textDecoration: 'none', color: '#999' }}>More info....</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="card card-stats">
                                            <div className="card-header" data-background-color="blue">
                                                <i className="material-icons">account_balance</i>
                                            </div>
                                            <div className="card-content">
                                                <p className="category">Plant 3</p>
                                                <h3 className="card-title">$34,245</h3>
                                            </div>
                                            <div className="card-footer anchorDiv">
                                                <div className="stats">
                                                    <i className="material-icons">info</i>
                                                    <a href="#pablo" style={{ textDecoration: 'none', color: '#999' }}>More info....</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*<div className="row">
                                    <div className="col-md-4">
                                        <div className="card card-chart">
                                            <div className="card-header" data-background-color="rose" data-header-animation="true">
                                                <div className="ct-chart" id="websiteViewsChart"></div>
                                            </div>
                                            <div className="card-content">
                                                <div className="card-actions">
                                                    <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                                        <i className="material-icons">build</i> Fix Header!
                                                    </button>
                                                    <button type="button" className="btn btn-info btn-simple" rel="tooltip" data-placement="bottom" title="Refresh">
                                                        <i className="material-icons">refresh</i>
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="Change Date">
                                                        <i className="material-icons">edit</i>
                                                    </button>
                                                </div>
                                                <h4 className="card-title">Website Views</h4>
                                                <p className="category">Last Campaign Performance</p>
                                            </div>
                                            <div className="card-footer">
                                                <div className="stats">
                                                    <i className="material-icons">access_time</i> campaign sent 2 days ago
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card card-chart">
                                            <div className="card-header" data-background-color="green" data-header-animation="true">
                                                <div className="ct-chart" id="dailySalesChart"></div>
                                            </div>
                                            <div className="card-content">
                                                <div className="card-actions">
                                                    <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                                        <i className="material-icons">build</i> Fix Header!
                                                    </button>
                                                    <button type="button" className="btn btn-info btn-simple" rel="tooltip" data-placement="bottom" title="Refresh">
                                                        <i className="material-icons">refresh</i>
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="Change Date">
                                                        <i className="material-icons">edit</i>
                                                    </button>
                                                </div>
                                                <h4 className="card-title">Daily Sales</h4>
                                                <p className="category">
                                                    <span className="text-success"><i className="fa fa-long-arrow-up"></i> 55% </span> increase in today sales.</p>
                                            </div>
                                            <div className="card-footer">
                                                <div className="stats">
                                                    <i className="material-icons">access_time</i> updated 4 minutes ago
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card card-chart">
                                            <div className="card-header" data-background-color="blue" data-header-animation="true">
                                                <div className="ct-chart" id="completedTasksChart"></div>
                                            </div>
                                            <div className="card-content">
                                                <div className="card-actions">
                                                    <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                                        <i className="material-icons">build</i> Fix Header!
                                                    </button>
                                                    <button type="button" className="btn btn-info btn-simple" rel="tooltip" data-placement="bottom" title="Refresh">
                                                        <i className="material-icons">refresh</i>
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="Change Date">
                                                        <i className="material-icons">edit</i>
                                                    </button>
                                                </div>
                                                <h4 className="card-title">Completed Tasks</h4>
                                                <p className="category">Last Campaign Performance</p>
                                            </div>
                                            <div className="card-footer">
                                                <div className="stats">
                                                    <i className="material-icons">access_time</i> campaign sent 2 days ago
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>*/}

                                {/*<div className="row">
                                    <div className="col-md-12">
                                        <div className="card">
                                            <div className="card-header card-header-icon" data-background-color="green">
                                                <i className="material-icons">language</i>
                                            </div>
                                            <div className="card-content">
                                                <h4 className="card-title">Global Sales by Top Locations</h4>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <div className="table-responsive table-sales">
                                                            <table className="table">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="flag">
                                                                                <img src="../assets/img/flags/US.png" alt="" />
                                                                            </div>
                                                                        </td>
                                                                        <td>USA</td>
                                                                        <td className="text-right">
                                                                            2.920
                                                                        </td>
                                                                        <td className="text-right">
                                                                            53.23%
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="flag">
                                                                                <img src="../assets/img/flags/DE.png" alt="" />
                                                                            </div>
                                                                        </td>
                                                                        <td>Germany</td>
                                                                        <td className="text-right">
                                                                            1.300
                                                                        </td>
                                                                        <td className="text-right">
                                                                            20.43%
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="flag">
                                                                                <img src="../assets/img/flags/AU.png" alt="" />
                                                                            </div>
                                                                        </td>
                                                                        <td>Australia</td>
                                                                        <td className="text-right">
                                                                            760
                                                                        </td>
                                                                        <td className="text-right">
                                                                            10.35%
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="flag">
                                                                                <img src="../assets/img/flags/GB.png" alt="" />
                                                                            </div>
                                                                        </td>
                                                                        <td>United Kingdom</td>
                                                                        <td className="text-right">
                                                                            690
                                                                        </td>
                                                                        <td className="text-right">
                                                                            7.87%
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="flag">
                                                                                <img src="../assets/img/flags/RO.png" alt="" />
                                                                            </div>
                                                                        </td>
                                                                        <td>Romania</td>
                                                                        <td className="text-right">
                                                                            600
                                                                        </td>
                                                                        <td className="text-right">
                                                                            5.94%
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="flag">
                                                                                <img src="../assets/img/flags/BR.png" alt="" />
                                                                            </div>
                                                                        </td>
                                                                        <td>Brasil</td>
                                                                        <td className="text-right">
                                                                            550
                                                                        </td>
                                                                        <td className="text-right">
                                                                            4.34%
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-md-offset-1">
                                                        <div id="worldMap" className="map"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>*/}

                                <h3>Manage Plants</h3>
                                <br />
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card card-product">
                                            <div className="card-image" data-header-animation="true">
                                                <a href="#pablo">
                                                    <img className="img" src="../assets/img/card-2.jpeg" />
                                                </a>
                                            </div>
                                            <div className="card-content">
                                                <div className="card-actions">
                                                    <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                                        <i className="material-icons">build</i> Fix Header!
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="View">
                                                        <i className="material-icons">art_track</i>
                                                    </button>
                                                    <button type="button" className="btn btn-success btn-simple" rel="tooltip" data-placement="bottom" title="Edit">
                                                        <i className="material-icons">edit</i>
                                                    </button>
                                                    <button type="button" className="btn btn-danger btn-simple" rel="tooltip" data-placement="bottom" title="Remove">
                                                        <i className="material-icons">close</i>
                                                    </button>
                                                </div>
                                                <h4 className="card-title">
                                                    <a href="#pablo">Cozy 5 Stars Apartment</a>
                                                </h4>
                                                <div className="card-description">
                                                    The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="price">
                                                    <h4>$899/night</h4>
                                                </div>
                                                <div className="stats pull-right">
                                                    <p className="category"><i className="material-icons">place</i> Barcelona, Spain</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card card-product">
                                            <div className="card-image" data-header-animation="true">
                                                <a href="#pablo">
                                                    <img className="img" src="../assets/img/card-3.jpeg" />
                                                </a>
                                            </div>
                                            <div className="card-content">
                                                <div className="card-actions">
                                                    <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                                        <i className="material-icons">build</i> Fix Header!
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="View">
                                                        <i className="material-icons">art_track</i>
                                                    </button>
                                                    <button type="button" className="btn btn-success btn-simple" rel="tooltip" data-placement="bottom" title="Edit">
                                                        <i className="material-icons">edit</i>
                                                    </button>
                                                    <button type="button" className="btn btn-danger btn-simple" rel="tooltip" data-placement="bottom" title="Remove">
                                                        <i className="material-icons">close</i>
                                                    </button>
                                                </div>
                                                <h4 className="card-title">
                                                    <a href="#pablo">Office Studio</a>
                                                </h4>
                                                <div className="card-description">
                                                    The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="price">
                                                    <h4>$1.119/night</h4>
                                                </div>
                                                <div className="stats pull-right">
                                                    <p className="category"><i className="material-icons">place</i> London, UK</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card card-product">
                                            <div className="card-image" data-header-animation="true">
                                                <a href="#pablo">
                                                    <img className="img" src="../assets/img/card-1.jpeg" />
                                                </a>
                                            </div>
                                            <div className="card-content">
                                                <div className="card-actions">
                                                    <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                                        <i className="material-icons">build</i> Fix Header!
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="View">
                                                        <i className="material-icons">art_track</i>
                                                    </button>
                                                    <button type="button" className="btn btn-success btn-simple" rel="tooltip" data-placement="bottom" title="Edit">
                                                        <i className="material-icons">edit</i>
                                                    </button>
                                                    <button type="button" className="btn btn-danger btn-simple" rel="tooltip" data-placement="bottom" title="Remove">
                                                        <i className="material-icons">close</i>
                                                    </button>
                                                </div>
                                                <h4 className="card-title">
                                                    <a href="#pablo">Beautiful Castle</a>
                                                </h4>
                                                <div className="card-description">
                                                    The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="price">
                                                    <h4>$459/night</h4>
                                                </div>
                                                <div className="stats pull-right">
                                                    <p className="category"><i className="material-icons">place</i> Milan, Italy</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer className="footer">
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
                {/*<div className="fixed-plugin">
                    <div className="dropdown show-dropdown">
                        <a href="#" data-toggle="dropdown">
                            <i className="fa fa-cog fa-2x"> </i>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="header-title"> Sidebar Filters</li>
                            <li className="adjustments-line">
                                <a href="javascript:void(0)" className="switch-trigger active-color">
                                    <div className="badge-colors text-center">
                                        <span className="badge filter badge-purple" data-color="purple"></span>
                                        <span className="badge filter badge-blue" data-color="blue"></span>
                                        <span className="badge filter badge-green" data-color="green"></span>
                                        <span className="badge filter badge-orange" data-color="orange"></span>
                                        <span className="badge filter badge-red" data-color="red"></span>
                                        <span className="badge filter badge-rose active" data-color="rose"></span>
                                    </div>
                                    <div className="clearfix"></div>
                                </a>
                            </li>
                            <li className="header-title">Sidebar Background</li>
                            <li className="adjustments-line">
                                <a href="javascript:void(0)" className="switch-trigger background-color">
                                    <div className="text-center">
                                        <span className="badge filter badge-white" data-color="white"></span>
                                        <span className="badge filter badge-black active" data-color="black"></span>
                                    </div>
                                    <div className="clearfix"></div>
                                </a>
                            </li>
                            <li className="adjustments-line">
                                <a href="javascript:void(0)" className="switch-trigger">
                                    <p>Sidebar Mini</p>
                                    <div className="togglebutton switch-sidebar-mini">
                                        <label>
                                            <input type="checkbox" unchecked="" />
                                        </label>
                                    </div>
                                    <div className="clearfix"></div>
                                </a>
                            </li>
                            <li className="adjustments-line">
                                <a href="javascript:void(0)" className="switch-trigger">
                                    <p>Sidebar Image</p>
                                    <div className="togglebutton switch-sidebar-image">
                                        <label>
                                            <input type="checkbox" checked="" />
                                        </label>
                                    </div>
                                    <div className="clearfix"></div>
                                </a>
                            </li>
                            <li className="header-title">Images</li>
                            <li className="active">
                                <a className="img-holder switch-trigger" href="javascript:void(0)">
                                    <img src="../assets/img/sidebar-1.jpg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a className="img-holder switch-trigger" href="javascript:void(0)">
                                    <img src="../assets/img/sidebar-2.jpg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a className="img-holder switch-trigger" href="javascript:void(0)">
                                    <img src="../assets/img/sidebar-3.jpg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a className="img-holder switch-trigger" href="javascript:void(0)">
                                    <img src="../assets/img/sidebar-4.jpg" alt="" />
                                </a>
                            </li>
                            <li className="button-container">
                                <div className="">
                                    <a href="http://www.creative-tim.com/product/material-dashboard-pro" target="_blank" className="btn btn-rose btn-block">Buy Now</a>
                                </div>
                                <div className="">
                                    <a href="http://www.creative-tim.com/product/material-dashboard" target="_blank" className="btn btn-info btn-block">Get Free Demo</a>
                                </div>
                            </li>
                            <li className="header-title">Thank you for 95 shares!</li>
                            <li className="button-container">
                                <button id="twitter" className="btn btn-social btn-twitter btn-round"><i className="fa fa-twitter"></i> &middot; 45</button>
                                <button id="facebook" className="btn btn-social btn-facebook btn-round"><i className="fa fa-facebook-square"> &middot;</i>50</button>
                            </li>
                        </ul>
                    </div>
                </div>*/}
            </div>
        )
    }
}