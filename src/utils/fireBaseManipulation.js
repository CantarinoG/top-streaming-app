import { initializeApp } from "firebase/app";
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    signInAnonymously
  } from 'firebase/auth';

export function initializeFireBase() {

    const firebaseConfig = {
        apiKey: "AIzaSyCouFmse9795UUKXjbjM5vbxjbO6Kru7JQ",
        authDomain: "gcflix-app.firebaseapp.com",
        projectId: "gcflix-app",
        storageBucket: "gcflix-app.appspot.com",
        messagingSenderId: "922106538575",
        appId: "1:922106538575:web:255dfd95156045259c583a"
    };

    initializeApp(firebaseConfig);
}

export async function authWithGoogle() {
    var provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
}

export function isUserLoggedIn() {
    return getAuth();
}
