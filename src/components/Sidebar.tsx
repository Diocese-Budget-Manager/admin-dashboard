// import React from 'react';
import { NavLink } from "react-router-dom";
import {
  Home,
  ChurchIcon,
  BarChart3,
  Upload,
  Settings,
  LogOut,
  LogInIcon,
  ChevronDown,
  Building2,
} from "lucide-react";

// import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

import { logOut } from "../utils/api";

const Sidebar = () => {
  // const { logout, loginWithRedirect } = useAuth0();
  const isLoggedIn = localStorage.getItem("token");

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [showChildren, setShowChildren] = useState(false);

  const handleNavClick = () => {
    setShowChildren((prev) => !prev);
  };
  useEffect(() => {
    console.log("Auth status: ", isAuthenticated);
  }, [isAuthenticated]);

  const loginButton = () => {
    setButtonClicked(true);
  };

  useEffect(() => {
    const handleLogin = async () => {
      window.location.href = "/login";
    };
    if (buttonClicked) {
      handleLogin().then(() => {
        setButtonClicked(false);
      });
    }
    if (isLoggedIn) {
      setIsAuthenticated(true);
    }
  }, [buttonClicked, isLoggedIn]);

  const handleLogout = () => {
    logOut().finally(() => {
      setIsAuthenticated(false);
      window.location.href = "/";
    });
  };

  const navItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    {
      icon: ChurchIcon,
      label: "Dioceses",
      path: "/dioceses",
      children: [{ path: "/parish", label: "Parishes", icon: Building2 }],
    },
    { icon: BarChart3, label: "Analytics", path: "/analytics" },
    { icon: Upload, label: "Contributions", path: "/contributions" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  // const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  // const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  // const audience = import.meta.env.VITE_AUTH0_AUDIENCE;
  // const callbackURL = `http://localhost:5173`;

  // const loginPath = `https://${domain}/authorize?audience=${audience}&response_type=token&client_id=${clientId}&redirect_uri=${callbackURL}`;

  // if (!isAuthenticated) {
  //   return <div></div>;
  // }

  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-4 fixed left-0 top-0">
      <div className="flex items-center gap-2 mb-8">
        <ChurchIcon className="h-8 w-8" />
        <h1 className="text-xl font-bold">Diocese Admin</h1>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <div key={item.path}>
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>{" "}
              {item.children && (
                <button onClick={handleNavClick}>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      showChildren ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}
            </NavLink>
            {showChildren &&
              item.children?.map((child) => (
                <div className="ml-4 mt-2 space-y-2" key={child.path}>
                  <NavLink
                    to={child.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-3 rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-gray-300 hover:bg-gray-800"
                      }`
                    }
                  >
                    <child.icon />
                    <span>{child.label}</span>
                  </NavLink>
                </div>
              ))}
          </div>
        ))}
      </nav>

      {isAuthenticated ? (
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 p-3 text-gray-300 hover:bg-gray-800 rounded-lg mt-auto absolute bottom-4 w-[calc(100%-2rem)]"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      ) : (
        // <button
        //   onClick={() => loginButton()}
        //   className="flex items-center gap-3 p-3 text-gray-300 hover:bg-gray-800 rounded-lg mt-auto absolute bottom-4 w-[calc(100%-2rem)]"
        // >
        <NavLink
          to={"/login"}
          className="flex items-center gap-3 p-3 text-gray-300 hover:bg-gray-800 rounded-lg mt-auto absolute bottom-4 w-[calc(100%-2rem)]"
        >
          <LogInIcon className="h-5 w-5" />
          <span>Login</span>
        </NavLink>
        // </button>
      )}
    </div>
  );
};

export default Sidebar;
