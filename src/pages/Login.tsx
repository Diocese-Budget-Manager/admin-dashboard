import React, { useState, useContext } from "react";

import { LogIn } from "lucide-react";
import { login } from "../utils/api";
import { Switch } from "@headlessui/react";
import AuthContext from "../provider/context/AuthContext";

export default function Login() {
  const [togglePortal, setTogglePortal] = useState(false);
  const [redirectPortal, setRedirectPortal] = useState("/");
  const { setIsAuthenticated } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const portalButton = () => {
    if (togglePortal) {
      return (
        <button
          type="button"
          className="rounded-md bg-blue-500 text-white px-4 py-2"
          onClick={(e) => {
            e.preventDefault();
            setRedirectPortal("/?user=diocese");
            setTogglePortal(false);
          }}
        >
          Switch to Diocese Portal <Switch />
        </button>
      );
    }
    return (
      <button
        type="button"
        className="rounded-md bg-blue-500 text-white px-4 py-2"
        onClick={(e) => {
          e.preventDefault();
          setTogglePortal(true);
          setRedirectPortal("/portal?user=res");
        }}
      >
        {" "}
        Switch to Parish Portal
      </button>
    );
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = formData.email as string;
    const password = formData.password as string;
    await login(email, password).then((res) => {
      if (!res.error) {
        setIsAuthenticated(true);
        window.location.href = redirectPortal;
      }
    });
  };
  return (
    <div className="ml-64 p-6  mx-auto">
      <form
        className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 max-w-full"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold">Login</h1>
        {portalButton()}
        <div className="my-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            className="shadow form-input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="my-4 ">
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            className="shadow form-input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className="btn flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            <LogIn /> &nbsp; Login
          </button>
        </div>
      </form>
    </div>
  );
}
