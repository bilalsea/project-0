import React, { Component } from 'react';
import {Link} from 'react-router';
import './AdminPanel.css';

export default class App extends Component {
    render() {
        return (
            <div className="adminPanel">
                <div className="wrapper">
                    <div className="sidebar" data-color="orange" data-image="../assets/img/full-screen-image-3.jpg">
                        {/*<!--

            Tip 1: you can change the color of the sidebar using: data-color="blue | azure | green | orange | red | purple"
            Tip 2: you can also add an image using data-image tag

        -->*/}

                        <div className="logo">
                            <a href="" className="logo-text">
                                Admin panel
                            </a>
                        </div>
                        <div className="logo logo-mini">
                            <a href="http://www.creative-tim.com" className="logo-text">
                                Ct
			                </a>
                        </div>

                        <div className="sidebar-wrapper">
                            <div className="user">
                                <div className="photo">
                                    <img src="../assets/img/admin.jpg" />
                                </div>
                                <div className="info">
                                    <a data-toggle="collapse" href="#collapseExample" className="collapsed">
                                        Admin
                                    <b className="caret"></b>
                                    </a>
                                    <div className="collapse" id="collapseExample">
                                        <ul className="nav">
                                            <li><a href="#">Edit Profile</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <ul className="nav">
                                <li className="active">
                                    <a href="dashboard.html">
                                        <i className="fa fa-home"></i>
                                        <p>Dashboard</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="calendar.html">
                                        <i className="fa fa-calendar"></i>
                                        <p>Calendar</p>
                                    </a>
                                </li>
                                
                                <li>
                                    <a data-toggle="collapse" href="#mapsExamples">
                                        <i className="fa fa-map-marker"></i>
                                        <p>Maps
                                        <b className="caret"></b>
                                        </p>
                                    </a>
                                    <div className="collapse" id="mapsExamples">
                                        <ul className="nav">
                                            <li><a href="maps/google.html">Google Maps</a></li>
                                            <li><a href="maps/vector.html">Vector Maps</a></li>
                                            <li><a href="maps/fullscreen.html">Full Screen Map</a></li>
                                        </ul>
                                    </div>
                                </li>
                                 <li>
                                    <Link to="/settings">
                                        <i className="fa fa-cog"></i>
                                        <p>Settings</p>
                                    </Link>
                                </li>

                                {/*<li>
                                    <a data-toggle="collapse" href="#componentsExamples">
                                        <i className="fa fa-plugin"></i>
                                        <p>Components
                                        <b className="caret"></b>
                                        </p>
                                    </a>
                                    <div className="collapse" id="componentsExamples">
                                        <ul className="nav">
                                            <li><a href="components/buttons.html">Buttons</a></li>
                                            <li><a href="components/grid.html">Grid System</a></li>
                                            <li><a href="components/icons.html">Icons</a></li>
                                            <li><a href="components/notifications.html">Notifications</a></li>
                                            <li><a href="components/panels.html">Panels</a></li>
                                            <li><a href="components/sweet-alert.html">Sweet Alert</a></li>
                                            <li><a href="components/typography.html">Typography</a></li>
                                        </ul>
                                    </div>
                                </li>

                                <li>
                                    <a data-toggle="collapse" href="#formsExamples">
                                        <i className="fa fa-note2"></i>
                                        <p>Forms
                           <b className="caret"></b>
                                        </p>
                                    </a>
                                    <div className="collapse" id="formsExamples">
                                        <ul className="nav">
                                            <li><a href="forms/regular.html">Regular Forms</a></li>
                                            <li><a href="forms/extended.html">Extended Forms</a></li>
                                            <li><a href="forms/validation.html">Validation Forms</a></li>
                                            <li><a href="forms/wizard.html">Wizard</a></li>
                                        </ul>
                                    </div>
                                </li>

                                <li>
                                    <a data-toggle="collapse" href="#tablesExamples">
                                        <i className="fa fa-news-paper"></i>
                                        <p>Tables
                           <b className="caret"></b>
                                        </p>
                                    </a>
                                    <div className="collapse" id="tablesExamples">
                                        <ul className="nav">
                                            <li><a href="tables/regular.html">Regular Tables</a></li>
                                            <li><a href="tables/extended.html">Extended Tables</a></li>
                                            <li><a href="tables/bootstrap-table.html">Bootstrap Table</a></li>
                                            <li><a href="tables/datatables.net.html">DataTables.net</a></li>
                                        </ul>
                                    </div>
                                </li>*/}

                                {/*<li>
                                    <a href="charts.html">
                                        <i className="fa fa-graph1"></i>
                                        <p>Charts</p>
                                    </a>
                                </li>*/}

                                

                                {/*<li>
                                    <a data-toggle="collapse" href="#pagesExamples">
                                        <i className="pe-7s-gift"></i>
                                        <p>Pages
                                        <b className="caret"></b>
                                        </p>
                                    </a>
                                    <div className="collapse" id="pagesExamples">
                                        <ul className="nav">
                                            <li><a href="pages/login.html">Login Page</a></li>
                                            <li><a href="pages/register.html">Register Page</a></li>
                                            <li><a href="pages/lock.html">Lock Screen Page</a></li>
                                            <li><a href="pages/user.html">User Page</a></li>
                                            <li><a href="#">More coming soon...</a></li>
                                        </ul>
                                    </div>
                                </li>*/}
                            </ul>
                        </div>
                    </div>

                    <div className="main-panel">
                        <nav className="navbar navbar-default">
                            <div className="container-fluid">
                                <div className="navbar-minimize">
                                    <button id="minimizeSidebar" className="btn btn-warning btn-fill btn-round btn-icon">
                                        <i className="fa fa-ellipsis-v visible-on-sidebar-regular"></i>
                                        <i className="fa fa-navicon visible-on-sidebar-mini"></i>
                                    </button>
                                </div>
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <a className="navbar-brand" href="#">Dashboard PRO</a>
                                </div>
                                <div className="collapse navbar-collapse">

                                    <form className="navbar-form navbar-left navbar-search-form" role="search">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-search"></i></span>
                                            <input type="text" value="" className="form-control" placeholder="Search..." />
                                        </div>
                                    </form>

                                    <ul className="nav navbar-nav navbar-right">
                                        <li>
                                            <a href="charts.html">
                                                <i className="fa fa-line-chart"></i>
                                                <p>Stats</p>
                                            </a>
                                        </li>

                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                                <i className="fa fa-gavel"></i>
                                                <p className="hidden-md hidden-lg">
                                                    Actions
									<b className="caret"></b>
                                                </p>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Create New Post</a></li>
                                                <li><a href="#">Manage Something</a></li>
                                                <li><a href="#">Do Nothing</a></li>
                                                <li><a href="#">Submit to live</a></li>
                                                <li className="divider"></li>
                                                <li><a href="#">Another Action</a></li>
                                            </ul>
                                        </li>

                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                                <i className="fa fa-bell-o"></i>
                                                <span className="notification">5</span>
                                                <p className="hidden-md hidden-lg">
                                                    Notifications
									<b className="caret"></b>
                                                </p>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Notification 1</a></li>
                                                <li><a href="#">Notification 2</a></li>
                                                <li><a href="#">Notification 3</a></li>
                                                <li><a href="#">Notification 4</a></li>
                                                <li><a href="#">Another notification</a></li>
                                            </ul>
                                        </li>

                                        <li className="dropdown dropdown-with-icons">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                                <i className="fa fa-list"></i>
                                                <p className="hidden-md hidden-lg">
                                                    More
									<b className="caret"></b>
                                                </p>
                                            </a>
                                            <ul className="dropdown-menu dropdown-with-icons">
                                                <li>
                                                    <a href="#">
                                                        <i className="pe-7s-mail"></i> Messages
									</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="pe-7s-help1"></i> Help Center
									</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="pe-7s-tools"></i> Settings
									</a>
                                                </li>
                                                <li className="divider"></li>
                                                <li>
                                                    <a href="#">
                                                        <i className="pe-7s-lock"></i> Lock Screen
									</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-danger">
                                                        <i className="pe-7s-close-circle"></i>
                                                        Log out
									</a>
                                                </li>
                                            </ul>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <div className="content">
                            <div className="container-fluid">

                               <div className="row">
                    <div className="col-md-12">
                        <div className="card col-md-12">
                            <div className="header">
                                <h4 className="title">Total sales summary</h4>
                                <p className="category"></p>
                            </div>
                            <div className="content table-responsive table-full-width scrollTable">
                                <table className="table table-hover table-striped ">
                                    <thead>
                                        <th>Rciept No</th>
                                    	<th>Family ID</th>
                                    	<th>Block</th>
                                    	<th>No of family member</th>
                                    	<th>Do you own a tank</th>
                                    	<th>Taransport</th>
                                    	<th>Time to plant</th>
                                    	<th>Internal/External container</th>
                                    	<th>Gender</th>
                                    	<th>Date</th>
                                    	<th>Time sold</th>
                                    	<th>No of cans sold</th>
                                    	<th>Can Capacity</th>
                                    	<th>Total liters</th>
                                    	<th>Place of sale</th>
                                    	<th>Shopkeeper Name</th>
                                    	<th>Amount paid</th>
                                    	<th>Deposit/can</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        	<td>1</td>
                                        	<td>Dakota Rice</td>
                                        	<td>$36,738</td>
                                        	<td>Niger</td>
                                        	<td>Oud-Turnhout</td>
                                        	<td>Oud-Turnhout</td>
                                        	<td>Oud-Turnhout</td>
                                        	<td>Oud-Turnhout</td>
                                        	<td>Oud-Turnhout</td>
                                        	<td>Oud-Turnhout</td>
                                        	<td>Oud-Turnhout</td>
                                        	<td>Oud-Turnhout</td>
                                        	<td>Oud-Turnhout</td>
                                        	<td>Oud-Turnhout</td>
                                        	<td>Oud-Turnhout</td>
                                        	<td>Oud-Turnhout</td>
                                        	<td>Oud-Turnhout</td>
                                        	<td>Oud-Turnhout</td>
                                        </tr>
                                        <tr>
                                        	<td>2</td>
                                        	<td>Minerva Hooper</td>
                                        	<td>$23,789</td>
                                        	<td>Curaçao</td>
                                        	<td>Sinaai-Waas</td>
                                        	<td>Sinaai-Waas</td>
                                        	<td>Sinaai-Waas</td>
                                        	<td>Sinaai-Waas</td>
                                        	<td>Sinaai-Waas</td>
                                        	<td>Sinaai-Waas</td>
                                        	<td>Sinaai-Waas</td>
                                        	<td>Sinaai-Waas</td>
                                        	<td>Sinaai-Waas</td>
                                        	<td>Sinaai-Waas</td>
                                        	<td>Sinaai-Waas</td>
                                        	<td>Sinaai-Waas</td>
                                        	<td>Sinaai-Waas</td>
                                        	<td>Sinaai-Waas</td>
                                        </tr>
                                        <tr>
                                        	<td>3</td>
                                        	<td>Sage Rodriguez</td>
                                        	<td>$56,142</td>
                                        	<td>Netherlands</td>
                                        	<td>Baileux</td>
                                        	<td>Baileux</td>
                                        	<td>Baileux</td>
                                        	<td>Baileux</td>
                                        	<td>Baileux</td>
                                        	<td>Baileux</td>
                                        	<td>Baileux</td>
                                        	<td>Baileux</td>
                                        	<td>Baileux</td>
                                        	<td>Baileux</td>
                                        	<td>Baileux</td>
                                        	<td>Baileux</td>
                                        	<td>Baileux</td>
                                        	<td>Baileux</td>
                                        </tr>
                                        <tr>
                                        	<td>4</td>
                                        	<td>Philip Chaney</td>
                                        	<td>$38,735</td>
                                        	<td>Korea, South</td>
                                        	<td>Overland Park</td>
                                        	<td>Overland Park</td>
                                        	<td>Overland Park</td>
                                        	<td>Overland Park</td>
                                        	<td>Overland Park</td>
                                        	<td>Overland Park</td>
                                        	<td>Overland Park</td>
                                        	<td>Overland Park</td>
                                        	<td>Overland Park</td>
                                        	<td>Overland Park</td>
                                        	<td>Overland Park</td>
                                        	<td>Overland Park</td>
                                        	<td>Overland Park</td>
                                        	<td>Overland Park</td>
                                        </tr>
                                        <tr>
                                        	<td>5</td>
                                        	<td>Doris Greene</td>
                                        	<td>$63,542</td>
                                        	<td>Malawi</td>
                                        	<td>Feldkirchen in Kärnten</td>
                                        	<td>Feldkirchen in Kärnten</td>
                                        	<td>Feldkirchen in Kärnten</td>
                                        	<td>Feldkirchen in Kärnten</td>
                                        	<td>Feldkirchen in Kärnten</td>
                                        	<td>Feldkirchen in Kärnten</td>
                                        	<td>Feldkirchen in Kärnten</td>
                                        	<td>Feldkirchen in Kärnten</td>
                                        	<td>Feldkirchen in Kärnten</td>
                                        	<td>Feldkirchen in Kärnten</td>
                                        	<td>Feldkirchen in Kärnten</td>
                                        	<td>Feldkirchen in Kärnten</td>
                                        	<td>Feldkirchen in Kärnten</td>
                                        	<td>Feldkirchen in Kärnten</td>
                                        </tr>
                                        <tr>
                                        	<td>6</td>
                                        	<td>Mason Porter</td>
                                        	<td>$78,615</td>
                                        	<td>Chile</td>
                                        	<td>Gloucester</td>
                                        	<td>Gloucester</td>
                                        	<td>Gloucester</td>
                                        	<td>Gloucester</td>
                                        	<td>Gloucester</td>
                                        	<td>Gloucester</td>
                                        	<td>Gloucester</td>
                                        	<td>Gloucester</td>
                                        	<td>Gloucester</td>
                                        	<td>Gloucester</td>
                                        	<td>Gloucester</td>
                                        	<td>Gloucester</td>
                                        	<td>Gloucester</td>
                                        	<td>Gloucester</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>



                                {/*<div className="row">
                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="header">
                                                <h4 className="title">Email Statistics</h4>
                                                <p className="category">Last Campaign Performance</p>
                                            </div>
                                            <div className="content">
                                                <div id="chartEmail" className="ct-chart "></div>
                                            </div>
                                            <div className="footer">
                                                <div className="legend">
                                                    <i className="fa fa-circle text-info"></i> Open
                                    <i className="fa fa-circle text-danger"></i> Bounce
                                    <i className="fa fa-circle text-warning"></i> Unsubscribe
                                </div>
                                                <hr />
                                                <div className="stats">
                                                    <i className="fa fa-clock-o"></i> Campaign sent 2 days ago
                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-md-8">
                                        <div className="card">
                                            <div className="header">
                                                <h4 className="title">Users Behavior</h4>
                                                <p className="category">24 Hours performance</p>
                                            </div>
                                            <div className="content">
                                                <div id="chartHours" className="ct-chart"></div>
                                            </div>
                                            <div className="footer">
                                                <div className="legend">
                                                    <i className="fa fa-circle text-info"></i> Open
                                    <i className="fa fa-circle text-danger"></i> Click
                                    <i className="fa fa-circle text-warning"></i> Click Second Time
                                </div>
                                                <hr />
                                                <div className="stats">
                                                    <i className="fa fa-history"></i> Updated 3 minutes ago
                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card ">
                                            <div className="header">
                                                <h4 className="title">2014 Sales</h4>
                                                <p className="category">All products including Taxes</p>
                                            </div>
                                            <div className="content">
                                                <div id="chartActivity" className="ct-chart"></div>
                                            </div>
                                            <div className="footer">
                                                <div className="legend">
                                                    <i className="fa fa-circle text-info"></i> Tesla Model S
                                    <i className="fa fa-circle text-danger"></i> BMW 5 Series
                                </div>
                                                <hr />
                                                <div className="stats">
                                                    <i className="fa fa-check"></i> Data information certified
                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="card ">
                                            <div className="header">
                                                <h4 className="title">Tasks</h4>
                                                <p className="category">Backend development</p>
                                            </div>
                                            <div className="content">
                                                <div className="table-full-width">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <label className="checkbox">
                                                                        <input type="checkbox" value="" data-toggle="checkbox" />
                                                                    </label>
                                                                </td>
                                                                <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                                                        <i className="fa fa-edit"></i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                        <i className="fa fa-times"></i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label className="checkbox">
                                                                        <input type="checkbox" value="" data-toggle="checkbox" />
                                                                    </label>
                                                                </td>
                                                                <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                                                        <i className="fa fa-edit"></i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                        <i className="fa fa-times"></i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label className="checkbox">
                                                                        <input type="checkbox" value="" data-toggle="checkbox" />
                                                                    </label>
                                                                </td>
                                                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                                                        <i className="fa fa-edit"></i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                        <i className="fa fa-times"></i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label className="checkbox">
                                                                        <input type="checkbox" value="" data-toggle="checkbox" />
                                                                    </label>
                                                                </td>
                                                                <td>Create 4 Invisible User Experiences you Never Knew About</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                                                        <i className="fa fa-edit"></i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                        <i className="fa fa-times"></i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label className="checkbox">
                                                                        <input type="checkbox" value="" data-toggle="checkbox" />
                                                                    </label>
                                                                </td>
                                                                <td>Read "Following makes Medium better"</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                                                        <i className="fa fa-edit"></i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                        <i className="fa fa-times"></i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label className="checkbox">
                                                                        <input type="checkbox" value="" data-toggle="checkbox" />
                                                                    </label>
                                                                </td>
                                                                <td>Unfollow 5 enemies from twitter</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                                                        <i className="fa fa-edit"></i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                        <i className="fa fa-times"></i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <hr />
                                                <div className="stats">
                                                    <i className="fa fa-history"></i> Updated 3 minutes ago
                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>*/}



                            </div>
                        </div>


                        <footer className="footer">
                            <div className="container-fluid">
                                {/*<nav className="pull-left">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Company
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Portfolio
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Blog
                                            </a>
                                        </li>
                                    </ul>
                                </nav>*/}
                                <p className="copyright pull-right">
                                    &copy; 2016 <a href="http://www.creative-tim.com">Creative Tim</a>, made with love for a better web
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
                            <li className="header-title">Configuration</li>
                            <li className="adjustments-line">
                                <a href="javascript:void(0)" className="switch-trigger">
                                    <p>Sidebar Image</p>
                                    <div className="switch switch-sidebar-image"
                                        data-on-label="ON"
                                        data-off-label="OFF">
                                        <input type="checkbox"/>
                                    </div>
                                    <div className="clearfix"></div>
                                </a>
                            </li>
                            <li className="adjustments-line">
                                <a href="javascript:void(0)" className="switch-trigger">
                                    <p>Sidebar Mini</p>
                                    <div className="switch  switch-sidebar-mini"
                                        data-on-label="ON"
                                        data-off-label="OFF">
                                        <input type="checkbox" />
                                    </div>
                                    <div className="clearfix"></div>
                                </a>
                            </li>
                            <li className="adjustments-line">
                                <a href="javascript:void(0)" className="switch-trigger">
                                    <p>Fixed Navbar</p>
                                    <div className="switch  switch-navbar-fixed"
                                        data-on-label="ON"
                                        data-off-label="OFF">
                                        <input type="checkbox" />
                                    </div>
                                    <div className="clearfix"></div>
                                </a>
                            </li>
                            <li className="adjustments-line">
                                <a href="javascript:void(0)" className="switch-trigger">
                                    <p>Filters</p>
                                    <div className="pull-right">
                                        <span className="badge filter" data-color="black"></span>
                                        <span className="badge filter badge-azure" data-color="azure"></span>
                                        <span className="badge filter badge-green" data-color="green"></span>
                                        <span className="badge filter badge-orange active" data-color="orange"></span>
                                        <span className="badge filter badge-red" data-color="red"></span>
                                        <span className="badge filter badge-purple" data-color="purple"></span>
                                    </div>
                                    <div className="clearfix"></div>
                                </a>
                            </li>
                            <li className="header-title">Sidebar Images</li>
                            <li>
                                <a className="img-holder switch-trigger" href="javascript:void(0)">
                                    <img src="/light-bootstrap-dashboard-pro/assets/img/full-screen-image-1.jpg" />
                                </a>
                            </li>
                            <li>
                                <a className="img-holder switch-trigger" href="javascript:void(0)">
                                    <img src="/light-bootstrap-dashboard-pro/assets/img/full-screen-image-2.jpg" />
                                </a>
                            </li>
                            <li className="active">
                                <a className="img-holder switch-trigger" href="javascript:void(0)">
                                    <img src="/light-bootstrap-dashboard-pro/assets/img/full-screen-image-3.jpg" />
                                </a>
                            </li>
                            <li>
                                <a className="img-holder switch-trigger" href="javascript:void(0)">
                                    <img src="/light-bootstrap-dashboard-pro/assets/img/full-screen-image-4.jpg" />
                                </a>
                            </li>

                            <li className="button-container">
                                <div className="">
                                    <a href="http://www.creative-tim.com/product/light-bootstrap-dashboard" target="_blank" className="btn btn-info btn-block">Get Free Demo</a>
                                </div>
                                <div className="">
                                    <a href="http://www.creative-tim.com/product/light-bootstrap-dashboard-pro" target="_blank" className="btn btn-info btn-block btn-fill">Buy Now!</a>
                                </div>
                            </li>

                            <li className="header-title">Thank you for 452 shares!</li>

                            <li className="button-container">
                                <button id="twitter" className="btn btn-social btn-twitter btn-round"><i className="fa fa-twitter"></i> &middot; 182</button>
                                <button id="facebook" className="btn btn-social btn-facebook btn-round"><i className="fa fa-facebook-square"> &middot; 270</i></button>
                            </li>

                        </ul>
                    </div>
                </div>*/}
            </div>
        )
    }
}