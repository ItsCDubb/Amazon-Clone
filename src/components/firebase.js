import firebase from "firebase";

const firebaseAPP = firebase.initializeApp({
  apiKey: "AIzaSyBrnVTQmSOQlQr2Rr6hbaXI7XAQV2rHhus",
  authDomain: "clone-ce73b.firebaseapp.com",
  databaseURL: "https://clone-ce73b.firebaseio.com",
  projectId: "clone-ce73b",
  storageBucket: "clone-ce73b.appspot.com",
  messagingSenderId: "406223985530",
  appId: "1:406223985530:web:7e4c2680b534639f7cd4c3",
  measurementId: "G-LFQ5T85LYY",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
