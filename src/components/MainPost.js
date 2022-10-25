import * as React from 'react';
import { useNavigate } from 'react-router-dom';


const MainPostNews = ({ news }) => {

    return (
        <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="binduz-er-main-posts-item">
                <div className="binduz-er-trending-news-list-box">
                    <div className="binduz-er-thumb">
                        <img src={news.thumb} alt="" />
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
                            <h4 className="binduz-er-title"><a href={`/detail?url=${(news.key)}`} >{news.title}</a></h4>
                            <p>{news.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPostNews;