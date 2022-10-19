import React, { Fragment } from 'react';
function Footer() {
    return (
        <Fragment>
            <footer className="binduz-er-footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="binduz-er-footer-widget-style-1">
                                        <div className="binduz-er-footer-title">
                                            <h3 className="binduz-er-title">Categories</h3>
                                        </div>
                                        <div className="binduz-er-footer-menu-list">
                                            <ul>
                                                <li><a href="#">Architecture</a></li>
                                                <li><a href="#">New look 2015</a></li>
                                                <li><a href="#">Gadgets</a></li>
                                                <li><a href="#">Mobile and Phones</a></li>
                                                <li><a href="#">Recipes</a></li>
                                                <li><a href="#">Decorating</a></li>
                                            </ul>
                                            <ul>
                                                <li><a href="#">Interiors</a></li>
                                                <li><a href="#">Street fashion</a></li>
                                                <li><a href="#">Street fashion</a></li>
                                                <li><a href="#">Lifestyle</a></li>
                                                <li><a href="#">Lookback</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="binduz-er-footer-widget-style-1">
                                        <div className="binduz-er-footer-title">
                                            <h3 className="binduz-er-title">Newsletter</h3>
                                        </div>
                                        <div className="binduz-er-footer-widget-form">
                                            <form action="#">
                                                <div className="binduz-er-input-box">
                                                    <i className="fal fa-user"></i>
                                                    <input type="text" placeholder="Enter your name"/>
                                                </div>
                                                <div className="binduz-er-input-box">
                                                    <i className="fal fa-envelope"></i>
                                                    <input type="email" placeholder="Enter email address"/>
                                                </div>
                                                <div className="binduz-er-input-box">
                                                    <button type="button"><i className="fal fa-paper-plane"></i> Subscribe Now</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="binduz-er-footer-widget-style-3">
                                        <div className="binduz-er-footer-title">
                                            <h3 className="binduz-er-title">Recent Feeds</h3>
                                        </div>
                                        <div className="binduz-er-footer-widget-feeds">
                                            <div className="binduz-er-sidebar-latest-post-box">
                                                <div className="binduz-er-sidebar-latest-post-item">
                                                    <div className="binduz-er-thumb">
                                                        <img src="assets/images/latest-post-1.jpg" alt="latest"/>
                                                    </div>
                                                    <div className="binduz-er-content">
                                                        <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                        <h4 className="binduz-er-title"><a href="#">Sparks of inspiration to the new trend 2021</a></h4>
                                                    </div>
                                                </div>
                                                <div className="binduz-er-sidebar-latest-post-item">
                                                    <div className="binduz-er-thumb">
                                                        <img src="assets/images/latest-post-2.jpg" alt="latest"/>
                                                    </div>
                                                    <div className="binduz-er-content">
                                                        <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                        <h4 className="binduz-er-title"><a href="#">Career certificates and more ways we're </a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="binduz-er-footer-widget-info">
                                <div className="binduz-er-logo">
                                    <a href="#"><img src="assets/images/logo-2.png" alt=""/></a>
                                </div>
                                <div className="binduz-er-text">
                                    <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspend isse ultrices gravida.</p>
                                </div>
                                <div className="binduz-er-social">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="binduz-er-back-to-top">
                    <p>BACK TO TOP <i className="fal fa-long-arrow-right"></i></p>
                </div>
            </footer>
            <div className="binduz-er-footer-copyright-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="binduz-er-copyright-text">
                                <p>Copyright By@<span>QuomodoTheme</span> - 2021</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="binduz-er-copyright-menu float-lg-end float-none">
                                <ul>
                                    <li><a href="#">Privacy & Policy</a></li>
                                    <li><a href="#">Claim A Report</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;