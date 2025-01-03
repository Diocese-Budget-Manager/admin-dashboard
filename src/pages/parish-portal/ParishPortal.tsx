import { NavLink, Outlet } from "react-router-dom";

export default function ParishPortal() {
  return (
    <div>
      <ul className="ml-64 flex ">
        <li>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 p-3  transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`
            }
            to="/portal"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 p-3  transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`
            }
            to="/portal/contributions"
          >
            Contributions
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 p-3  transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`
            }
            to="/portal/settings"
          >
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 p-3  transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`
            }
            to="/portal/profile"
          >
            Profile
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
