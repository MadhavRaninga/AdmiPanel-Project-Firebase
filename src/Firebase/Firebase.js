import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB2shIMMiqmRj35EkEEgpsbcaYHsMDaCQM",
  authDomain: "madhav-b704a.firebaseapp.com",
  projectId: "madhav-b704a",
  storageBucket: "madhav-b704a.firebasestorage.app",
  messagingSenderId: "475667472827",
  appId: "1:475667472827:web:e45945389e119afa98649e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);