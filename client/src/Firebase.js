// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChDUAfRNfHrmOoSSJ_lq1ey4_0TRuRxnw",
  authDomain: "coupon-code-e9565.firebaseapp.com",
  projectId: "coupon-code-e9565",
  storageBucket: "coupon-code-e9565.appspot.com",
  messagingSenderId: "976945416284",
  appId: "1:976945416284:web:26cbb95aac56ef2e3c3e99"
};

// Initialize Firebase
try {
  const app = initializeApp(firebaseConfig);
  console.log("Firebase initialized successfully:", app);
} catch (error) {
  console.error("Error initializing Firebase:", error);
}
export const app = initializeApp(firebaseConfig);