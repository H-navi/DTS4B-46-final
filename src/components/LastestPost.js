import * as React from 'react';


const LastestPost = ({ news }) => {
    return (
        <div className="binduz-er-sidebar-latest-post-item">
            <div className="binduz-er-thumb">
                <img src={ news.thumb } alt="latest" />
            </div>
            <div className="binduz-er-content">
                <span><i className="fal fa-calendar-alt"></i> {news.time}</span>
                <h4 className="binduz-er-title"><a href="#"> {news.title}</a></h4>
            </div>
        </div>
    );
}

export default LastestPost;