import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import news from '../../apis/nytimes';

const initialNews = [];

const useWorldStore = create(
    persist(
        (set) => ({
            news: initialNews,
            worldReady: false,
            fetchWorld: async(limit) => {
                try {
                    const { data } = await news.get(`news/v3/content/all/world.json?limit=${limit}`);

                    set(produce((state) => {
                        state.news = data.results;
                        state.worldReady = true;
                    }))
                } catch (error) {
                    console.log(error);
                }
            },
            fetchAllWorld: async() => {
                const { data } = await news.get(`news/v3/content/all/world.json`);

                set(produce((state) => {
                    state.allNews = data.results;
                    state.worldReady = true;
                }))

            },
        }), {
            name: 'world-storage', // nama untuk menyimpan di storage
            getStorage: () => localStorage, // (optional) by default akan 'localStorage', bisa pakai sessionStorage, dll
        }
    )
);

// selector bisa dibuat di sini, biar bisa reusesable
export const selectWorld = (state) => state.news;
export const selectFetchWorld = (state) => state.fetchWorld;

export const selectAllWorld = (state) => state.allNews;
export const selectFetchAllWorld = (state) => state.fetchAllWorld;

export const selectWorldReady = (state) => state.worldReady;

export default useWorldStore;