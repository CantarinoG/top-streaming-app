import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
  } from 'firebase/auth';
  import {
    getFirestore,
    collection,
    query,
    getDocs
} from 'firebase/firestore';


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
    return !!getAuth().currentUser;
}

export async function loadMedia(callback) {
    const q = query(collection(getFirestore(), "media"));
    const mediaArray = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => {
    await mediaArray.push(doc.data());
});
    callback(mediaArray);
}

export function signOutUser() {
    signOut(getAuth());
  }