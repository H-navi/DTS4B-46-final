import React, { Fragment, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NewsTrendingHeadline from '../components/TrendingHeadlineItem';
import NewsTrending from '../components/TrendingItem';
import useNewsTrendingsStore, { selectFetchMagazineNews, selectFetchSportsNews, selectFetchTechnoNews, selectFetchWorldNews, selectMagazineNews, selectMagazineNewsReady, selectSportsNews, selectSportsNewsReady, selectTechnoNews, selectTechnoNewsReady, selectWorldNews, selectWorldNewsReady } from '../store/newsTrendings';


const Trending = () => {
    const [queryParams] = useSearchParams();
    const technoNews = useNewsTrendingsStore(selectTechnoNews);
    const fetchTechnoNews = useNewsTrendingsStore(selectFetchTechnoNews);
    const technoNewsReady = useNewsTrendingsStore(selectTechnoNewsReady);

    const sportsNews = useNewsTrendingsStore(selectSportsNews);
    const fetchSportsNews = useNewsTrendingsStore(selectFetchSportsNews);
    const sportsNewsReady = useNewsTrendingsStore(selectSportsNewsReady);

    const magazineNews = useNewsTrendingsStore(selectMagazineNews);
    const fetchMagazineNews = useNewsTrendingsStore(selectFetchMagazineNews);
    const magazineNewsReady = useNewsTrendingsStore(selectMagazineNewsReady);

    const worldNews = useNewsTrendingsStore(selectWorldNews);
    const fetchWorldNews = useNewsTrendingsStore(selectFetchWorldNews);
    const worldNewsReady = useNewsTrendingsStore(selectWorldNewsReady);

    useEffect(() => {
        fetchTechnoNews();
        fetchSportsNews();
        fetchMagazineNews();
        fetchWorldNews();
    });

    useEffect(() => {
        if (!technoNewsReady) return;
        if (!sportsNewsReady) return;
        if (!magazineNewsReady) return;
        if (!worldNewsReady) return;

    }, [queryParams, technoNewsReady, sportsNewsReady, magazineNewsReady, worldNewsReady]);


    return (
        <Fragment>
            <section className="binduz-er-trending-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12">
                            <div className="binduz-er-trending-news-topbar d-block d-md-flex justify-content-between align-items-center">
                                <div className="binduz-er-trending-box">
                                    <div className="binduz-er-title">
                                        <h3 className="binduz-er-title">Trending News</h3>
                                    </div>
                                </div>

                                <div className="binduz-er-news-tab-btn d-flex justify-content-md-end justify-content-start">
                                    <ul className="nav nav-pills " id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link active" id="pills-1-tab" data-bs-toggle="pill" href="#pills-1" role="tab" aria-controls="pills-1" aria-selected="true">Technology</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-2-tab" data-bs-toggle="pill" href="#pills-2" role="tab" aria-controls="pills-2" aria-selected="false">Sports</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-3-tab" data-bs-toggle="pill" href="#pills-3" role="tab" aria-controls="pills-3" aria-selected="false">Magazine</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-4-tab" data-bs-toggle="pill" href="#pills-4" role="tab" aria-controls="pills-4" aria-selected="false">World</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="binduz-er-trending-news-list">
                                        <div className="tab-content mt-50" id="pills-tabContent">
                                            <div className="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                                                <div className="row">
                                                    <div className="col-lg-7 col-md-6">
                                                        <div className="binduz-er-trending-box">
                                                            {/* <NewsTrendingHeadline/> */}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6">
                                                        <div className="binduz-er-trending-news-list-item">
                                                            {
                                                                technoNews.map(techno => (
                                                                    <NewsTrending key={(techno.title)} news={techno} />
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
                                                <div className="row">
                                                    <div className="col-lg-7 col-md-6">
                                                        <div className="binduz-er-trending-box">
                                                            <div className="binduz-er-trending-news-item">
                                                                <img src="assets/images/trending-thumb.png" alt="" />
                                                                <div className="binduz-er-trending-news-overlay">
                                                                    <div className="binduz-er-trending-news-meta">
                                                                        <div className="binduz-er-meta-categories">
                                                                            <a href="#">Technology</a>
                                                                        </div>
                                                                        <div className="binduz-er-meta-date">
                                                                            <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                                        </div>
                                                                        <div className="binduz-er-trending-news-title">
                                                                            <h3 className="binduz-er-title"><a href="#">A DJ’s mission to tell Asian American stories, track by track</a></h3>
                                                                        </div>
                                                                    </div>
                                                                    <div className="binduz-er-news-share">
                                                                        <a href="#"><i className="fal fa-share"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6">
                                                        <div className="binduz-er-trending-news-list-item">
                                                            {
                                                                sportsNews.map(sport => (
                                                                    <NewsTrending key={(sport.title)} news={sport} />
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="pills-3" role="tabpanel" aria-labelledby="pills-3-tab">
                                                <div className="row">
                                                    <div className="col-lg-7 col-md-6">
                                                        <div className="binduz-er-trending-box">
                                                            <div className="binduz-er-trending-news-item">
                                                                <img src="assets/images/trending-thumb.png" alt="" />
                                                                <div className="binduz-er-trending-news-overlay">
                                                                    <div className="binduz-er-trending-news-meta">
                                                                        <div className="binduz-er-meta-categories">
                                                                            <a href="#">Technology</a>
                                                                        </div>
                                                                        <div className="binduz-er-meta-date">
                                                                            <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                                        </div>
                                                                        <div className="binduz-er-trending-news-title">
                                                                            <h3 className="binduz-er-title"><a href="#">A DJ’s mission to tell Asian American stories, track by track</a></h3>
                                                                        </div>
                                                                    </div>
                                                                    <div className="binduz-er-news-share">
                                                                        <a href="#"><i className="fal fa-share"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6">
                                                        <div className="binduz-er-trending-news-list-item">
                                                            {
                                                                magazineNews.map(magazine => (
                                                                    <NewsTrending key={(magazine.title)} news={magazine} />
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="pills-4" role="tabpanel" aria-labelledby="pills-4-tab">
                                                <div className="row">
                                                    <div className="col-lg-7 col-md-6">
                                                        <div className="binduz-er-trending-box">
                                                            <div className="binduz-er-trending-news-item">
                                                                <img src="assets/images/trending-thumb.png" alt="" />
                                                                <div className="binduz-er-trending-news-overlay">
                                                                    <div className="binduz-er-trending-news-meta">
                                                                        <div className="binduz-er-meta-categories">
                                                                            <a href="#">Technology</a>
                                                                        </div>
                                                                        <div className="binduz-er-meta-date">
                                                                            <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                                        </div>
                                                                        <div className="binduz-er-trending-news-title">
                                                                            <h3 className="binduz-er-title"><a href="#">A DJ’s mission to tell Asian American stories, track by track</a></h3>
                                                                        </div>
                                                                    </div>
                                                                    <div className="binduz-er-news-share">
                                                                        <a href="#"><i className="fal fa-share"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6">
                                                        <div className="binduz-er-trending-news-list-item">
                                                            {
                                                                worldNews.map(world => (
                                                                    <NewsTrending key={(world.title)} news={world} />
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className="binduz-er-sidebar-categories">
                                <div className="binduz-er-sidebar-title">
                                    <h4 className="binduz-er-title">Categories</h4>
                                </div>
                                <div className="binduz-er-categories-list">
                                    <div className="binduz-er-item">
                                        <a href="#">
                                            <span>Travel</span>
                                            <span className="binduz-er-number">02</span>
                                        </a>
                                    </div>
                                    <div className="binduz-er-item">
                                        <a href="#">
                                            <span>Fashion</span>
                                            <span className="binduz-er-number">04</span>
                                        </a>
                                    </div>
                                    <div className="binduz-er-item">
                                        <a href="#">
                                            <span>Entertainment</span>
                                            <span className="binduz-er-number">01</span>
                                        </a>
                                    </div>
                                    <div className="binduz-er-item">
                                        <a href="#">
                                            <span>Health</span>
                                            <span className="binduz-er-number">08</span>
                                        </a>
                                    </div>
                                    <div className="binduz-er-item">
                                        <a href="#">
                                            <span>Nature</span>
                                            <span className="binduz-er-number">06</span>
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

export default Trending;