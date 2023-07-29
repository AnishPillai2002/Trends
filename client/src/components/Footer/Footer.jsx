import React from 'react'
// importing css
import "./Footer.scss"
const Footer = () => {
  return (
    <div className="footer">

      <div className="top">

        <div className="item">
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Kids</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>

        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
          

        

        <div className="item">
          <h1>About</h1>
          <span>
          Welcome to Trends Online Fashion Store! Discover the latest in style 
          and sophistication with our curated collection of trendy apparel and 
          accessories. From chic essentials to statement pieces, we cater to 
          fashion-forward individuals seeking top-notch quality and unbeatable prices. 
          </span>
        </div>

        <div className="item">
          <h1>Contacts</h1>
          <span>
          Feel free to reach out to us for any inquiries or assistance. 
          We're here to make your dreams come true with our cutting-edge 
          technology solutions!
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo">Trends</span>
          <span className="copyright">© Copyright 2023. All Rights Reserved</span>
        </div>
        
        <div className="right">
          <img src="./img/payment.png"/>

        </div>

      </div>
    </div>
  )
}

export default Footer