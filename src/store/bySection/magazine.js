import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import news from '../../apis/nytimes';

const initialNews = [];

const useMagazineStore = create(
    persist(
        (set) => ({
            magazine: initialNews,
            magazineReady: false,
            fetchMagazine: async(limit) => {
                try {
                    const { data } = await news.get(`news/v3/content/all/magazine.json?limit=${limit}`);

                    set(produce((state) => {
                        state.magazine = data.results;
                        state.magazineReady = true;
                    }))
                } catch (error) {
                    console.log(error);
                }
            },
            // sortMagazine: (type) => {
            //     if (type === 'asc') {
            //         set(produce((state) => {
            //             const sorted = [...state.magazine].sort((a, b) => a.vote_average - b.vote_average);
            //             state.magazine = sorted;
            //         }))
            //     }
            //     if (type === 'desc') {
            //         set(produce((state) => {
            //             const sorted = [...state.magazine].sort((a, b) => b.vote_average - a.vote_average);
            //             state.magazine = sorted;
            //         }))
            //     }
            // }
        }), {
            name: 'magazine-storage', // nama untuk menyimpan di storage
            getStorage: () => localStorage, // (optional) by default akan 'localStorage', bisa pakai sessionStorage, dll
        }
    )
);

// selector bisa dibuat di sini, biar bisa reusesable
export const selectMagazine = (state) => state.magazine;
export const selectFetchMagazine = (state) => state.fetchMagazine;
export const selectMagazineReady = (state) => state.magazineReady;
export const selectSortMagazine = (state) => state.sortMagazine;

export default useMagazineStore;