import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import news from '../../apis/nytimes';

const initialNews = [];

const useAllStore = create(
    persist(
        (set) => ({
            news: initialNews,
            newsReady: false,
            fetchAll: async(limit) => {
                const { data } = await news.get(`news/v3/content/all/all.json?limit=${limit}`);

                set(produce((state) => {
                    state.news = data.results;
                    state.newsReady = true;
                }))

            },
        }), {
            name: 'all-storage', // nama untuk menyimpan di storage
            getStorage: () => localStorage, // (optional) by default akan 'localStorage', bisa pakai sessionStorage, dll
        }
    )
);

// selector bisa dibuat di sini, biar bisa reusesable
export const selectAll = (state) => state.news;
export const selectFetchAll = (state) => state.fetchAll;
export const selectAllReady = (state) => state.newsReady;

export default useAllStore;