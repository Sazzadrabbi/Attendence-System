// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";

import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAu_P6e0Zo9IHjW5lXCPgLhGnnv5qAumAc",
  authDomain: "smart-attendence-system-cedfd.firebaseapp.com",
  databaseURL: "https://smart-attendence-system-cedfd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-attendence-system-cedfd",
  storageBucket: "smart-attendence-system-cedfd.appspot.com",
  messagingSenderId: "114033305340",
  appId: "1:114033305340:web:51e6d932d654aff5d3d979",
  measurementId: "G-9S37V439CS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
