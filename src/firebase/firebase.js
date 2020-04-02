import * as firebase from 'firebase';
// const firebase = require('firebase');
// require('dotenv').config({path: '../../.env.development'});


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain:process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL:process.env.FIREBASE_DATABASEURL,
    projectId:process.env.FIREBASE_PROJECTID,
    storageBucket:process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId:process.env.FIREBASE_MESSAGINGSENDERID,
    appId:process.env.FIREBASE_APPID,
    measurementId:process.env.FIREBASE_MEASUREMENTID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};

// const calories = {
//     food: {
//         name: 'Momo',
//         serving: 2
//     },
//     calories: '125.24',
//     createdAt: 15243,
//     description: "During gathering!!"
// }

// database.ref().set({
//     calories
// });