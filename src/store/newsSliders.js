import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import news from '../apis/nytimes';

const initialNews = [];

const useNewsSlidersStore = create(
    persist(
        (set) => ({
            news: initialNews,
            newsReady: false,
            fetchNews: async() => {

                const { data } = await news.get("news/v3/content/all/all.json?limit=3");

                set(produce((state) => {
                    state.news = data.results;
                    state.newsReady = true;
                }))

            },
            sortNews: (type) => {
                if (type === 'asc') {
                    set(produce((state) => {
                        const sorted = [...state.news].sort((a, b) => a.vote_average - b.vote_average);
                        state.news = sorted;
                    }))
                }
                if (type === 'desc') {
                    set(produce((state) => {
                        const sorted = [...state.news].sort((a, b) => b.vote_average - a.vote_average);
                        state.news = sorted;
                    }))
                }
            }
        }), {
            name: 'news-storage', // nama untuk menyimpan di storage
            getStorage: () => localStorage, // (optional) by default akan 'localStorage', bisa pakai sessionStorage, dll
        }
    )
);

// selector bisa dibuat di sini, biar bisa reusesable
export const selectNews = (state) => state.news;
export const selectFetchNews = (state) => state.fetchNews;
export const selectNewsReady = (state) => state.newsReady;
export const selectSortNews = (state) => state.sortNews;

export default useNewsSlidersStore;