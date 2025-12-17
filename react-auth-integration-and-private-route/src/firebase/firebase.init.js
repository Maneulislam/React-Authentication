// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Danger Zone

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZ-DsbNNcPxdt_qO06Fn2Du4OvRxGXb9w",
    authDomain: "auth-integration--pri-route.firebaseapp.com",
    projectId: "auth-integration--pri-route",
    storageBucket: "auth-integration--pri-route.firebasestorage.app",
    messagingSenderId: "89058256738",
    appId: "1:89058256738:web:b21dfd7edd1f8a67436e3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);