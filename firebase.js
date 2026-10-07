// ============================================================
// FIREBASE CONFIG - College of Nursing Female Nawabshah
// ============================================================

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBejSqJprFEVEAj_Ax3kbsGbgmROS3pXBI",
    authDomain: "college-nursing-nawabshah.firebaseapp.com",
    projectId: "college-nursing-nawabshah",
    storageBucket: "college-nursing-nawabshah.firebasestorage.app",
    messagingSenderId: "475371473614",
    appId: "1:475371473614:web:87c7dcfc7ae530051bde9f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log('✅ College of Nursing Female Nawabshah - Connected');

export { app, db };