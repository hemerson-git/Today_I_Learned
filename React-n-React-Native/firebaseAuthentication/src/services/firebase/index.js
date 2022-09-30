import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCDWWBT-C58bH0Cj5cxR9NKJ-LNqgwKc9M',
  authDomain: 'configuracaofirebasereac-c3352.firebaseapp.com',
  databaseURL: 'https://configuracaofirebasereac-c3352.firebaseio.com',
  projectId: 'configuracaofirebasereac-c3352',
  storageBucket: 'configuracaofirebasereac-c3352.appspot.com',
  messagingSenderId: '302887215702',
  appId: '1:302887215702:web:22a78e81a71b74dd0911f7',
  measurementId: 'G-JHBYYQP0ZY',
};
// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
