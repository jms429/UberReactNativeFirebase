import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDYL628wIOXqY79VVTUAoBIj5ZmI1_Xatw",
    authDomain: "ubercloneeats.firebaseapp.com",
    projectId: "ubercloneeats",
    storageBucket: "ubercloneeats.appspot.com",
    messagingSenderId: "951845617588",
    appId: "1:951845617588:web:3162b4eaf0460022f83ce1"
  };

  //if firebase app is not initialized, initialize it
  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  export default firebase;