import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import news from '../../apis/tlm';

const initialNews = [];

const useEsportStore = create(
    persist(
        (set) => ({
            news: initialNews,
            newsReady: false,
            fetchEsport: async() => {
                const { data } = await news.get(`tech`);

                set(produce((state) => {
                    state.news = data;
                    state.newsReady = true;
                }))

            },
        }), {
            name: 'games-storage', // nama untuk menyimpan di storage
            getStorage: () => localStorage, // (optional) by default akan 'localStorage', bisa pakai sessionStorage, dll
        }
    )
);

// selector bisa dibuat di sini, biar bisa reusesable
export const selectEsport = (state) => state.news;
export const selectFetchEsport = (state) => state.fetchEsport;
export const selectEsportReady = (state) => state.newsReady;

export default useEsportStore;