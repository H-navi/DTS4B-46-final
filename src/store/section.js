import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import news from '../apis/nytimes';

const initialNews = [];

const useSectionStore = create(
    persist(
        (set) => ({
            news: initialNews,
            newsReady: false,
            fetchSection: async(limit) => {
                const { data } = await news.get(`news/v3/content/all/technology.json?limit=${limit}`);

                set(produce((state) => {
                    state.news = data.results;
                    state.technoReady = true;
                }))

            },
            fetchAllSection: async() => {
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
export const selectSection = (state) => state.news;
export const selectFetchSection = (state) => state.fetchSection;

export const selectAllSection = (state) => state.allNews;
export const selectFetchAllSection = (state) => state.fetchAllSection;

export const selectSectionReady = (state) => state.technoReady;

export default useSectionStore;