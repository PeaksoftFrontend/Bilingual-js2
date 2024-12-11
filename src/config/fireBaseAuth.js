import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7cHDhSSBb0ttIarLPdLCeFvrO95-qzt4",
  authDomain: "bilingual-3257d.firebaseapp.com",
  projectId: "bilingual-3257d",
  storageBucket: "bilingual-3257d.firebasestorage.app",
  messagingSenderId: "985839269404",
  appId: "1:985839269404:web:ac1a368f70b60eb46f11d9",
  measurementId: "G-VEH08FX0ZM",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
