import firebaseConfig from "./Firebase.config";
import { initializeApp } from "firebase/app";

const authInit = ()=> {

     initializeApp(firebaseConfig);
}

export default authInit;