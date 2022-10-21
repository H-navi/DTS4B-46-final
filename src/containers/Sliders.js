import React, { Fragment } from 'react';

import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NewsSlider from '../components/SliderItem';
import NewsSliderChild from '../components/SliderItemChild';
import useNewsSlidersStore, { selectFetchNews, selectNews, selectNewsReady, selectSortNews } from '../store/newsSliders';

const Sliders = () => {
    const [queryParams, setQueryparams] = useSearchParams();
    const news = useNewsSlidersStore(selectNews);
    const fetchNews = useNewsSlidersStore(selectFetchNews);
    const newsReady = useNewsSlidersStore(selectNewsReady);
    const sortNews = useNewsSlidersStore(selectSortNews);

    useEffect(() => {
        fetchNews();
    }, []);

    useEffect(() => {
        if(!newsReady) return;

        sortNews(queryParams.get('sort'));
    }, [queryParams, newsReady]);

    useEffect(() => {
        const nextPage = queryParams.get('page');
        // console.log(nextPage);
    }, [queryParams]);

    // const setSortParam = (type) => {
    //     queryParams.set("sort", type);
    //     setQueryparams(queryParams);
    // }

    // const setNextPage = (page) => {
    //     queryParams.set("page", page);
    //     setQueryparams(queryParams);
    // }

    return (
        <Fragment>
            <div className="hero-slide-active">
                {
                    news.map(newx => (
                        <NewsSlider key={(newx.title)} news={newx}/>
                    ))
                }
            </div>
            <div className="hero-portal-area">
                <div className="binduz-er-hero-news-portal hero-portal-active">

                {
                    news.map(news => (
                        <NewsSliderChild key={(news.title)} news={news}/>
                    ))
                }
                    
                </div>
            </div>
        </Fragment>
    );
};

export default Sliders;