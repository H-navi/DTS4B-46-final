import * as React from 'react';

const NewsSliderChild = ({ news }) => {
    return (
        <div className="binduz-er-news-portal-item">
            <div className="binduz-er-thumb">
                <a href="#"><img src={news.thumb} alt="" /></a>
            </div>
            <div className="binduz-er-content">
                <div className="binduz-er-post-meta-date">
                    <span><i className="fal fa-calendar-alt"></i> {news.time}</span>
                </div>
                <h4 className="binduz-er-title"><a href="#"> {news.title}</a></h4>
            </div>
        </div>
    );
}

export default NewsSliderChild;