// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9yRQOGw8FRBmPZ_DIhrvPs_f7ILvkwuA",
  authDomain: "redteamtest-efa03.firebaseapp.com",
  projectId: "redteamtest-efa03",
  storageBucket: "redteamtest-efa03.appspot.com",
  messagingSenderId: "745433590218",
  appId: "1:745433590218:web:518075f224f63ad5f5c733"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
