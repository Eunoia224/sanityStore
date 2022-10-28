import React from 'react'
import {AiFillInstagram, AiOutlineTwitter} from "react-icons/ai"

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <p>© {year} Alpha Electronics All rights reserved.</p>
      <p className="icons">
        <AiFillInstagram/>
        <AiOutlineTwitter/>
      </p>
    </div>
  );
}

export default Footer