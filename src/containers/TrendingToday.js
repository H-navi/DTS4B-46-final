import React, { Fragment, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import TrendingTodayNews from '../components/TrendingToday';
import useAllStore, { selectAll, selectAllReady, selectFetchAll } from '../store/bySection/all';

function TrendingToday() {
    const [queryParams] = useSearchParams();
    const allSection = useAllStore(selectAll);
    const fetchAllSection = useAllStore(selectFetchAll);
    const allSectionReady = useAllStore(selectAllReady);

    useEffect(() => {
        fetchAllSection(4);
    }, []);

    useEffect(() => {
        if (!allSectionReady) return;
    }, [queryParams, allSectionReady]);

    // console.log(allSection);
    return (
        <Fragment>
            <section className="binduz-er-trending-today-area">
                <div className="binduz-er-bg-cover"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="binduz-er-trending-today-topbar">
                                <div className="binduz-er-trending-today-title">
                                    <h3 className="binduz-er-title">What's trending today</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            allSection.map(all => (
                                <TrendingTodayNews key={(all.title)} news={all}/>
                            ))
                        }
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default TrendingToday;