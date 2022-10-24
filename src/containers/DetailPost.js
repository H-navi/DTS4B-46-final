import React, { Fragment, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import LastestPost from '../components/LastestPost';
import MainPostNews from '../components/MainPost';
// import useGameStore, { selectFetchGame, selectGame, selectGameReady } from '../store/tlmSection/game';
// import useTechReviewStore, { selectFetchTechReview, selectTechReview, selectTechReviewReady } from '../store/tlmSection/techReview';

function DetailPost() {

    // const [queryParams] = useSearchParams();
    // const gameSection = useGameStore(selectGame);
    // const fetchGameSection = useGameStore(selectFetchGame);
    // const allSectionReady = useGameStore(selectGameReady);

    // const techReview = useTechReviewStore(selectTechReview);
    // const fetchTechReview = useTechReviewStore(selectFetchTechReview);
    // const teachReviewReady = useTechReviewStore(selectTechReviewReady);

    // useEffect(() => {
    //     fetchGameSection();
    //     fetchTechReview();

    // }, []);

    // useEffect(() => {
    //     if (!allSectionReady) return;
    //     if (!teachReviewReady) return;
    // }, [queryParams, allSectionReady, teachReviewReady]);


    return (
        <Fragment>
            <div className="binduz-er-blog-bg-area"></div>
            <section className="binduz-er-author-item-area binduz-er-author-item-layout-1 pb-20">
                <div className=" container">
                    <div className="row">
                        <div className=" col-lg-9">
                            <div className="binduz-er-author-item mb-40">
                                <div className="binduz-er-content">
                                    <div className="binduz-er-meta-item">
                                        <div className="binduz-er-meta-categories">
                                            <a href="#">Technology</a>
                                        </div>
                                        <div className="binduz-er-meta-date">
                                            <span><i className="fal fa-calendar-alt"></i>24th February 2020</span>
                                        </div>
                                    </div>
                                    <h3 className="binduz-er-title">How to port your web app to microsoft teams is really ready for take fight. </h3>
                                    <div className="binduz-er-meta-author">
                                        <div className="binduz-er-author">
                                            <img src="assets/images/user-2.jpg" alt=""/>
                                                <span>By <span>Rosalina D.</span></span>
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
                                <div className="row">
                                    <div className=" col-lg-2">
                                        <div className="binduz-er-blog-social-share">
                                            <div className="binduz-er-item mb-10">
                                                <a href="#">
                                                    <i className="fab fa-facebook-f"></i>
                                                    <span>40</span>
                                                    <p>Share</p>
                                                </a>
                                            </div>
                                            <div className="binduz-er-item mb-10">
                                                <a href="#">
                                                    <i className="fab fa-twitter"></i>
                                                    <span>05</span>
                                                    <p>Tweet</p>
                                                </a>
                                            </div>
                                            <div className="binduz-er-item mb-10">
                                                <a href="#">
                                                    <i className="fab fa-youtube"></i>
                                                    <span>100k</span>
                                                    <p>Subscriber</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" col-lg-10">
                                        <div className="binduz-er-blog-details-box">
                                            <div className="binduz-er-text">
                                                <p>On your list of places where people might access your web app, Teams is probably number “not-on-the-list”. But it turns out that making your app accessible where your users are already working has some profound for benefits. In this article, we’ll look athow Teams makes web apps for every company</p>
                                                <p>Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from thebody large pocket at the front full button detail cotton blend cute functional. Bodycon skirts bright primary colours punchy palette pleated cheerleader vibe stripe trims staple court shoe chunky mid block.</p>
                                            </div>

                                            <div className="binduz-er-quote-text">
                                                <p>Lining concealed back zip fasten swing style high waisted double layer full pattern floral creating your app package.</p>
                                                <span>By <span>Rosalina D.</span></span>

                                            </div>
                                            <div className="binduz-er-text mt-50">
                                                <p>When creating your app package, you can choose to create it manually or use App Studio, which is a useful app inside Teams that helps developers make Teams apps (yes, meta indeed stalled the App Studio app in you).</p>
                                                <ul>
                                                    <li>Once you have installed the App Studio app in your Teams client</li>
                                                    <li>App Studio will guide you through</li>
                                                    <li>Web services up and running, you’ll need to create an app package that can be distributed and installed</li>
                                                </ul>
                                            </div>
                                            <div className="row align-items-center pt-60">
                                                <div className=" col-lg-5">
                                                    <div className="binduz-er-blog-details-thumb mr-30">
                                                        <img src="assets/images/blog-details-thumb-3.jpg" alt=""/>
                                                    </div>
                                                </div>
                                                <div className=" col-lg-7">
                                                    <div className="binduz-er-blog-details-thumb-text text pt-20 pb-20">
                                                        <p>When creating your app package, you can choose to create it manually or use App Studio, which is a useful app inside Teams that helps developers make Teams apps.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="binduz-er-text pt-50">
                                                <p>Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from thebody large pocket at the front full button detail cotton blend cute functional. Bodycon skirts bright primary colours punchy palette pleated cheerleader vibe stripe trims staple court shoe chunky mid block.</p>
                                            </div>

                                            <div className="binduz-er-text mt-50 mb-50">
                                                <h3 className="binduz-er-title">Working Process</h3>
                                                <p>Are looking beyond ideation stage to, at the very least, beta, and for companies that are  corporate-ready. Retailers want to see it all, so they usually have not precisely identified  one tech they want to focus on. Visual search and fit-tech are definitely trends.</p>
                                                <p>He gave the example of a plumber sending an invoice, and how they can tell if someone starts to create an invoice and can’t make it through the whole process. For a small business entrepreneur, “that’s a big deal because that means they’re not going to get paid, which means that tuition payment for their kid in college may be in jeopardy. So we take that really, really seriously.”</p>
                                            </div>
                                            <div className="row">
                                                <div className=" col-lg-4 col-md-6">
                                                    <div className="binduz-er-blog-project-item">
                                                        <img src="assets/images/blog-project-1.jpg" alt=""/>
                                                            <div className="binduz-er-blog-project-overlay">
                                                                <a href="#">Problem Solving</a>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div className=" col-lg-4 col-md-6">
                                                    <div className="binduz-er-blog-project-item">
                                                        <img src="assets/images/blog-project-2.jpg" alt=""/>
                                                            <div className="binduz-er-blog-project-overlay">
                                                                <a href="#">Sketching</a>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div className=" col-lg-4 col-md-6 d-none d-lg-block">
                                                    <div className="binduz-er-blog-project-item">
                                                        <img src="assets/images/blog-project-3.jpg" alt=""/>
                                                            <div className="binduz-er-blog-project-overlay">
                                                                <a href="#">Designing</a>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="binduz-er-footer-add-item text-center pt-55">
                                                <span className="binduz-er-mb-10 d-inline-block">ADVERTISEMENT</span>
                                                <img src="assets/images/space-bg-4.jpg" alt=""/>
                                            </div>
                                            <div className="binduz-er-social-share-tag d-block d-sm-flex justify-content-between align-items-center">
                                                <div className="binduz-er-tag">
                                                    <ul>
                                                        <li><a href="#">Popular</a></li>
                                                        <li><a href="#">Desgin</a></li>
                                                        <li><a href="#">UX</a></li>
                                                    </ul>
                                                </div>
                                                <div className="binduz-er-social">
                                                    <ul>
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-typo3"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-staylinked"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-tumblr"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="binduz-er-blog-post-prev-next d-flex justify-content-between align-items-center">
                                                <div className="binduz-er-post-prev-next">
                                                    <a href="#">
                                                        <span>Prev Post</span>
                                                        <h4 className="binduz-er-title">Tips On Minimalist</h4>
                                                    </a>
                                                </div>
                                                <div className="binduz-er-post-prev-next text-end">
                                                    <a href="#">
                                                        <span>Next Post</span>
                                                        <h4 className="binduz-er-title">Less Is More</h4>
                                                    </a>
                                                </div>
                                                <div className="binduz-er-post-bars">
                                                    <a href="#"><img src="assets/images/icon/post-bars.png" alt=""/></a>
                                                </div>
                                            </div>

                                            <div className="binduz-er-blog-post-newsletter">
                                                <div className="binduz-er-populer-news-sidebar-newsletter author-page-newsletter mt-40">
                                                    <div className="binduz-er-newsletter-box text-center">
                                                        <img src="assets/images/icon/icon-4.png" alt=""/>
                                                            <p>Newsletter</p>
                                                            <h3 className="binduz-er-title">Get every weekly update & insights</h3>
                                                            <div className="binduz-er-input-box">
                                                                <input type="text" placeholder="Enter your email"/>
                                                                    <button>Subscribe</button>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="binduz-er-blog-post-form">
                                                <form action="#">
                                                    <div className="binduz-er-blog-post-title">
                                                        <h3 className="binduz-er-title">Leave a Reply</h3>
                                                    </div>
                                                    <div className="row">
                                                        <div className=" col-lg-12">
                                                            <div className="binduz-er-input-box">
                                                                <textarea name="#" id="#" cols="30" rows="10" placeholder="Enter message"></textarea>
                                                            </div>
                                                        </div>
                                                        <div className=" col-lg-12">
                                                            <div className="binduz-er-input-box">
                                                                <input type="text" placeholder="Enter full name"/>
                                                            </div>
                                                            <div className="binduz-er-input-box">
                                                                <input type="email" placeholder="Email address"/>
                                                            </div>
                                                        </div>
                                                        <div className=" col-lg-12">
                                                            <div className="binduz-er-input-box text-end mt-15">
                                                                <button type="button" className="binduz-er-main-btn">Post Comment</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-3">
                            <div className="binduz-er-populer-news-sidebar">

                                <div className="binduz-er-populer-news-sidebar-post pt-60">
                                    <div className="binduz-er-popular-news-title">
                                        <ul className="nav nav-pills mb-3" id="pills-tab-2" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Most Popular</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Most Recent</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content" id="pills-tabContent-2">
                                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                            <div className="binduz-er-sidebar-latest-post-box">
                                                <div className="binduz-er-sidebar-latest-post-item">
                                                    <div className="binduz-er-thumb">
                                                        <img src="assets/images/latest-post-1.jpg" alt="latest"/>
                                                    </div>
                                                    <div className="binduz-er-content">
                                                        <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                        <h4 className="binduz-er-title"><a href="#">Why creating inclusive classrooms matters</a></h4>
                                                    </div>
                                                </div>
                                                <div className="binduz-er-sidebar-latest-post-item">
                                                    <div className="binduz-er-thumb">
                                                        <img src="assets/images/latest-post-2.jpg" alt="latest"/>
                                                    </div>
                                                    <div className="binduz-er-content">
                                                        <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                        <h4 className="binduz-er-title"><a href="#">Celebrating Asian Pacific American art and</a></h4>
                                                    </div>
                                                </div>
                                                <div className="binduz-er-sidebar-latest-post-item">
                                                    <div className="binduz-er-thumb">
                                                        <img src="assets/images/latest-post-3.jpg" alt="latest"/>
                                                    </div>
                                                    <div className="binduz-er-content">
                                                        <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                        <h4 className="binduz-er-title"><a href="#">From overcoming burnout to finding new</a></h4>
                                                    </div>
                                                </div>
                                                <div className="binduz-er-sidebar-latest-post-item">
                                                    <div className="binduz-er-thumb">
                                                        <img src="assets/images/latest-post-4.jpg" alt="latest"/>
                                                    </div>
                                                    <div className="binduz-er-content">
                                                        <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                        <h4 className="binduz-er-title"><a href="#">Sparks of inspiration to the new trend 2021</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <div className="binduz-er-sidebar-latest-post-box">
                                                <div className="binduz-er-sidebar-latest-post-item">
                                                    <div className="binduz-er-thumb">
                                                        <img src="assets/images/latest-post-1.jpg" alt="latest"/>
                                                    </div>
                                                    <div className="binduz-er-content">
                                                        <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                        <h4 className="binduz-er-title"><a href="#">Why creating inclusive classrooms matters</a></h4>
                                                    </div>
                                                </div>
                                                <div className="binduz-er-sidebar-latest-post-item">
                                                    <div className="binduz-er-thumb">
                                                        <img src="assets/images/latest-post-2.jpg" alt="latest"/>
                                                    </div>
                                                    <div className="binduz-er-content">
                                                        <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                        <h4 className="binduz-er-title"><a href="#">Celebrating Asian Pacific American art and</a></h4>
                                                    </div>
                                                </div>
                                                <div className="binduz-er-sidebar-latest-post-item">
                                                    <div className="binduz-er-thumb">
                                                        <img src="assets/images/latest-post-3.jpg" alt="latest"/>
                                                    </div>
                                                    <div className="binduz-er-content">
                                                        <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                        <h4 className="binduz-er-title"><a href="#">From overcoming burnout to finding new</a></h4>
                                                    </div>
                                                </div>
                                                <div className="binduz-er-sidebar-latest-post-item">
                                                    <div className="binduz-er-thumb">
                                                        <img src="assets/images/latest-post-4.jpg" alt="latest"/>
                                                    </div>
                                                    <div className="binduz-er-content">
                                                        <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                        <h4 className="binduz-er-title"><a href="#">Sparks of inspiration to the new trend 2021</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="binduz-er-populer-news-sidebar-newsletter binduz-er-author-page-newsletter mt-40">
                                    <div className="binduz-er-newsletter-box text-center">
                                        <img src="assets/images/icon/icon-3.png" alt=""/>
                                            <h3 className="binduz-er-title">Get Every Newsletter</h3>
                                            <p>We are not gonna make spamming</p>
                                            <div className="binduz-er-input-box">
                                                <input type="text" placeholder="Enter your email"/>
                                                    <button><i className="fal fa-long-arrow-right"></i></button>
                                            </div>
                                    </div>
                                </div>

                                <div className="binduz-er-populer-news-social binduz-er-author-page-social mt-40">
                                    <div className="binduz-er-popular-news-title">
                                        <h3 className="binduz-er-title">Social Connects</h3>
                                    </div>
                                    <div className="binduz-er-social-list">
                                        <div className="binduz-er-list">
                                            <a href="#">
                                                <span><i className="fab fa-facebook-f"></i> <span>15000</span> Likes</span>
                                                <span>Like</span>
                                            </a>
                                            <a href="#">
                                                <span><i className="fab fa-twitter"></i> <span>15000</span> Likes</span>
                                                <span>Tweet</span>
                                            </a>
                                            <a href="#">
                                                <span><i className="fab fa-behance"></i> <span>5k+</span> Follower</span>
                                                <span>Follow</span>
                                            </a>
                                            <a href="#">
                                                <span><i className="fab fa-youtube"></i> <span>15000</span> Subscribe</span>
                                                <span>Subscribe</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="binduz-er-populer-news-social binduz-er-author-page-social mt-40">
                                    <div className="binduz-er-popular-news-title">
                                        <h3 className="binduz-er-title">Video Post</h3>
                                    </div>
                                    <div className="binduz-er-video-post binduz-er-recently-viewed-item">
                                        <div className="binduz-er-latest-news-item">
                                            <div className="binduz-er-thumb">
                                                <img src="assets/images/editors-pack-thumb-1.jpg" alt=""/>
                                                    <div className="binduz-er-play">
                                                        <a href="#"><i className="fas fa-play"></i></a>
                                                    </div>
                                            </div>
                                            <div className="binduz-er-content">
                                                <div className="binduz-er-meta-item">
                                                    <div className="binduz-er-meta-categories">
                                                        <a href="#">Technology</a>
                                                    </div>
                                                    <div className="binduz-er-meta-date">
                                                        <span><i className="fal fa-calendar-alt"></i>24th February 2020</span>
                                                    </div>
                                                </div>
                                                <h5 className="binduz-er-title"><a href="#">Nearly three weeks after Rita Ora and Chris Brown released their collaboration, “Body On Me,”</a></h5>
                                                <div className="binduz-er-meta-author">
                                                    <span>By <span>Rosalina D.</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="binduz-er-sidebar-social binduz-er-populer-news-sidebar-add d-none d-lg-block">
                                    <div className="binduz-er-sidebar-add mt-40">
                                        <h3 className="binduz-er-title">Build your website & <span>grow your business</span></h3>
                                        <a className="binduz-er-main-btn" href="#">Purchase</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default DetailPost;