import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import news from '../../apis/tlm';

const initialNews = [];

const usePcGameStore = create(
    persist(
        (set) => ({
            news: initialNews,
            newsReady: false,
            fetchPcGame: async() => {
                const { data } = await news.get(`games/pc`);

                set(produce((state) => {
                    state.news = data;
                    state.newsReady = true;
                }))

            },
        }), {
            name: 'pc-game-storage', // nama untuk menyimpan di storage
            getStorage: () => localStorage, // (optional) by default akan 'localStorage', bisa pakai sessionStorage, dll
        }
    )
);

// selector bisa dibuat di sini, biar bisa reusesable
export const selectPcGame = (state) => state.news;
export const selectFetchPcGame = (state) => state.fetchPcGame;
export const selectPcGameReady = (state) => state.newsReady;

export default usePcGameStore;