// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmD6WMUD01pSC65c85G_8TepXYtV61Z3s",
  authDomain: "medinaja-final-db.firebaseapp.com",
  projectId: "medinaja-final-db",
  storageBucket: "medinaja-final-db.firebasestorage.app",
  messagingSenderId: "1067360956672",
  appId: "1:1067360956672:web:a12a8268bf0c5802b603e5",
  measurementId: "G-RMTXW48G65"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);