import React from "react";

function Universe() {
  return (
    <div className="container mt-5 ">
      <div className="row text-center" >
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" style={{width:"80%"}}/>
          <p className=" text-muted" style={{fontSize:"0.9rem"}}>
            Our asset management venture
            <br />
            that is creating simple and transparent index
            <b />
            funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg"style={{width:"80%"}} />
          <p className=" text-muted" style={{fontSize:"0.9rem"}}>
            Options trading platform that lets you
            <br />
            create strategies, analyze positions, and examine
            <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" style={{width:"80%"}}/>
          <p className=" text-muted" style={{fontSize:"0.9rem"}}>
            Investment research platform
            <br />
            that offers detailed insights on stocks,
            <br />
            sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{width:"80%"}}/>
          <p className=" text-muted" style={{fontSize:"0.9rem"}}>
            Systematic trading platform
            <br />
            that allows you to create and backtest
            <b />
           strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" style={{width:"80%"}}/>
          <p className=" text-muted" style={{fontSize:"0.9rem"}}>
           Thematic investing platform 
            <br />
            that helps you invest in diversified
            <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/ditto.png" style={{width:"80%"}}/>
          <p className=" text-muted" style={{fontSize:"0.9rem"}}>
           Personalized advice on life
            <br />
            and health insurance. No spam
            <br />
            and no mis-selling.
          </p>
        </div>
        <button style={{width:"20%" , margin:"0 auto"}} className='btn btn-primary p-3 fs-5 mb-5' >Sign Up</button>
      </div>
    </div>
  );
}

export default Universe;
