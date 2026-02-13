import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Signup from "./signup/Signup";
import Login from "./login/Login";
import { useCookies } from "react-cookie";
import axios from "axios";

const Menu = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const isLoggedIn = Boolean(cookies.token);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [isProfileDropdownOpen, setisProfileDropdownOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(0);

  useEffect(() => {
    const fetchUsername = async () => {
      if (isLoggedIn) {
        try {
          const { data } = await axios.post(
            "http://51.20.114.111:3002/api/verify",
            {},
            { withCredentials: true }
          );
          if (data.status && data.user) {
            setUsername(data.user.username);
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

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  // Profile dropdown logic
  const handleProfileDropdown = () => {
    setisProfileDropdownOpen((open) => !open);
  };
  const handleOpenSignup = () => setShowSignup(true);

  const handleLogout = () => {
    removeCookie("token");
    setUsername("");
    navigate("/");
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="Logo" />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div
          className="profile"
          onClick={handleProfileDropdown}
          style={{ position: "relative", cursor: "pointer" }}
        >
          <div className="avatar">
            {isLoggedIn ? (username ? username[0].toUpperCase() : "U") : "U"}
          </div>
          <p className="username">{isLoggedIn ? username || "User" : "USER"}</p>
          {isProfileDropdownOpen && (
            <div
              className="profile-dropdown"
              style={{
                position: "absolute",
                right: 0,
                top: "100%",
                background: "white",
                border: "1px solid #ccc",
                borderRadius: "8px",
                zIndex: 100,
                minWidth: "120px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
                  {!isLoggedIn ? (
                    <>
                      <button
                        style={{
                          width: "100%",
                          padding: "8px",
                          border: "none",
                          background: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setShowLogin(true);
                          setShowSignup(false);
                        }}
                      >
                        Login
                      </button>

                      <button
                        style={{
                          width: "100%",
                          padding: "8px",
                          border: "none",
                          background: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setShowSignup(true);
                          setShowLogin(false);
                        }}
                      >
                        Signup
                      </button>
                    </>
                  ) : (
                <button
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleLogout();
                    removeCookie("token");
                    setUsername("");
                    setisProfileDropdownOpen(false);
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              )}
            </div>
          )}
        </div>
        {/* Login Popup */}
        {!isLoggedIn && showLogin && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 200,
              background: "rgba(0,0,0,0.4)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Login
                onClose={() => {
                  setShowLogin(false);
                  setisProfileDropdownOpen(false);
                }}
                setCookie={setCookie}
              />
            </div>
          </div>
        )}
        {/* Signup Popup */}
        {!isLoggedIn && showSignup && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 200,
              background: "rgba(0,0,0,0.4)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Signup
                isOpen={true}
                onClose={() => {
                  setShowSignup(false);
                  setisProfileDropdownOpen(false);
                }}
                setCookie={setCookie}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;


