import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4na1n0QkLXNMjKh9p1IqCJ8u7bsxrtdo",
  authDomain: "coderhouse-ecommerce-24137.firebaseapp.com",
  projectId: "coderhouse-ecommerce-24137",
  storageBucket: "coderhouse-ecommerce-24137.firebasestorage.app",
  messagingSenderId: "1046290992629",
  appId: "1:1046290992629:web:c30f89848773df7d7824bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
