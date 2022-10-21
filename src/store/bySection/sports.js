import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import news from '../../apis/nytimes';

const initialNews = [];

const useSportsStore = create(
    persist(
        (set) => ({
            sports: initialNews,
            sportsReady: false,
            fetchSports: async(limit) => {

                const { data } = await news.get(`news/v3/content/all/sports.json?limit=${limit}`);

                set(produce((state) => {
                    state.sports = data.results;
                    state.sportsReady = true;
                }))

            },
        }), {
            name: 'sports-storage', // nama untuk menyimpan di storage
            getStorage: () => localStorage, // (optional) by default akan 'localStorage', bisa pakai sessionStorage, dll
        }
    )
);

// selector bisa dibuat di sini, biar bisa reusesable
export const selectSports = (state) => state.sports;
export const selectFetchSports = (state) => state.fetchSports;
export const selectSportsReady = (state) => state.sportsReady;

export default useSportsStore;