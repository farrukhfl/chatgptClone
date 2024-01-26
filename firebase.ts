import {getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD9MnHVeq065ZHEkl2_6ihQxtx2cmIKX_M",
  authDomain: "chatgpt-clone-b9f48.firebaseapp.com",
  projectId: "chatgpt-clone-b9f48",
  storageBucket: "chatgpt-clone-b9f48.appspot.com",
  messagingSenderId: "1072467736657",
  appId: "1:1072467736657:web:f9dbf9fd7ffb4f82506070"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}