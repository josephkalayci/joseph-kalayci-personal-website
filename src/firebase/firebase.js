import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyB0-A2tnnzthBK7oYJYKgxlZRTIjoNoF08',
  authDomain: 'joseph-kalayci-personal-page.firebaseapp.com',
  projectId: 'joseph-kalayci-personal-page',
});

export default firebase.firestore();
