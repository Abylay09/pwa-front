import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyANTptqnk25Ny-M4p5EkHlcXR0BcewoLi4",
    authDomain: "pwa-back-c51c9.firebaseapp.com",
    projectId: "pwa-back-c51c9",
    storageBucket: "pwa-back-c51c9.appspot.com",
    messagingSenderId: "499809151058",
    appId: "1:499809151058:web:78da4ef5c9c6c5b339d78b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);