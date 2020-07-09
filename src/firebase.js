import * as firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyDdts4VQjDpVmuCqKNXtZhstjhiU_MQSt4",
    authDomain: "dsc-authentification-4af90.firebaseapp.com",
    databaseURL: "https://dsc-authentification-4af90.firebaseio.com",
    projectId: "dsc-authentification-4af90",
    storageBucket: "dsc-authentification-4af90.appspot.com",
    messagingSenderId: "1071730812821",
    appId: "1:1071730812821:web:e2eb9bc3a0a0247562789c",
    measurementId: "G-QMXVF28TBW"
  };;
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;