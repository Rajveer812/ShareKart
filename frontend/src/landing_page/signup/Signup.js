import React, { useState } from "react";
import axios from "axios";
import './SignupPopup.css';
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
const Signup = ({ isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  if (!isOpen) return null;

 const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  
   const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post("http://backend:3002/api/signup", {
         ...inputValue,
        },
        {withCredentials: true}
        );
         const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          if (onClose) onClose();
          if (typeof window !== 'undefined') window.location.href = "/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            required
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            required
            onChange={handleChange}
          />

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
          <span>
            Already have an Account? <Link to="/login">Login</Link>
          </span>
        </form>
         <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;