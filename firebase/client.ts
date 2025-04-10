// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEHxN6-o7xmDcBTQk52iyB_c60-i_GnjU",
  authDomain: "prepwise-19327.firebaseapp.com",
  projectId: "prepwise-19327",
  storageBucket: "prepwise-19327.firebasestorage.app",
  messagingSenderId: "1090494926237",
  appId: "1:1090494926237:web:30cab5247b529c93a23374",
  measurementId: "G-PLE0VL0940",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app)
export const db = getFirestore(app)
