import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVXIAt7fV-1ek50I-EDPzAhuPNGX3TFqM",
  authDomain: "react-firebase-f2dae.firebaseapp.com",
  projectId: "react-firebase-f2dae",
  storageBucket: "react-firebase-f2dae.appspot.com",
  messagingSenderId: "123210207390",
  appId: "1:123210207390:web:49b2ea44cb8e53fa93ab8f",
  measurementId: "G-LFMRY3PJN5",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage };