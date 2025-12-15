// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvtiziitEypzMYLNfYNLGerjxV84Dw4fE",
    authDomain: "email-password-authentic-6258e.firebaseapp.com",
    projectId: "email-password-authentic-6258e",
    storageBucket: "email-password-authentic-6258e.firebasestorage.app",
    messagingSenderId: "49770486032",
    appId: "1:49770486032:web:690a0d84ee6a95ede52d95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);