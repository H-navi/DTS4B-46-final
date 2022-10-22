import React, { Fragment, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MainPostNews from '../components/MainPost';
import useHomeStore, { selectFetchHome, selectHome, selectHomeReady } from '../store/bySection/home';
function MainPosts() {

    const [queryParams] = useSearchParams();
    const homeSection = useHomeStore(selectHome);
    const fetchHomeSection = useHomeStore(selectFetchHome);
    const allSectionReady = useHomeStore(selectHomeReady);

    useEffect(() => {
        fetchHomeSection(4);
    }, []);

    useEffect(() => {
        if (!allSectionReady) return;
    }, [queryParams, allSectionReady]);


    return (
        <Fragment>
            <section className="binduz-er-main-posts-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="binduz-er-video-post-topbar">
                                <div className="binduz-er-video-post-title">
                                    <h3 className="binduz-er-title">Main Posts</h3>
                                </div>
                            </div>
                            <div className="row">
                                {
                                    homeSection.map(home => (
                                        <MainPostNews key={( home.title )} news={home}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="binduz-er-sidebar-latest-post">
                                <div className="binduz-er-sidebar-title">
                                    <h4 className="binduz-er-title">Latest Post</h4>
                                </div>
                                <div className="binduz-er-sidebar-latest-post-box">
                                    <div className="binduz-er-sidebar-latest-post-item">
                                        <div className="binduz-er-thumb">
                                            <img src="assets/images/latest-post-1.jpg" alt="latest"/>
                                        </div>
                                        <div className="binduz-er-content">
                                            <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                                            <h4 className="binduz-er-title"><a href="#">Introducing Android Earthquake Alerts</a></h4>
                                        </div>
                                    </div>
                                    <div className="binduz-er-sidebar-latest-post-item">
                                        <div className="binduz-er-thumb">
                                            <img src="assets/images/latest-post-2.jpg" alt="latest"/>
                                        </div>
                                        <div className="binduz-er-content">
                                            <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                                            <h4 className="binduz-er-title"><a href="#">Loud and clear: AI is improving Assistant </a></h4>
                                        </div>
                                    </div>
                                    <div className="binduz-er-sidebar-latest-post-item">
                                        <div className="binduz-er-thumb">
                                            <img src="assets/images/latest-post-3.jpg" alt="latest"/>
                                        </div>
                                        <div className="binduz-er-content">
                                            <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                                            <h4 className="binduz-er-title"><a href="#">Tips and shortcuts for a more productive</a></h4>
                                        </div>
                                    </div>
                                    <div className="binduz-er-sidebar-latest-post-item">
                                        <div className="binduz-er-thumb">
                                            <img src="assets/images/latest-post-4.jpg" alt="latest"/>
                                        </div>
                                        <div className="binduz-er-content">
                                            <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                                            <h4 className="binduz-er-title"><a href="#">Sparks of inspiration to the new trend 2021</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="binduz-er-sidebar-add-box mt-40">
                                <div className="binduz-er-logo">
                                    <a href="#"><img src="assets/images/logo-2.png" alt=""/></a>
                                </div>
                                <p>Built with amazing platform & framwork. You can use anyway in blog, news & magazine.</p>
                                <a className="binduz-er-main-btn" href="#">Purchase Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default MainPosts;