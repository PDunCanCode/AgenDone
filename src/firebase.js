import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initiallizeapp({
    apiKey: "AIzaSyA0G4j_s1xwQPOf9_W9mr1OT6HAxW0olZs",
    authDomain: "agendone-664b0.firebaseapp.com",
    databaseURL: "https://agendone-664b0.firebaseio.com",
    projectId: "agendone-664b0",
    storageBucket: "agendone-664b0.appspot.com",
    messagingSenderId: "400399745461",
    appId: "1:400399745461:web:d8c090672858520b8859fc"
});

export { firebaseConfig as firebase };