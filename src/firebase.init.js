// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8mJudKA2MoGVn4F8prHZYt0ZN9uE5KmA",
    authDomain: "celoni-health-care.firebaseapp.com",
    projectId: "celoni-health-care",
    storageBucket: "celoni-health-care.appspot.com",
    messagingSenderId: "102858867716",
    appId: "1:102858867716:web:a2d5151d84f1176fd5a151",
    measurementId: "G-B3W687M3N1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);