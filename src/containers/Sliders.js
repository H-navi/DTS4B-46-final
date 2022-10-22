import React, { Fragment } from 'react';

import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NewsSlider from '../components/SliderItem';
import NewsSliderChild from '../components/SliderItemChild';
import useGameNewsStore, {selectFetchGameNews, selectGameNews, selectGameNewsReady } from '../store/tlmSection/gameNews';


const Sliders = () => {
    const [queryParams] = useSearchParams();
    const gameNews = useGameNewsStore(selectGameNews);
    const fetchGameNews = useGameNewsStore(selectFetchGameNews);
    const gameNewsReady = useGameNewsStore(selectGameNewsReady);

    useEffect(() => {
        fetchGameNews();
    }, []);

    useEffect(() => {
        if(!gameNewsReady) return;
    }, [queryParams, gameNewsReady]);

    return (
        <Fragment>
            <div className="hero-slide-active">
                {
                    gameNews.map(newx => (
                        <NewsSlider key={(newx.key)} news={newx}/>
                    ))
                }
            </div>
            <div className="hero-portal-area">
                <div className="binduz-er-hero-news-portal hero-portal-active">

                {
                    gameNews.map(news => (
                        <NewsSliderChild key={(news.key)} news={news}/>
                    ))
                }
                    
                </div>
            </div>
        </Fragment>
    );
};

export default Sliders;