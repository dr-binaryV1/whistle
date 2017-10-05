import firebase from 'firebase';

export const initFirebase = () => {
  const config = {
    apiKey: "AIzaSyCkLPT51CS6ofFOVTXLmvKuM2BH_QhP8ak",
    authDomain: "whistle-1ab07.firebaseapp.com",
    databaseURL: "https://whistle-1ab07.firebaseio.com",
    projectId: "whistle-1ab07",
    storageBucket: "whistle-1ab07.appspot.com",
    messagingSenderId: "972094348081"
  };

  firebase.initializeApp(config);
}

export const createUserWithEmailandPassword = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(res => console.log(res))
  .catch(err => console.log(err));
}