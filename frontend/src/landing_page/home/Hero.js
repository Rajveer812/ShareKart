import React from "react";
import { useCookies } from "react-cookie";
function Hero() {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const isLoggedIn = Boolean(cookies.token);
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5 ">Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds.</p>
        {!isLoggedIn && (
          <button
            style={{ width: "20%", margin: "0 auto" }}
            className="btn btn-primary p-3 fs-5 mb-5"
          >
            Sign Up
          </button>
        )}
      </div>
    </div>
  );
}

export default Hero;
