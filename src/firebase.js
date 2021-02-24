import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAHsjnlLwSAOSghHJQTKQ-HJ9_DyReccX0",
  authDomain: "tinder-clone-b8f57.firebaseapp.com",
  databaseURL: "https://tinder-clone-b8f57.firebaseio.com",
  projectId: "tinder-clone-b8f57",
  storageBucket: "tinder-clone-b8f57.appspot.com",
  messagingSenderId: "677369305085",
  appId: "1:677369305085:web:e8ef60005d978a8297ab94",
  measurementId: "G-R002LFXR9X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
export default database;

//https://tinder-clone-b8f57.web.app/