import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBdGOklIeofBXjd2Jg_mAG9gEz0SPxBZsI",
  authDomain: "catch-of-the-day-nate-cs.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-nate-cs.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
