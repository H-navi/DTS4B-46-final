import React, { Fragment } from 'react';
function Featured() {
    return (
        <Fragment>
            <section className="binduz-er-featured-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="binduz-er-featured-slider mt-30">
                                <div className="binduz-er-featured-title">
                                    <h3 className="binduz-er-title">Featured</h3>
                                </div>
                                <div className="binduz-er-featured-slider-item">
                                    <div className="binduz-er-trending-news-list-box">
                                        <div className="binduz-er-thumb">
                                            <img src="assets/images/feature-news-thuimb.jpg" alt=""/>
                                        </div>
                                        <div className="binduz-er-content">
                                            <div className="binduz-er-meta-item">
                                                <div className="binduz-er-meta-categories">
                                                    <a href="#">Technology</a>
                                                </div>
                                                <div className="binduz-er-meta-date">
                                                    <span><i className="fal fa-calendar-alt"></i> 14th February 2020</span>
                                                </div>
                                            </div>
                                            <div className="binduz-er-trending-news-list-title">
                                                <h4 className="binduz-er-title"><a href="#">Hear educators' stories this Teacher Appreciation Week</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="binduz-er-trending-news-list-box">
                                        <div className="binduz-er-thumb">
                                            <img src="assets/images/feature-news-thuimb-2.jpg" alt=""/>
                                        </div>
                                        <div className="binduz-er-content">
                                            <div className="binduz-er-meta-item">
                                                <div className="binduz-er-meta-categories">
                                                    <a href="#">Technology</a>
                                                </div>
                                                <div className="binduz-er-meta-date">
                                                    <span><i className="fal fa-calendar-alt"></i> 14th February 2020</span>
                                                </div>
                                            </div>
                                            <div className="binduz-er-trending-news-list-title">
                                                <h4 className="binduz-er-title"><a href="#">Escucha las historias de los educadores en esta </a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="binduz-er-trending-news-item mb-30">
                                <img src="assets/images/featured-trending-thumb-1.jpg" alt=""/>
                                    <div className="binduz-er-trending-news-overlay">
                                        <div className="binduz-er-trending-news-meta">
                                            <div className="binduz-er-meta-categories">
                                                <a href="#">Technology</a>
                                            </div>
                                            <div className="binduz-er-meta-date">
                                                <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                                            </div>
                                            <div className="binduz-er-trending-news-title">
                                                <h3 className="binduz-er-title"><a href="#">Trash to treasure: How Google thinks about deconstruction</a></h3>
                                            </div>
                                        </div>
                                        <div className="binduz-er-news-share">
                                            <a href="#"><i className="fal fa-share"></i></a>
                                        </div>
                                    </div>
                            </div>
                            <div className="binduz-er-trending-news-item mb-30">
                                <img src="assets/images/featured-trending-thumb-2.jpg" alt=""/>
                                    <div className="binduz-er-trending-news-overlay">
                                        <div className="binduz-er-trending-news-meta">
                                            <div className="binduz-er-meta-categories">
                                                <a href="#">Technology</a>
                                            </div>
                                            <div className="binduz-er-meta-date">
                                                <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                                            </div>
                                            <div className="binduz-er-trending-news-title">
                                                <h3 className="binduz-er-title"><a href="#">Spring Fashion Show at the University of Michigan Has Started.</a></h3>
                                            </div>
                                        </div>
                                        <div className="binduz-er-news-share">
                                            <a href="#"><i className="fal fa-share"></i></a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="binduz-er-sidebar-social">
                                <div className="binduz-er-sidebar-title">
                                    <h4 className="binduz-er-title">Social Feed</h4>
                                </div>
                                <div className="binduz-er-social-list">
                                    <div className="binduz-er-list">
                                        <a href="#">
                                            <span><i className="fab fa-facebook-f"></i> <span>15000</span> Likes</span>
                                            <span>Like</span>
                                        </a>
                                        <a href="#">
                                            <span><i className="fab fa-twitter"></i> <span>15000</span> Likes</span>
                                            <span>Tweet</span>
                                        </a>
                                        <a href="#">
                                            <span><i className="fab fa-behance"></i> <span>5k+</span> Follower</span>
                                            <span>Follow</span>
                                        </a>
                                        <a href="#">
                                            <span><i className="fab fa-youtube"></i> <span>15000</span> Subscribe</span>
                                            <span>Subscribe</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="binduz-er-sidebar-add mt-20">
                                    <h3 className="binduz-er-title">Build your website & <span>grow your business</span></h3>
                                    <a className="binduz-er-main-btn" href="#">Purchase</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Featured;