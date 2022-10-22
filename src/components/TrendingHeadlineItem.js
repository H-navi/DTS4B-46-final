import * as React from 'react';


const NewsTrendingHeadline = ({ news }) => {    
    return (
        <div className="binduz-er-trending-news-item">
            <img src={news.thumb} alt="" />
            <div className="binduz-er-trending-news-overlay">
                <div className="binduz-er-trending-news-meta">
                    <div className="binduz-er-meta-categories">
                        <a href="#">{news.tag}</a>
                    </div>
                    <div className="binduz-er-meta-date">
                        <span><i className="fal fa-calendar-alt"></i> {news.time}</span>
                    </div>
                    <div className="binduz-er-trending-news-title">
                        <h3 className="binduz-er-title"><a href="#">{news.title}</a></h3>
                    </div>
                </div>
                <div className="binduz-er-news-share">
                    <a href="#"><i className="fal fa-share"></i></a>
                </div>
            </div>
        </div>
    );
}

export default NewsTrendingHeadline;