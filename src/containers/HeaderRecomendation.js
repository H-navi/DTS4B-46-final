import React, { Fragment } from 'react';
function HeaderRecomendation() {
    return (
        <Fragment>
            <div className="binduz-er-news-off_canvars_overlay"></div>
            <div className="binduz-er-news-offcanvas_menu">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="binduz-er-news-offcanvas_menu_wrapper">
                                <div className="binduz-er-news-canvas_close">
                                    <i className="fal fa-times"></i>
                                </div>
                                <div className="binduz-er-news-header-social">
                                    <ul className="text-center">
                                        <li>facebook</li>
                                        <li>Twitter</li>
                                        <li>Skype</li>
                                    </ul>
                                </div>
                                <div id="menu" className="text-left ">
                                    <ul className="binduz-er-news-offcanvas_main_menu">
                                        <li className="binduz-er-news-menu-item-has-children binduz-er-news-active">
                                            Home
                                            <ul className="binduz-er-news-sub-menu">
                                                <li>Home 1</li>
                                                <li>Home 2</li>
                                                <li>Home 3</li>
                                                <li>Home 4</li>
                                                <li>Home 5</li>
                                                <li>Home 6</li>
                                                <li>Home 7</li>
                                                <li>Home 8</li>
                                                <li>Home 9</li>
                                            </ul>
                                        </li>
                                        <li className="binduz-er-news-menu-item-has-children">
                                            Archived
                                        </li>
                                        <li className="binduz-er-news-menu-item-has-children">
                                            Author
                                        </li>
                                        <li className="binduz-er-news-menu-item-has-children">
                                            Pages
                                            <ul className="binduz-er-news-sub-menu">
                                                <li>Blog Details 1</li>
                                                <li>Blog Details 2</li>
                                            </ul>
                                        </li>
                                        <li className="binduz-er-news-menu-item-has-children">
                                            About
                                        </li>
                                        <li className="binduz-er-news-menu-item-has-children">
                                            Contact
                                        </li>
                                    </ul>
                                </div>
                                <div className="binduz-er-news-offcanvas_footer">
                                    <div className="binduz-er-news-logo text-center mb-30 mt-30">
                                        <img src="assets/images/logo.png" alt="" />
                                    </div>
                                    <p>I’m Michal Škvarenina, a multi-disciplinary designer currently working at Wild and as a freelance designer.</p>
                                    <ul>
                                        <li><i className="fas fa-phone"></i> +212 34 45 45 98</li>
                                        <li><i className="fas fa-home"></i> Angle Bd Abdelmoumen & rue soumaya, Résidence</li>
                                        <li><i className="fas fa-envelope"></i> hello@example.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="binduz-er-news-search-box">
                <div className="binduz-er-news-search-header">
                    <div className="container mt-60">
                        <div className="row">
                            <div className="col-6">
                                <img src="assets/images/logo-4.png" alt="" />
                            </div>
                            <div className="col-6">
                                <div className="binduz-er-news-search-close float-end">
                                    <button className="binduz-er-news-search-close-btn">Close <span></span><span></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="binduz-er-news-search-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="binduz-er-news-search-form">
                                    <form action="#">
                                        <input type="text" placeholder="Search for Products" />
                                        <button><i className="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="binduz-er-top-header-area">
                <div className="binduz-er-bg-cover"></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="binduz-er-topbar-headline">
                                <p><span><i className="fas fa-bolt"></i> Trending News:</span> <a href="">Miranda halim was viral after finish his workout.</a></p>
                                <p><span><i className="fas fa-bolt"></i> Trending News:</span> <a href="">Celebrating Asian Pacific American art and cultures</a></p>
                                <p><span><i className="fas fa-bolt"></i> Trending News:</span> <a href="">Honoring Asian Pacific American Heritage Month at Google</a></p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="binduz-er-topbar-social d-flex justify-content-end align-items-center">
                                <div className="binduz-er-news-social">
                                    <ul>
                                        <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href=""><i className="fab fa-twitter"></i></a></li>
                                        <li><a href=""><i className="fab fa-behance"></i></a></li>
                                        <li><a href=""><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href=""><i className="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                                <div className="binduz-er-news-subscribe-btn">
                                    <a className="binduz-er-main-btn" href="#">Subscribe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default HeaderRecomendation;