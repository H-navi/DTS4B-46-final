import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import news from '../../apis/nytimes';

const initialNews = [];

const useHomeStore = create(
    persist(
        (set) => ({
            news: initialNews,
            newsReady: false,
            fetchHome: async(limit) => {
                const { data } = await news.get(`news/v3/content/all/home.json?limit=${limit}`);

                set(produce((state) => {
                    state.news = data.results;
                    state.newsReady = true;
                }))

            },
        }), {
            name: 'home-storage', // nama untuk menyimpan di storage
            getStorage: () => localStorage, // (optional) by default akan 'localStorage', bisa pakai sessionStorage, dll
        }
    )
);

// selector bisa dibuat di sini, biar bisa reusesable
export const selectHome = (state) => state.news;
export const selectFetchHome = (state) => state.fetchHome;
export const selectHomeReady = (state) => state.newsReady;

export default useHomeStore;