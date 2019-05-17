import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/database';

export default function setup() {
    var config = {
        apiKey: "AIzaSyAnflZSfup6UGij9gFvsXNMktV-lZznAbI",
        authDomain: "homepage-ac850.firebaseapp.com",
        databaseURL: "https://homepage-ac850.firebaseio.com",
        projectId: "homepage-ac850",
        storageBucket: "homepage-ac850.appspot.com",
        messagingSenderId: "883875879005"
    };
    firebase.initializeApp(config);
}