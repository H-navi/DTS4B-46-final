import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import news from '../../apis/nytimes';

const initialNews = [];

const useMagazineStore = create(
    persist(
        (set) => ({
            news: initialNews,
            magazineReady: false,
            fetchMagazine: async(limit) => {
                try {
                    const { data } = await news.get(`news/v3/content/all/magazine.json?limit=${limit}`);

                    set(produce((state) => {
                        state.news = data.results;
                        state.magazineReady = true;
                    }))
                } catch (error) {
                    console.log(error);
                }
            },
            fetchAllMagazine: async() => {
                const { data } = await news.get(`news/v3/content/all/magazine.json`);

                set(produce((state) => {
                    state.allNews = data.results;
                    state.magazineReady = true;
                }))

            },
        }), {
            name: 'magazine-storage', // nama untuk menyimpan di storage
            getStorage: () => localStorage, // (optional) by default akan 'localStorage', bisa pakai sessionStorage, dll
        }
    )
);

// selector bisa dibuat di sini, biar bisa reusesable
export const selectMagazine = (state) => state.news;
export const selectFetchMagazine = (state) => state.fetchMagazine;

export const selectAllMagazine = (state) => state.allNews;
export const selectFetchAllMagazine = (state) => state.fetchAllMagazine;

export const selectMagazineReady = (state) => state.magazineReady;
export const selectSortMagazine = (state) => state.sortMagazine;

export default useMagazineStore;