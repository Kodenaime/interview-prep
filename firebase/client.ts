// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOBJFCRk3_nESTlmv8bo2-YDQu5zh8HlQ",
  authDomain: "interview-pro-df038.firebaseapp.com",
  projectId: "interview-pro-df038",
  storageBucket: "interview-pro-df038.firebasestorage.app",
  messagingSenderId: "1073128469579",
  appId: "1:1073128469579:web:13db4a68d6c2bd24de09ce",
  measurementId: "G-L6YSHTBBKS"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app)