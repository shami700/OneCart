import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "loginonecart-a02f1.firebaseapp.com",
  projectId: "loginonecart-a02f1",
  storageBucket: "loginonecart-a02f1.firebasestorage.app",
  messagingSenderId: "421942946371",
  appId: "1:421942946371:web:65594ae3dc7d45140a42f6",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

