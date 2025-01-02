// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";
import Diocese from "./pages/Diocese";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Parish from "./pages/Parish";
import { useAuth0 } from "@auth0/auth0-react";
import DiocesePage from "./pages/dioceses/DiocesePage";
import ParishesPage from "./pages/parishes/ParishesPage";
import Login from "./pages/Login";

function App() {
  const { isLoading, error, logout } = useAuth0();

  if (error) {
    return (
      <div>
        Oops... {error.message} <button onClick={() => logout()}>Logout</button>
      </div>
    );
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dioceses" element={<Diocese />} />
          <Route path="/dioceses/:dioceseId" element={<DiocesePage />} />
          <Route path="/parish" element={<Parish />} />
          <Route path="/parish/:parishId" element={<ParishesPage />} />

          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />

          {/* Add more routes as needed */}
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
