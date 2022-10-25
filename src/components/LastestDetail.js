import * as React from 'react';


const LastestDetail = ({ news }) => {
    return (
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div className="binduz-er-sidebar-latest-post-box">
                <div className="binduz-er-sidebar-latest-post-item">
                    <div className="binduz-er-thumb">
                        <img src="assets/images/latest-post-1.jpg" alt="latest" />
                    </div>
                    <div className="binduz-er-content">
                        <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                        <h4 className="binduz-er-title"><a href="#">Why creating inclusive classrooms matters</a></h4>
                    </div>
                </div>
                <div className="binduz-er-sidebar-latest-post-item">
                    <div className="binduz-er-thumb">
                        <img src="assets/images/latest-post-2.jpg" alt="latest" />
                    </div>
                    <div className="binduz-er-content">
                        <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                        <h4 className="binduz-er-title"><a href="#">Celebrating Asian Pacific American art and</a></h4>
                    </div>
                </div>
                <div className="binduz-er-sidebar-latest-post-item">
                    <div className="binduz-er-thumb">
                        <img src="assets/images/latest-post-3.jpg" alt="latest" />
                    </div>
                    <div className="binduz-er-content">
                        <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                        <h4 className="binduz-er-title"><a href="#">From overcoming burnout to finding new</a></h4>
                    </div>
                </div>
                <div className="binduz-er-sidebar-latest-post-item">
                    <div className="binduz-er-thumb">
                        <img src="assets/images/latest-post-4.jpg" alt="latest" />
                    </div>
                    <div className="binduz-er-content">
                        <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                        <h4 className="binduz-er-title"><a href="#">Sparks of inspiration to the new trend 2021</a></h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LastestDetail;