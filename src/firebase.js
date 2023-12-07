
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAOY_w2mqio3YfuyADEvV5Gc-s2J3O3jkk",
  authDomain: "lb-m294.firebaseapp.com",
  projectId: "lb-m294",
  storageBucket: "lb-m294.appspot.com",
  messagingSenderId: "895777589480",
  appId: "1:895777589480:web:18174fcdc8c5577cb5615d",
  measurementId: "G-2PB5WHQH4K"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);