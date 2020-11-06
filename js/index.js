const firebaseConfig = {
    apiKey: "AIzaSyCrMca0BWSn2dTKuLLxsI5gfcWtHdqS8nE",
    authDomain: "back-hotel.firebaseapp.com",
    databaseURL: "https://back-hotel.firebaseio.com",
    projectId: "back-hotel",
    storageBucket: "back-hotel.appspot.com",
    messagingSenderId: "618171206588",
    appId: "1:618171206588:web:53d4f9d172b63311fc39b9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();