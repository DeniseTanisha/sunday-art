import * as firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyA9yxaqTWq8-H9ECwiQzVBA5dTIadpBUS0",
  authDomain: "sunday-art.firebaseapp.com",
  databaseURL: "https://sunday-art.firebaseio.com",
  projectId: "sunday-art",
  storageBucket: "",
  messagingSenderId: "386199832943",
  appId: "1:386199832943:web:f1094fe810901906"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
