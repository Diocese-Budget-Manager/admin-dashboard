import React from "react";

const AuthContext = React.createContext({
  user: null,
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => {},
});
export default AuthContext;
// Compare this snippet from AdminDashboard/src/provider/context/AuthContext.tsx: