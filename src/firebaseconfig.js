import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2B3g9dmnm-8eCeaC20GUPsRWjXxV8Qys",
  authDomain: "octogenie-idcard.firebaseapp.com",
  projectId: "octogenie-idcard",
  storageBucket: "octogenie-idcard.firebasestorage.app",
  messagingSenderId: "651369419370",
  appId: "1:651369419370:web:8090052c5b95e51e19f013",
  measurementId: "G-V1TTYXT5SJ",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
auth.useDeviceLanguage();

export { db, app, auth };
