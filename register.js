// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCaDufTsgUIuxfnU8g6NdU5MjLtmWBBFBk",
    authDomain: "clinic-2f648.firebaseapp.com",
    projectId: "clinic-2f648",
    storageBucket: "clinic-2f648.firebasestorage.app",
    messagingSenderId: "82924358807",
    appId: "1:82924358807:web:95b9608bb049e4baa4edd2",
    measurementId: "G-RZPJQTYY5J"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);