import { useState } from "react";
import Login from "./login/Login";
import { useCookies } from "react-cookie";

const LoginFirst = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [cookies, setCookie] = useCookies(["token"]);
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <h2>Please login to continue</h2>
        <p>You need to be logged in to view this page.</p>

        <button
          style={{ padding: "8px", cursor: "pointer" }}
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>
      </div>

      {/* LOGIN POPUP */}
      {showLogin && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.4)",
            zIndex: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Login 
          setCookie={setCookie}
          onClose={() => setShowLogin(false)} />
        </div>
      )}
    </>
  );
};

export default LoginFirst;
