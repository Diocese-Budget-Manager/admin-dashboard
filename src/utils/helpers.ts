import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} from "./constants";

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
