import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwndQ4rC7iOCnIL0wjG2ERVYBOwH38lx0",
  authDomain: "maazinformatics.firebaseapp.com",
  projectId: "maazinformatics",
  storageBucket: "maazinformatics.appspot.com",
  messagingSenderId: "207021978529",
  appId: "1:207021978529:web:dc2e60a4802dedad6851e0",
  measurementId: "G-C1PD3G2ECF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);