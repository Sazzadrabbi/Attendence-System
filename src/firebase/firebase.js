<<<<<<< HEAD
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
=======
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
	appId: "1:114033305340:web:138542c047b79859d3d979",
	measurementId: "G-CWKDSD1WNC"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
>>>>>>> 8ca538e612702369f17b1ed47e8365af0f05f7ec
