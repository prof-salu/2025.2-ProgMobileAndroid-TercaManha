import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDH06vjzyYN2SMxDAUSjNIAj0DAvUutlrM",
    authDomain: "meuslembretesmanha-7b201.firebaseapp.com",
    projectId: "meuslembretesmanha-7b201",
    storageBucket: "meuslembretesmanha-7b201.firebasestorage.app",
    messagingSenderId: "661785318261",
    appId: "1:661785318261:web:3315d649f5cce78bce393c",
    measurementId: "G-CW0PV5FSEZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);