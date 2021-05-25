import firebase from './firebase';

var db = firebase.firestore().collection('products');

export default db;
