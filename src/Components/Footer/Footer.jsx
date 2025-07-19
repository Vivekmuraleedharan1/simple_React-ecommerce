import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='footer'>

      <div className="footer-content container">
        <div className="footer-logo">
          <h2>Shopify</h2>
          <p>Your one-stop shop for everything!</p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shopify. All rights reserved.</p>
      </div>
       
    </footer>
  )
}

export default Footer