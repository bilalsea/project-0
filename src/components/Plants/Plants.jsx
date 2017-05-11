import React,{Component} from "react";
<<<<<<< HEAD
import {Link} from 'react-router';
=======
>>>>>>> cf6fe05e622f2617991dd4e0c94f6f4d0ddfaab3
import "./Plants.css";

class Plants extends Component{
    render(){
        return(
<<<<<<< HEAD
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card card-stats">
                                    <div className="card-header" data-background-color="blue">
                                        <i className="material-icons">shopping_cart</i>
                                    </div>
                                    <div className="card-content">
                                        <p className="category">Bottles</p>
                                        <h3 className="card-title">500</h3>
                                    </div>
                                    <div className="card-footer anchorDiv">
                                        <div className="stats">
                                            <i className="material-icons">info</i>
                                            <a href="#pablo" style={{ textDecoration: 'none', color: '#999' }}>More info....</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card card-stats">
                                    <div className="card-header" data-background-color="blue">
                                        <i className="material-icons">invert_colors</i>
                                    </div>
                                    <div className="card-content">
                                        <p className="category">Water Level</p>
                                        <h3 className="card-title">100 lbs</h3>
                                    </div>
                                    <div className="card-footer anchorDiv">
                                        <div className="stats">
                                            <i className="material-icons">info</i>
                                            <a href="#pablo" style={{ textDecoration: 'none', color: '#999' }}>More info....</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card card-stats">
                                    <div className="card-header" data-background-color="blue">
                                        <i className="material-icons">check_circle</i>
                                    </div>
                                    <div className="card-content">
                                        <p className="category">Sales</p>
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
                        <br />
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card card-product">
                                    <div className="card-image" data-header-animation="true">
                                        <a href="#pablo">
                                            <img className="img" src="../assets/img/customers.jpg" />
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
                                            <Link to="/customers">Customers</Link>
                                        </h4>
                                        {/*<div className="card-description">
                                            The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
                                                </div>*/}
                                    </div>
                                    <div className="card-footer">
                                        {/*<div className="stats pull-right">
                                            <p className="category"><i className="material-icons">place</i> DHA phase 5, Karachi</p>
                                        </div>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-product">
                                    <div className="card-image" data-header-animation="true">
                                        <a href="#pablo">
                                            <img className="img" src="../assets/img/vendors.jpg" />
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
                                            <Link to="/vendors">Vendors</Link>
                                        </h4>
                                        {/*<div className="card-description">
                                            The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.
                                                </div>*/}
                                    </div>
                                    <div className="card-footer">
                                        {/*<div className="stats pull-right">
                                            <p className="category"><i className="material-icons">place</i> Bahadurabad, Karachi</p>
                                        </div>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-product">
                                    <div className="card-image" data-header-animation="true">
                                        <a href="#pablo">
                                            <img className="img" src="../assets/img/quality.png" />
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
                                            <Link to="/quality">Quality</Link>
                                        </h4>
                                        {/*<div className="card-description">
                                            The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.
                                                </div>*/}
                                    </div>
                                    <div className="card-footer">
                                        {/*<div className="stats pull-right">
                                            <p className="category"><i className="material-icons">place</i> sadder Town, Karachi</p>
                                        </div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
=======
            <div className="Plants">
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <h1>Plants Component</h1>                        
                        </div>
                    </div>
                </div>
            </div>
>>>>>>> cf6fe05e622f2617991dd4e0c94f6f4d0ddfaab3
        )
    }
}

export default Plants