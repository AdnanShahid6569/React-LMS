import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1iZUkYpMtPaEbLLPIe8kKksjwUQp3gMw",
  authDomain: "react-lms-7e98c.firebaseapp.com",
  projectId: "react-lms-7e98c",
  storageBucket: "react-lms-7e98c.firebasestorage.app",
  messagingSenderId: "208168252666",
  appId: "1:208168252666:web:8cef4ce2ea76c472bfc543"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// export default auth
export {auth,db}