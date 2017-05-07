import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Login.css';
import AuthMiddleware from '../../store/middlewares/authMiddleware.js';

function mapStateToProps(state) {
    return {
        data: state,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signIn: (id, password) => dispatch(AuthMiddleware.login(id, password))
    }
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            password: null
        }
    }

    handleSubmit = () => {
        const { id, password } = this.state;
        this.props.signIn(id, password);
    }
    render() {
        return (
            <div className="loginDiv">
                <div className="wrapper wrapper-full-page">
                    <div className="full-page login-page" data-color="orange" data-image="../assets/img/full-screen-image-1.jpg">

                        {/*<!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->*/}
                        <div className="content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                                        <form method="#" action="#">

                                            {/*<!--   if you want to have the card without animation please remove the ".card-hidden" className   -->*/}
                                            <div className="card card-hidden">
                                                <div className="header text-center">Login</div>
                                                <div className="content">
                                                    <div className="form-group">
                                                        <label>ID</label>
                                                        <input 
                                                            type="password" 
                                                            placeholder="Enter email" 
                                                            className="form-control" 
                                                            onChange={event => this.setState({id: event.target.value})}
                                                            onKeyPress={event => {
                                                                if(event.key === "Enter")
                                                                    this.handleSubmit();
                                                            }}
                                                            />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Password</label>
                                                        <input 
                                                            type="password" 
                                                            placeholder="Password" 
                                                            className="form-control" 
                                                            onChange={event => this.setState({password: event.target.value})}
                                                            onKeyPress={event => {
                                                                if(event.key === "Enter")
                                                                    this.handleSubmit();
                                                            }}
                                                            />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="checkbox">
                                                            <input type="checkbox" data-toggle="checkbox" value="" />
                                                            Subscribe to newsletter
                                        </label>
                                                    </div>
                                                </div>
                                                <div className="footer text-center">
                                                    <button type="button" className="btn btn-fill btn-warning btn-wd" onClick={this.handleSubmit}>Login</button>
                                                </div>
                                            </div>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<footer className="footer footer-transparent">
                            <div className="container">
                                <nav className="pull-left">
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
                                </nav>
                                <p className="copyright pull-right">
                                    &copy; 2016 <a href="http://www.creative-tim.com">Creative Tim</a>, made with love for a better web
                </p>
                            </div>
                        </footer>*/}

                    </div>

                </div>



                {/*<div className="fixed-plugin">
                    <div className="dropdown show-dropdown">
                        <a href="#" data-toggle="dropdown">
                            <i className="fa fa-cog fa-2x"> </i>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="header-title">Background Style</li>
                            <li className="adjustments-line">
                                <a href="javascript:void(0)" className="switch-trigger">
                                    <p>Background Image</p>
                                    <div className="switch"
                                        data-on-label="ON"
                                        data-off-label="OFF">
                                        <input type="checkbox" defaultChecked />
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
                            <li className="active">
                                <a className="img-holder switch-trigger" href="javascript:void(0)">
                                    <img src="/light-bootstrap-dashboard-pro/assets/img/full-screen-image-1.jpg" />
                                </a>
                            </li>
                            <li>
                                <a className="img-holder switch-trigger" href="javascript:void(0)">
                                    <img src="/light-bootstrap-dashboard-pro/assets/img/full-screen-image-2.jpg" />
                                </a>
                            </li>
                            <li>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
