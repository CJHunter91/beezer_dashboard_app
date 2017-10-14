import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

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

ReactDOM.render(<App db={database} />, document.getElementById('root'));
registerServiceWorker();
