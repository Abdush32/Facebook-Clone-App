import firebase from "firebase"
const firebaseApp = firebase.initializeApp ({
//ENTER YOUR FIREBASE CONFIG
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage()
  export {db, auth, storage,provider} ;