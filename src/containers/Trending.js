import React, { Fragment, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NewsTrendingHeadline from '../components/TrendingHeadlineItem';
import NewsTrending from '../components/TrendingItem';
import useEsportStore, { selectEsport, selectEsportReady, selectFetchEsport } from '../store/tlmSection/eSport';
import useTechStore, { selectFetchTech, selectTech, selectTechReady } from '../store/tlmSection/tech';

const Trending = () => {
    const [queryParams] = useSearchParams();
    const techno = useTechStore(selectTech);
    const fetchTechno = useTechStore(selectFetchTech);   
    const technoReady = useTechStore(selectTechReady);

    const esport = useEsportStore(selectEsport);
    const fetchEsport = useEsportStore(selectFetchEsport);   
    const esportReady = useEsportStore(selectEsportReady);
   
    useEffect(() => {
        fetchTechno();
        fetchEsport();
    }, []);

    useEffect(() => {
        if (!technoReady) return;
        if (!esportReady) return;

    }, [queryParams, technoReady, esportReady]);

    console.log(esport);
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
                                            <a className="nav-link" id="pills-2-tab" data-bs-toggle="pill" href="#pills-2" role="tab" aria-controls="pills-2" aria-selected="false">E-Sports</a>
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
                                                            <NewsTrendingHeadline news={techno[4]} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6">
                                                        <div className="binduz-er-trending-news-list-item">
                                                            {
                                                                techno.slice(0, 3).map(tech => (
                                                                    <NewsTrending key={(tech.key)} news={tech} />
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
                                                            <NewsTrendingHeadline news={esport[4]} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6">
                                                        <div className="binduz-er-trending-news-list-item">
                                                            {
                                                                esport.slice(0, 3).map(sport => (
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
                                                            {/* <NewsTrendingHeadline news={allMagazineNews[4]} /> */}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6">
                                                        <div className="binduz-er-trending-news-list-item">
                                                            {
                                                                // magazineNews.map(magazine => (
                                                                //     <NewsTrending key={(magazine.title)} news={magazine} />
                                                                // ))
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="pills-4" role="tabpanel" aria-labelledby="pills-4-tab">
                                                <div className="row">
                                                    <div className="col-lg-7 col-md-6">
                                                        <div className="binduz-er-trending-box">
                                                            {/* <NewsTrendingHeadline news={allWorldNews[4]} /> */}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6">
                                                        <div className="binduz-er-trending-news-list-item">
                                                            {
                                                                // worldNews.map(world => (
                                                                //     <NewsTrending key={(world.title)} news={world} />
                                                                // ))
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
                                            <span>Technology</span>
                                            <span className="binduz-er-number">02</span>
                                        </a>
                                    </div>
                                    <div className="binduz-er-item">
                                        <a href="#">
                                            <span>Sports</span>
                                            <span className="binduz-er-number">04</span>
                                        </a>
                                    </div>
                                    <div className="binduz-er-item">
                                        <a href="#">
                                            <span>Magazine</span>
                                            <span className="binduz-er-number">01</span>
                                        </a>
                                    </div>
                                    <div className="binduz-er-item">
                                        <a href="#">
                                            <span>World</span>
                                            <span className="binduz-er-number">08</span>
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