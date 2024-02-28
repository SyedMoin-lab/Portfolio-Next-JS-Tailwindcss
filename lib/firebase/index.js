import 'firebase/analytics';
import firebase from 'firebase/app';
import firebaseConfig from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const { analytics } = firebase;

export default firebase;