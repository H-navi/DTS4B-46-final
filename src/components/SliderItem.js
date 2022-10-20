import * as React from 'react';

const BASE_IMAGE_URL = "https://static01.nyt.com";

const NewsSlider = ({ news }) => {
    let bg = '';    
    if (news.multimedia == null) {
        bg = news.thumbnail_standard;
    }else{
        bg = news.multimedia[2].url;
    }
    return (
        <div className="binduz-er-hero-area d-flex align-items-center">
            <div className="binduz-er-bg-cover" style={{ backgroundImage: `url(${bg})` }}></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-7">
                        <div className="binduz-er-hero-news-content">
                            <div className="binduz-er-hero-meta">
                                <div className="binduz-er-meta-category">
                                    <a href="#">{news.section}</a>
                                </div>
                                <div className="binduz-er-meta-date">
                                    <span><i className="fal fa-calendar-alt"></i> {news.published_date}</span>
                                </div>
                            </div>
                            <div className="binduz-er-hero-title">
                                <h3 className="binduz-er-title"><a href="#">{news.title}</a></h3>
                            </div>
                            <div className="binduz-er-meta-author">
                                <div className="binduz-er-author">
                                    <img src="assets/images/user-1.png" alt="" />
                                    <span>By <span>{news.byline}</span></span>
                                </div>
                                <div className="binduz-er-meta-list">
                                    <ul>
                                        <li><i className="fal fa-eye"></i> 5k</li>
                                        <li><i className="fal fa-heart"></i> 5k</li>
                                        <li><i className="fal fa-comments"></i> 5k</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="binduz-er-hero-weather d-flex justify-content-end">
                            <div className="binduz-er-weather-item">
                                <img src="assets/images/icon/icon-1.png" alt="" />
                                <h5 className="binduz-er-title">Melbourne</h5>
                                <span>31°C / 25 - 32°C</span>
                            </div>
                            <div className="binduz-er-weather-item">
                                <img src="assets/images/icon/icon-2.png" alt="" />
                                <h5 className="binduz-er-title">New York </h5>
                                <span>31°C / 25 - 32°C</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsSlider;