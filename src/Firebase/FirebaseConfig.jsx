// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbTwQ5oj38YSDFmhq_gueFTHCrKql4exw",
  authDomain: "vrivicompany.firebaseapp.com",
  projectId: "vrivicompany",
  storageBucket: "vrivicompany.firebasestorage.app",
  messagingSenderId: "951182302209",
  appId: "1:951182302209:web:29adf5ccaba153219cf400",
  measurementId: "G-4BG89VNF3G"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
