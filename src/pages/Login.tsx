import React, { useState } from "react";

import {LogIn } from "lucide-react";
import { login } from "../utils/api";
import { Switch } from "@headlessui/react";

export default function Login() {
  const [togglePortal, setTogglePortal] = useState(false);
  const [redirectPortal, setRedirectPortal] = useState("/");

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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    await login(email, password).then((res) => {
      window.location.href = redirectPortal;
      console.log(res);
    });
  };
  return (
    <div className="ml-64 p-6  mx-auto">
      <form
        className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 max-w-full"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
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
            required
          />
        </div>
        <div className="mt-8">
          <button type="submit" className="btn flex">
            <LogIn /> &nbsp; Login
          </button>
        </div>
      </form>
    </div>
  );
}
