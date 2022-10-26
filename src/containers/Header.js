import React, { Fragment } from 'react';
import UserLog from '../components/UserLog';
function Header() {
    return (
        <Fragment>
            <header className="binduz-er-header-area">
                <div className="binduz-er-header-nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="navigation">
                                    <nav className="navbar navbar-expand-lg">
                                        <div className="navbar-brand logo"><a href="index.html"><img src="assets/images/logo.png" alt=""/></a></div>
                                        <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                            <ul className="navbar-nav m-auto">
                                                <li className="nav-item active">
                                                    <a className="nav-link" href={'/'} key={'home'}><i className="fa fa-home"></i> Home</a>
                                                </li>
                                                {/* <li className="nav-item">
                                                    <a className="nav-link" href="archived.html">Archived </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="author.html">Author</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Pages<i className="fa fa-angle-down"></i></a>
                                                    <ul className="sub-menu">
                                                        <li><a href="blog-details-1.html">Blog Details 1</a></li>
                                                        <li><a href="blog-details-2.html">Blog Details 2</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="about-us.html">About</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="contact.html">Contact</a>
                                                </li> */}
                                            </ul>
                                        </div>
                                        <UserLog/>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    );
};

export default Header;