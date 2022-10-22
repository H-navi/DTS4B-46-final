import * as React from 'react';


const NewsTrending = ({ news }) => {
    return (
        <div className="binduz-er-trending-news-list-box">
            <div className="binduz-er-thumb">
                <img src={news.thumb} alt="" style={{ maxHeight: '150px' }}/>
            </div>
            <div className="binduz-er-content">
                <div className="binduz-er-meta-item">
                    <div className="binduz-er-meta-categories">
                        <a href="#">{news.tag}</a>
                    </div>
                    <div className="binduz-er-meta-date">
                        <span><i className="fal fa-calendar-alt"></i> {news.time}</span>
                    </div>
                </div>
                <div className="binduz-er-trending-news-list-title">
                    <h4 className="binduz-er-title"><a href="#">{news.title}</a></h4>
                </div>
            </div>
        </div>
    );
}

export default NewsTrending;