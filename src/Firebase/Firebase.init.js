import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;

/* 
Steps for authentication:

-----------###-----------

Initial Setup 
1. firebase: create project
2. create web app
3. get configuration
4. 



*/
