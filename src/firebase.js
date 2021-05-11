import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAtWk6bkq-e1F3YgpUU0S_07JyJFiRvhJQ",
  authDomain: "golf-app-williams.firebaseapp.com",
  databaseURL: "https://golf-app-williams-default-rtdb.firebaseio.com",
  projectId: "golf-app-williams",
  storageBucket: "golf-app-williams.appspot.com",
  messagingSenderId: "952241544668",
  appId: "1:952241544668:web:d1da4f825994accbf14319",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
