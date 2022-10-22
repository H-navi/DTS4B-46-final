import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import news from '../../apis/tlm';

const initialNews = [];

const useTechReviewStore = create(
    persist(
        (set) => ({
            news: initialNews,
            newsReady: false,
            fetchTechReview: async() => {
                const { data } = await news.get(`tech/review`);

                set(produce((state) => {
                    state.news = data;
                    state.newsReady = true;
                }))

            },
        }), {
            name: 'tech-storage', // nama untuk menyimpan di storage
            getStorage: () => localStorage, // (optional) by default akan 'localStorage', bisa pakai sessionStorage, dll
        }
    )
);

// selector bisa dibuat di sini, biar bisa reusesable
export const selectTechReview = (state) => state.news;
export const selectFetchTechReview = (state) => state.fetchTechReview;
export const selectTechReviewReady = (state) => state.newsReady;

export default useTechReviewStore;