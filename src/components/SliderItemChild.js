import * as React from 'react';

const BASE_IMAGE_URL = "https://static01.nyt.com";

const NewsSliderChild = ({ news }) => {
    return (
        <div className="binduz-er-news-portal-item">
            <div className="binduz-er-thumb">
                <a href="#"><img src={news.thumbnail_standard} alt="" /></a>
            </div>
            <div className="binduz-er-content">
                <div className="binduz-er-post-meta-date">
                    <span><i className="fal fa-calendar-alt"></i> {news.published_date}</span>
                </div>
                <h4 className="binduz-er-title"><a href="#"> {news.title.substring(0, 50)}</a></h4>
            </div>
        </div>
    );
}

export default NewsSliderChild;