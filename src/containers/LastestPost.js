import React, { Fragment, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import LastestPost from '../components/LastestPost';
import usePcGameStore, { selectFetchPcGame, selectPcGame } from '../store/tlmSection/pcGame';


function LastestPosts() {

    const gameSection = usePcGameStore(selectPcGame);
    const fetchGameSection = usePcGameStore(selectFetchPcGame);
    const allSectionReady = usePcGameStore(selectPcGame);

    useEffect(() => {
        fetchGameSection();
    }, []);

    useEffect(() => {
        if (!allSectionReady) return;
    }, [allSectionReady]);

    return (
        <Fragment>
            <div className="col-lg-3">
                <div className="binduz-er-sidebar-latest-post">
                    <div className="binduz-er-sidebar-title">
                        <h4 className="binduz-er-title">Latest Post</h4>
                    </div>
                    <div className="binduz-er-sidebar-latest-post-box">
                        {
                            gameSection.slice(0, 6).map(tech => (
                                <LastestPost key={(tech.title)} news={tech} />
                            ))
                        }

                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default LastestPosts;