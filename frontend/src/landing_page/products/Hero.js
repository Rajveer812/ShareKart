import React from "react";
function Hero() {
  return (
    <div className="container  border-bottom mb-5">
      <div className="row text-center mt-5 p-5">
        <h1>Zerodha Products</h1>
        <h3 className="text-muted mt-3 fs-4">Sleek, modern, and intuitive trading platforms</h3>
        <p className="mt-2 mb-5">
          Check out our{" "}
          <a href="" className="mx-5" style={{ textDecoration: "none" }}>
            {" "}
            investment offerings{" "}
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
