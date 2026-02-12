import React,{useState,useEffect} from "react";
import axios from "axios";
//import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders,setAllOrders]=useState([]);
  useEffect(()=>{
    axios.get("http://backend:3002/orders",{withCredentials:true}).then((res)=>{
      setAllOrders(res.data);
    })
  },[])
  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((stock, index) => {
              return (
                <tr key={index} >
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{stock.mode}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Orders;
