import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useStateContext } from "../context/StateContext";
import { runFireworks } from '../lib/utils';

const Success = () => {
  // we will be resetting our values thats why we brought them here
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
//   as soon as you land on this page everything resets
  useEffect(()=>{
    localStorage.clear()
    setCartItems([])    
    setTotalPrice(0)
    setTotalQuantities(0)
    runFireworks();

  }, [])

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2> Thank you for your order</h2>
        <p className="email-msg"> Check your email for receipt.</p>
        <p className="description">
          {" "}
          If you got questions, please contact us at {" "}
          <a className="email" href="mailto:michael.alazar@gmail.com">
             michael.alazar@gmail.com
          </a>
        </p>
        <Link href="/">
            <button type="button" width="300px" className="btn">
                Continue Shopping
            </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
