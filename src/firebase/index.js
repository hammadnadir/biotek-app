// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt8gSG6W0aRMFO1uk3oOISUK-jDrJeJZQ",
  authDomain: "my-firebase-ec54c.firebaseapp.com",
  projectId: "my-firebase-ec54c",
  storageBucket: "my-firebase-ec54c.appspot.com",
  messagingSenderId: "989926439424",
  appId: "1:989926439424:web:817012596c9c9081bef6e5",
  measurementId: "G-XBWY7KEKHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);