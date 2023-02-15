import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkUu1BOlTjuYwjnMJkskeFAAA3_vB9Tes",
  authDomain: "mithackathon-560fb.firebaseapp.com",
  databaseURL: "https://mithackathon-560fb-default-rtdb.firebaseio.com",
  projectId: "mithackathon-560fb",
  storageBucket: "mithackathon-560fb.appspot.com",
  messagingSenderId: "496355720770",
  appId: "1:496355720770:web:2ccf9b9bb7d69fb5d7f7db",
  measurementId: "G-ZYJXTSXF9B",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
