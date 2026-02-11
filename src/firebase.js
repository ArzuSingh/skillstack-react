import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKWIA_lW1teEStpUsfym1yGqoCMLBJIe0",
  authDomain: "skillstack-7ad0a.firebaseapp.com",
  projectId: "skillstack-7ad0a",
  storageBucket: "skillstack-7ad0a.firebasestorage.app",
  messagingSenderId: "436183707224",
  appId: "1:436183707224:web:c9e2ad4c0378c52e84a42d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);