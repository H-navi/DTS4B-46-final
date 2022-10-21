import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import news from '../../apis/nytimes';

const initialNews = [];

const useTechnoStore = create(
    persist(
        (set) => ({
            news: initialNews,
            newsReady: false,
            fetchTechno: async(limit) => {
                const { data } = await news.get(`news/v3/content/all/technology.json?limit=${limit}`);

                set(produce((state) => {
                    state.news = data.results;
                    state.technoReady = true;
                }))

            },
            fetchAllTechno: async() => {
                const { data } = await news.get(`news/v3/content/all/technology.json`);

                set(produce((state) => {
                    state.allNews = data.results;
                    state.technoReady = true;
                }))

            },
        }), {
            name: 'techno-storage', // nama untuk menyimpan di storage
            getStorage: () => localStorage, // (optional) by default akan 'localStorage', bisa pakai sessionStorage, dll
        }
    )
);

// selector bisa dibuat di sini, biar bisa reusesable
export const selectTechno = (state) => state.news;
export const selectFetchTechno = (state) => state.fetchTechno;

export const selectAllTechno = (state) => state.allNews;
export const selectFetchAllTechno = (state) => state.fetchAllTechno;

export const selectTechnoReady = (state) => state.technoReady;

export default useTechnoStore;