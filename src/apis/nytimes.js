import axios from 'axios';

const API_KEY = '9q07tHGaR0VUwedIObzL2YV2hVSAHrs7';
const baseUrl = 'https://api.nytimes.com/svc/';

const news = axios.create({
    baseURL: baseUrl,
    params: {
        'api-key': API_KEY,
    },
});

export default news;