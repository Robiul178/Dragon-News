// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKS6t4NmhV5H6wVyLYozYwlu5QQcF_Nos",
    authDomain: "dragon-news-3a7ba.firebaseapp.com",
    projectId: "dragon-news-3a7ba",
    storageBucket: "dragon-news-3a7ba.appspot.com",
    messagingSenderId: "991838693726",
    appId: "1:991838693726:web:afd3cd0e1a3ee20b5dc7cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;