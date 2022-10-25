import React, { Fragment, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MainPostNews from '../components/MainPost';
import useGameStore, { selectFetchGame, selectGame, selectGameReady } from '../store/tlmSection/game';
import useTechReviewStore, { selectFetchTechReview, selectTechReview, selectTechReviewReady } from '../store/tlmSection/techReview';
import LastestPosts from './LastestPost';

function MainPosts() {

    // const [queryParams] = useSearchParams();
    const gameSection = useGameStore(selectGame);
    const fetchGameSection = useGameStore(selectFetchGame);
    const allSectionReady = useGameStore(selectGameReady);

    const techReview = useTechReviewStore(selectTechReview);
    const fetchTechReview = useTechReviewStore(selectFetchTechReview);
    const teachReviewReady = useTechReviewStore(selectTechReviewReady);

    useEffect(() => {
        fetchGameSection();
        fetchTechReview();

    }, []);

    useEffect(() => {
        if (!allSectionReady) return;
        if (!teachReviewReady) return;
    }, [allSectionReady, teachReviewReady]);

    return (
        <Fragment>
            <section className="binduz-er-main-posts-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="binduz-er-video-post-topbar">
                                <div className="binduz-er-video-post-title">
                                    <h3 className="binduz-er-title">Main Posts</h3>
                                </div>
                            </div>
                            <div className="row">
                                {
                                    gameSection.slice(0, 6).map(game => (
                                        <MainPostNews key={( game.title )} news={game}/>
                                    ))
                                }
                            </div>
                        </div>
                        <LastestPosts/>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default MainPosts;