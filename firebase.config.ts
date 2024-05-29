import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDVMSee86gJKnfahlQ1uOCZ-5uzlEOG8m0",
    authDomain: "movie-bookmark-66709.firebaseapp.com",
    projectId: "movie-bookmark-66709",
    storageBucket: "movie-bookmark-66709.appspot.com",
    messagingSenderId: "599782789578",
    appId: "1:599782789578:web:db1ba26b30f2eb5104ff33",
    measurementId: "G-06917FM667"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;