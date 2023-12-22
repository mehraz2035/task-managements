// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdhsBEpmt8n6jrV1gxI0nsFhDIl0XDP_s",
  authDomain: "task-management-e3405.firebaseapp.com",
  projectId: "task-management-e3405",
  storageBucket: "task-management-e3405.appspot.com",
  messagingSenderId: "985708706179",
  appId: "1:985708706179:web:0f8d3dceebf7f6b5ccdeb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
