import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import news from '../../apis/tlm';

const initialNews = [];

const useGameNewsStore = create(
    persist(
        (set) => ({
            news: initialNews,
            newsReady: false,
            fetchGameNews: async() => {
                const { data } = await news.get(`games/news`);

                set(produce((state) => {
                    state.news = data;
                    state.newsReady = true;
                }))

            },
        }), {
            name: 'game-storage', // nama untuk menyimpan di storage
            getStorage: () => localStorage, // (optional) by default akan 'localStorage', bisa pakai sessionStorage, dll
        }
    )
);

// selector bisa dibuat di sini, biar bisa reusesable
export const selectGameNews = (state) => state.news;
export const selectFetchGameNews = (state) => state.fetchGameNews;
export const selectGameNewsReady = (state) => state.newsReady;

export default useGameNewsStore;