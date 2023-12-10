import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage'

import { getFirestore } from "firebase/firestore"; // importando método necessário
/*
const firebaseConfig = {
    apiKey: "AIzaSyDfPDLrmphWW4C8LQMBf8cV0xWR_ZZYNtI",
    authDomain: "projetoadm-aed08.firebaseapp.com",
    projectId: "projetoadm-aed08",
    storageBucket: "projetoadm-aed08.appspot.com",
    messagingSenderId: "954436910253",
    appId: "1:954436910253:web:4460e07999ba57e9365a24"
};
*/
const firebaseConfig = {
    apiKey: "AIzaSyDhiZjH-E6MMmuklBVoMUc-QrMzKCzTXOk",
    authDomain: "miniblog-c7ead.firebaseapp.com",
    projectId: "miniblog-c7ead",
    storageBucket: "miniblog-c7ead.appspot.com",
    messagingSenderId: "222541238724",
    appId: "1:222541238724:web:1e08a81f302b60d02f5491"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore BD
const storage = getStorage(app)
const db = getFirestore(app);
const auth = getAuth()
//upload de imagens
const projectStorage = getStorage()
const projectFirestore = getFirestore()
export { db, auth, storage, projectFirestore, projectStorage };