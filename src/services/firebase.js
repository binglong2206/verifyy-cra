import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
};

if (!firebase.apps.length) {
  try {
    firebase.initializeApp(firebaseConfig);
  } catch (err) {
    throw new Error(err)
  }
}
const firebaseSDK = firebase;
export default firebaseSDK;