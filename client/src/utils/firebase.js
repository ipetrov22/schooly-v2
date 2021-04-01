import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD5RvgaKl7zerzMYeWRrvRaYwW8iPlQsmA",
    authDomain: "schooly-v2.firebaseapp.com",
    projectId: "schooly-v2",
    storageBucket: "schooly-v2.appspot.com",
    messagingSenderId: "50682381008",
    appId: "1:50682381008:web:aa2b3f61b1bbfc3f6a94d5"
};

firebase.initializeApp(firebaseConfig);
export default firebase;