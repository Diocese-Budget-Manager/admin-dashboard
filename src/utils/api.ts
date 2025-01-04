import { auth as firebase } from "./helpers";
import { signInWithEmailAndPassword } from "firebase/auth";
import { endpoint } from "./constants";

export const login = async (email: string, password: string) => {
  try {
    const user = await signInWithEmailAndPassword(firebase, email, password);
    const token = await user.user.getIdToken();
    localStorage.setItem("token", token);
    const res = await fetch(`${endpoint}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ token }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      return res.json();
    } else {
      throw new Error(`Error: `);
    }
  } catch (error) {
    return { error: error };
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
