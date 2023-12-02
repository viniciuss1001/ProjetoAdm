import firebase from 'firebase/compat/app'
import 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfPDLrmphWW4C8LQMBf8cV0xWR_ZZYNtI",
    authDomain: "projetoadm-aed08.firebaseapp.com",
    projectId: "projetoadm-aed08",
    storageBucket: "projetoadm-aed08.appspot.com",
    messagingSenderId: "954436910253",
    appId: "1:954436910253:web:4460e07999ba57e9365a24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firebase db
const db = getFirestore(app)
const auth = getAuth()
export { db, auth }