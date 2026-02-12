import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Signup from "./signup/Signup";
import { useCookies } from "react-cookie";
import axios from "axios";


function Navbar() {
  const [showSignup, setShowSignup] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const isLoggedIn = Boolean(cookies.token);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsername = async () => {
      if (isLoggedIn) {
        try {
          const { data } = await axios.post(
            "http://backend:3002/api/verify",
            {},
            { withCredentials: true }
          );
          if (data.status && data.user) {
            setUsername(data.user);
          } else {
            setUsername("");
          }
        } catch {
          setUsername("");
        }
      } else {
        setUsername("");
      }
    };
    fetchUsername();
  }, [isLoggedIn, cookies.token]);

  const handleOpenSignup = () => setShowSignup(true);
  const handleCloseSignup = () => setShowSignup(false);

  const handleLogout = () => {
    removeCookie("token");
    setUsername("");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-white">
      <div className="container-fluid px-5">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="" role="search">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {!isLoggedIn && (
                <li className="nav-item">
                  <button
                    id="signupbtn"
                    className="nav-link active btn btn-link"
                    style={{ textDecoration: "none" }}
                    aria-current="page"
                    type="button"
                    onClick={handleOpenSignup}>
                    Signup
                  </button>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <button
                    id="logoutbtn"
                    className="nav-link active btn btn-link"
                    style={{ textDecoration: "none" }}
                    aria-current="page"
                    type="button"
                    onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Prodcut
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
      {!isLoggedIn && <Signup isOpen={showSignup} onClose={handleCloseSignup} />}
      {isLoggedIn && username && (
        <div style={{ position: "absolute", right: 30, top: 15, fontWeight: "bold" }}>
          {username}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
