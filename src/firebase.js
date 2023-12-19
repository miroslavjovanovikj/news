// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtmoKU9RIFuxMRFNoWMnZPljpwRAB6QA8",
    authDomain: "last-news-42ece.firebaseapp.com",
    databaseURL: "https://last-news-42ece-default-rtdb.firebaseio.com",
    projectId: "last-news-42ece",
    storageBucket: "last-news-42ece.appspot.com",
    messagingSenderId: "592690082886",
    appId: "1:592690082886:web:021812f66cf87d105ac647",
    measurementId: "G-BNW53HP8CB"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const onAuthStateChange = (callback) => {
    return onAuthStateChanged(auth, callback);
};