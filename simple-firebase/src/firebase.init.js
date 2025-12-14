// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaiFHiXC4TpJCxIC0gZOfNejO7y5uvcjU",
    authDomain: "simple-firebase-2133c.firebaseapp.com",
    projectId: "simple-firebase-2133c",
    storageBucket: "simple-firebase-2133c.firebasestorage.app",
    messagingSenderId: "756137158836",
    appId: "1:756137158836:web:f5121a78b6be76785ecfe1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);