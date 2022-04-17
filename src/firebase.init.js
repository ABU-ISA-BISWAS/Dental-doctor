// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKbskVYTre-HH8QgWxVoB2pSw3aKx912U",
  authDomain: "dental-services-a744c.firebaseapp.com",
  projectId: "dental-services-a744c",
  storageBucket: "dental-services-a744c.appspot.com",
  messagingSenderId: "223744222404",
  appId: "1:223744222404:web:c31d7838cf2e0950925591"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;