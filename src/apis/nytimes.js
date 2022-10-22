import axios from 'axios';

const API_KEY = 'dFNHmQtntN4m1qm5pce9bkwS5P1MJxHf';
const baseUrl = 'https://api.nytimes.com/svc/';

const news = axios.create({
    baseURL: baseUrl,
    params: {
        'api-key': API_KEY,
    },
});

export default news;