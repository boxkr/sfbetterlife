import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAk5_RWRjrSEEKUP3GDilnTjnCq8-jflWA",
    authDomain: "sfbetterlife-7dd96.firebaseapp.com",
    projectId: "sfbetterlife-7dd96",
    storageBucket: "sfbetterlife-7dd96.appspot.com",
    messagingSenderId: "87144507301",
    appId: "1:87144507301:web:bfeff784b979dedb2aaa4c"
};

let app;
if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app = firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();

//const analytics = getAnalytics(app);

export {auth};
export {firestore}
