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
        const {id, password} = this.state;
        this.props.signIn(id, password); 
    }
    render() {
        return (
            <div className="loginDiv">
                <div className="wrapper wrapper-full-page">
<<<<<<< HEAD
                    <div className="full-page login-page" data-image="../assets/img/sidebar-3.jpg">
=======
                    <div className="full-page login-page" data-image="../assets/img/sidebar-2.jpg">
>>>>>>> cf6fe05e622f2617991dd4e0c94f6f4d0ddfaab3
                        {/*<!--   you can change the color of the filter page using: data-color="blue | purple | green | orange | red | rose " -->*/}
                        <div className="content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                                        <form method="#" action="#">
                                            <div className="card card-login card-hidden">
                                                <div className="card-header text-center" data-background-color="purple">
                                                    <h3 className="card-title">Login</h3>
                                                </div>
                                                <p className="category text-center">
                                                    To continue....
                                                </p>
                                                <div className="card-content">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i className="material-icons">face</i>
                                                        </span>
                                                        <div className="form-group label-floating">
                                                            <label className="control-label">ID</label>
                                                            <input 
                                                                type="password" 
                                                                className="form-control" 
                                                                onChange={event => this.setState({id: event.target.value})}
                                                                onKeyPress={event => {
                                                                    if(event.key === "Enter"){
                                                                        this.handleSubmit();
                                                                    }
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    {/*<div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i className="material-icons">email</i>
                                                        </span>
                                                        <div className="form-group label-floating">
                                                            <label className="control-label">Email address</label>
                                                            <input type="email" className="form-control" />
                                                        </div>
                                                    </div>*/}
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i className="material-icons">lock_outline</i>
                                                        </span>
                                                        <div className="form-group label-floating">
                                                            <label className="control-label">Password</label>
                                                            <input 
                                                                type="password" 
                                                                className="form-control" 
                                                                onChange={event => this.setState({password: event.target.value})}
                                                                onKeyPress={event => {
                                                                    if(event.key === "Enter"){
                                                                        this.handleSubmit();
                                                                    }
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="footer text-center">
                                                    <button type="submit" className="btn btn-rose btn-simple btn-wd btn-lg" onTouchTap={this.handleSubmit} >Let's go</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer className="footer">
                            <div className="container">
                                <p className="copyright pull-right">
                                    &copy; 2017
                                    <a href="#">Saylani Software House</a>, made with love for a better web
                                </p>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
