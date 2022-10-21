import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import news from '../../apis/nytimes';

const initialNews = [];

const useWorldStore = create(
    persist(
        (set) => ({
            world: initialNews,
            worldReady: false,
            fetchWorld: async(limit) => {
                try {
                    const { data } = await news.get(`news/v3/content/all/world.json?limit=${limit}`);

                    set(produce((state) => {
                        state.world = data.results;
                        state.worldReady = true;
                    }))
                } catch (error) {
                    console.log(error);
                }
            },
            // sortWorld: (type) => {
            //     if (type === 'asc') {
            //         set(produce((state) => {
            //             const sorted = [...state.world].sort((a, b) => a.vote_average - b.vote_average);
            //             state.world = sorted;
            //         }))
            //     }
            //     if (type === 'desc') {
            //         set(produce((state) => {
            //             const sorted = [...state.world].sort((a, b) => b.vote_average - a.vote_average);
            //             state.world = sorted;
            //         }))
            //     }
            // }
        }), {
            name: 'world-storage', // nama untuk menyimpan di storage
            getStorage: () => localStorage, // (optional) by default akan 'localStorage', bisa pakai sessionStorage, dll
        }
    )
);

// selector bisa dibuat di sini, biar bisa reusesable
export const selectWorld = (state) => state.world;
export const selectFetchWorld = (state) => state.fetchWorld;
export const selectWorldReady = (state) => state.worldReady;
export const selectSortWorld = (state) => state.sortWorld;

export default useWorldStore;