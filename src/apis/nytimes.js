import axios from 'axios';

const API_KEY = 'dFNHmQtntN4m1qm5pce9bkwS5P1MJxHf';
const baseUrl = 'https://api.nytimes.com/svc/';

const tmdb = axios.create({
    baseURL: baseUrl,
    params: {
        api_key: API_KEY,
    },
});

export default tmdb;