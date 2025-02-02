import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.tsx";
import "./index.css";
import AuthProvider from "./provider/AuthProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN || ""}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID || ""}
      authorizationParams={{
        response_type: "token",
        redirect_uri: "http://localhost:5173",
      }}
    > */}
      <AuthProvider>
        <App />
      </AuthProvider>
      
    {/* </Auth0Provider> */}
  </StrictMode>,
);
