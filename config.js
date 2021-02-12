import * as firebase from 'firebase';
require("@firebase/firestore");

 var firebaseConfig = {
    apiKey: "AIzaSyAXZoh9qtJnE9YwAW9qX-wctGf8loRxf6k",
    authDomain: "firestoredb-940e5.firebaseapp.com",
    projectId: "firestoredb-940e5",
    storageBucket: "firestoredb-940e5.appspot.com",
    messagingSenderId: "349912945445",
    appId: "1:349912945445:web:e6a8d866d502ad4e77c0cc"
  };

// Initialize Firebase
//if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
//}

export default firebase.firestore()