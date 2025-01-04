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
import Contributions from "./pages/Contributions";
import ParishPortal from "./pages/parish-portal/ParishPortal";
import ParishDashboard from "./pages/parish-portal/ParishDashboard";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { isLoading, error, logout } = useAuth0();
  const { isAuthenticated } = useAuth();

  if (error) {
    return (
      <div>
        Oops... {error.message} <button onClick={() => logout()}>Logout</button>
      </div>
    );
  }
  if (!isAuthenticated) {
    return <Login />;
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

          <Route path="/contributions" element={<Contributions />} />

          {/* Parish portal */}
          <Route path="portal" element={<ParishPortal />}>
            <Route index element={<ParishDashboard />} />
            <Route path="profile" element={<div>Profile</div>} />
            <Route path="contributions" element={<Contributions />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* Add more routes as needed */}
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

          {/* Page not found */}
          <Route path="*" element={<div>404 Page not found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
