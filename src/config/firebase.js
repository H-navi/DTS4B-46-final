import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: replace with your own config
const firebaseConfig = {
    apiKey: "AIzaSyDf_JnlDpdo3NxK7UcYRUhgyqytrf7jYhE",
    authDomain: "news-a5399.firebaseapp.com",
    projectId: "news-a5399",
    storageBucket: "news-a5399.appspot.com",
    messagingSenderId: "464947466198",
    appId: "1:464947466198:web:921957fc68193a13655e77",
    measurementId: "G-QQ8PXZ250S"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };