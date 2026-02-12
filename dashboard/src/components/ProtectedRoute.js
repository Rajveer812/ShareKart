import React from "react";
import { useCookies } from "react-cookie";
import LoginFirst from "./LoginFirst";

const ProtectedRoute = ({ children }) => {
  const [cookies] = useCookies(["token"]);
  const isLoggedIn = Boolean(cookies.token);

  if (!isLoggedIn) {
    return <LoginFirst />;
  }

  return children;
};

export default ProtectedRoute;
