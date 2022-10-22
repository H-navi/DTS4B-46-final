import React, { Fragment, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import FeaturedNews from '../components/FeaturedNews';
import FeaturedSlide from '../components/FeaturedSlide';
import useSportsStore, { selectFetchSports, selectSports, selectSportsReady } from '../store/bySection/sports';
import useTechnoStore, { selectAllTechno, selectFetchAllTechno, selectFetchTechno, selectTechno, selectTechnoReady } from '../store/bySection/techno';
function Featured() {
    const [queryParams] = useSearchParams();
    const technoNews = useTechnoStore(selectTechno);
    const fetchTechnoNews = useTechnoStore(selectFetchTechno);
    // const allTechnoNews = useTechnoStore(selectAllTechno);
    // const fetchAllTechnoNews = useTechnoStore(selectFetchAllTechno);
    const technoNewsReady = useTechnoStore(selectTechnoReady);

    const sportsNews = useSportsStore(selectSports);
    const fetchSportsNews = useSportsStore(selectFetchSports);
    // const allSportsNews = useSportsStore(selectAllSports);
    // const fetchAllSportsNews = useSportsStore(selectFetchAllSports);
    const sportsNewsReady = useSportsStore(selectSportsReady);

    useEffect(() => {
        fetchTechnoNews(3);
        // fetchAllTechnoNews();

        fetchSportsNews(1);
        // fetchAllSportsNews();
    }, []);

    useEffect(() => {
        if (!technoNewsReady) return;
        if (!sportsNewsReady) return;

    }, [queryParams, technoNewsReady, sportsNewsReady]);


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
                                    {
                                        technoNews.map(techno => (
                                            <FeaturedSlide key={(techno.title)} news={techno} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            {
                                sportsNews.map(sports => (
                                    <FeaturedNews key={(sports.title)} news={sports} />
                                ))
                            }
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Featured;