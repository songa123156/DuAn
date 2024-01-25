// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsUfykyE1L-VyuIFX_89jYEEPG1MYFLi4",
  authDomain: "duan-ede31.firebaseapp.com",
  projectId: "duan-ede31",
  storageBucket: "duan-ede31.appspot.com",
  messagingSenderId: "784908555397",
  appId: "1:784908555397:web:9a7265bd350c300a1a45ec",
  measurementId: "G-FC85BK0WPK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
