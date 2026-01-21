// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

// Yung Firebase config mo
const firebaseConfig = {
  apiKey: "AIzaSyCabUfsT9UuxfnU8g6NdUSjLtmWBBFBk",
  authDomain: "clinic-2f648.firebaseapp.com",
  projectId: "clinic-2f648",
  storageBucket: "clinic-2f648.appspot.com",
  messagingSenderId: "82924358807",
  appId: "1:82924358807:web:95b9608bb049e4baa4edd2",
  measurementId: "G-RZPJQTMY5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Export para magamit sa ibang files
export { app, auth, db };
