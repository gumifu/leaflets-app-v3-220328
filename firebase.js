// Import the functions you need from the SDKs you need
import { initializeApp ,getApps,getApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "leaflets-app-v3-220328.firebaseapp.com",
  projectId: "leaflets-app-v3-220328",
  storageBucket: "leaflets-app-v3-220328.appspot.com",
  messagingSenderId: "685187894297",
  appId: "1:685187894297:web:e39743e960f9eef94d6e88",
  measurementId: "G-V06CFLZP19"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig):getApp();
// const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
