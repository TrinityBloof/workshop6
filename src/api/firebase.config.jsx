import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCijD6D_VpHHQw6UcztJTZoHXT6Ws36g5A",
  authDomain: "login-78eae.firebaseapp.com",
  projectId: "login-78eae",
  storageBucket: "login-78eae.appspot.com",
  messagingSenderId: "654013570386",
  appId: "1:654013570386:web:910572c1eba75c3ee3ee8b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);