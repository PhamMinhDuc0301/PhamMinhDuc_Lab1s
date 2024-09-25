import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAXbcwgk9aJgGONhLjFfBPpPjbnbH3pHS0",
  authDomain: "apppj-b1844.firebaseapp.com",
  projectId: "apppj-b1844",
  storageBucket: "apppj-b1844.appspot.com",
  messagingSenderId: "700651700284",
  appId: "1:700651700284:web:a74341b1e93aeaae700339",
  measurementId: "G-S31X0G1D4L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app); // Khởi tạo Firestore

// Export Firestore and other services
export { db, analytics };