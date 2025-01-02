import { auth as firebase } from "./helpers";
import { signInWithEmailAndPassword } from "firebase/auth";
import { endpoint } from "./constants";

export const login = async (email: string, password: string) => {
  try {
    const user = await signInWithEmailAndPassword(firebase, email, password);
    user.user.getIdToken().then((token) => {
      localStorage.setItem("token", token);
      fetch(`${endpoint}/auth/login`, {
        method: "POST",
        body: JSON.stringify({ token }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        return response.json();
      });
    });
  } catch (error) {
    return error;
  }
};

export const logOut = async () => {
  try {
    await firebase.signOut().then(() => {
      localStorage.removeItem("token");
    });

    const response = await fetch(`${endpoint}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (error) {
    return error;
  }
};




