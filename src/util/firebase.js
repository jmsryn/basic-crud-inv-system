import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyA9TzGawqscTCEHiGrGr0QRqMnWmjfBgVA',
  authDomain: 'inventory-a40cc.firebaseapp.com',
  projectId: 'inventory-a40cc',
  storageBucket: 'inventory-a40cc.appspot.com',
  messagingSenderId: '376275355614',
  appId: '1:376275355614:web:305742b7c4d1e9f04abf4f',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
