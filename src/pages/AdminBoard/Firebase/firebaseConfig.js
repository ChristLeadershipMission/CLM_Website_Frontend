// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC51jI0UfqFsXD09xNGBmTSd_vCGwsCpF8",
  authDomain: "clm-worldwide.firebaseapp.com",
  projectId: "clm-worldwide",
  storageBucket: "clm-worldwide.appspot.com",
  messagingSenderId: "758436513435",
  appId: "1:758436513435:web:6f50ee331c89e98e0d683e",
  measurementId: "G-RXNL1027SK"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage; 