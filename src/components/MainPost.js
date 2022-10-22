import * as React from 'react';


const MainPostNews = ({ news }) => {
    let bg = '';
    if (news.thumbnail_standard != null) {
        bg = news.thumbnail_standard;
    }
    return (
        <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="binduz-er-main-posts-item">
                <div className="binduz-er-trending-news-list-box">
                    <div className="binduz-er-thumb">
                        <img src={bg} alt="" />
                    </div>
                    <div className="binduz-er-content">
                        <div className="binduz-er-meta-item">
                            <div className="binduz-er-meta-categories">
                                <a href="#">{news.section}</a>
                            </div>
                            <div className="binduz-er-meta-date">
                                <span><i className="fal fa-calendar-alt"></i> {news.published_date}</span>
                            </div>
                        </div>
                        <div className="binduz-er-trending-news-list-title">
                            <h4 className="binduz-er-title"><a href="#">{news.title}</a></h4>
                            <p>{news.abstract}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPostNews;