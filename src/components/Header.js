import React, { Fragment } from 'react';
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
                                                    <a className="nav-link" href="index.html">Home <i className="fa fa-angle-down"></i></a>
                                                    <ul className="sub-menu">
                                                        <li><a href="index.html">Home 1</a></li>
                                                        <li><a href="index-2.html">Home 2</a></li>
                                                        <li><a href="index-3.html">Home 3</a></li>
                                                        <li><a href="index-4.html">Home 4</a></li>
                                                        <li><a href="index-5.html">Home 5</a></li>
                                                        <li><a href="index-6.html">Home 6</a></li>
                                                        <li><a href="index-7.html">Home 7</a></li>
                                                        <li><a href="index-8.html">Home 8</a></li>
                                                        <li><a href="index-9.html">Home 9</a></li>
                                                        <li><a href="index-10.html">Home 10</a></li>
                                                        <li><a href="index-11.html">Home 11</a></li>
                                                        <li><a href="index-12.html">Home 12</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
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
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="binduz-er-navbar-btn d-flex">
                                            <div className="binduz-er-widget d-flex">
                                                <a className="binduz-er-news-search-open" href="#"><i className="far fa-search"></i></a>
                                                <a href="#"><i className="far fa-user"></i></a>
                                            </div>
                                            <span className="binduz-er-toggle-btn binduz-er-news-canvas_open d-block d-lg-none">
                                                <i className="fal fa-bars"></i>
                                            </span>
                                        </div>
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