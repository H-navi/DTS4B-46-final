import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import news from '../apis/nytimes';

const initialNews = [];

const useNewsTrendingsStore = create(
    persist(
        (set) => ({
            technoNews: initialNews,
            sportsNews: initialNews,
            magazineNews: initialNews,
            worldNews: initialNews,
            technoNewsReady: false,
            sportsNewsReady: false,
            magazineNewsReady: false,
            worldNewsReady: false,
            fetchTechnoNews: async() => {
                try {
                    const { data } = await news.get("news/v3/content/all/technology.json?limit=3");

                    set(produce((state) => {
                        state.technoNews = data.results;
                        state.technoNewsReady = true;
                    }))
                } catch (error) {
                    console.log(error);
                }
            },
            fetchSportsNews: async() => {
                try {
                    const { data } = await news.get("news/v3/content/all/sports.json?limit=3");

                    set(produce((state) => {
                        state.sportsNews = data.results;
                        state.sportsNewsReady = true;
                    }))
                } catch (error) {
                    console.log(error);
                }
            },
            fetchMagazineNews: async() => {
                try {
                    const { data } = await news.get("news/v3/content/all/magazine.json?limit=3");

                    set(produce((state) => {
                        state.magazineNews = data.results;
                        state.magazineNewsReady = true;
                    }))
                } catch (error) {
                    console.log(error);
                }
            },
            fetchWorldNews: async() => {
                try {
                    const { data } = await news.get("news/v3/content/all/world.json?limit=3");

                    set(produce((state) => {
                        state.worldNews = data.results;
                        state.worldNewsReady = true;
                    }))
                } catch (error) {
                    console.log(error);
                }
            },
        }), {
            name: 'news-storage', // nama untuk menyimpan di storage
            getStorage: () => localStorage, // (optional) by default akan 'localStorage', bisa pakai sessionStorage, dll
        }
    )
);

// selector bisa dibuat di sini, biar bisa reusesable
export const selectTechnoNews = (state) => state.technoNews;
export const selectFetchTechnoNews = (state) => state.fetchTechnoNews;
export const selectTechnoNewsReady = (state) => state.technoNewsReady;

export const selectSportsNews = (state) => state.sportsNews;
export const selectFetchSportsNews = (state) => state.fetchSportsNews;
export const selectSportsNewsReady = (state) => state.sportsNewsReady;

export const selectMagazineNews = (state) => state.magazineNews;
export const selectFetchMagazineNews = (state) => state.fetchMagazineNews;
export const selectMagazineNewsReady = (state) => state.magazineNewsReady;

export const selectWorldNews = (state) => state.worldNews;
export const selectFetchWorldNews = (state) => state.fetchWorldNews;
export const selectWorldNewsReady = (state) => state.worldNewsReady;


export default useNewsTrendingsStore;