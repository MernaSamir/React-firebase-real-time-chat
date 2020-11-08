import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";
import { Provider } from "react-redux";
import store from "./store";
var firebaseConfig = {
  apiKey: "AIzaSyCadJ1Erl0VuswmMnW6Ti5w1xeV4GEucyc",
  authDomain: "web-messenger-ec328.firebaseapp.com",
  databaseURL: "https://web-messenger-ec328.firebaseio.com",
  projectId: "web-messenger-ec328",
  storageBucket: "web-messenger-ec328.appspot.com",
  messagingSenderId: "395393561186",
  appId: "1:395393561186:web:3a912e3a571eea9ce0d73b",
  measurementId: "G-YYG4LQ1ECH",
};
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
