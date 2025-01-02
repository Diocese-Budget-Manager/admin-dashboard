import { useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    localStorage.removeItem("token");
    window.location.href = "http://localhost:5173/";
    // eslint-disable-next-line
  }, []);
  return (
    <div className="flex items-center justify-center h-screen flex-1">
      Logging out ...
    </div>
  );
}
