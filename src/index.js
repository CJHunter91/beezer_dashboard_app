import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCowc3qO-CUJwlL5Lo2R6Uk6kWFVcmrfHY",
  authDomain: "beezer-test-cjhunter.firebaseapp.com",
  databaseURL: "https://beezer-test-cjhunter.firebaseio.com",
  projectId: "beezer-test-cjhunter",
  storageBucket: "beezer-test-cjhunter.appspot.com",
  messagingSenderId: "1085348013195"
};

firebase.initializeApp(config);

var database = firebase.database();

firebase.database().ref('accounts/').once('value').then(function(snapshot) {
  console.log(snapshot.val())
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
