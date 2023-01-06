import React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          {/* <h1>Categories</h1> */}
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          {/* <h1>Links</h1> */}
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          {/* <h1>About</h1> */}
          <span>
            Our mission is simple: We seek the truth and help people understand
            the world. This mission is rooted in our belief that great
            journalism has the power to make each reader’s life richer and more
            fulfilling, and all of society stronger and more just.
          </span>
        </div>
        <div className="item">
          {/* <h1>Our Strategy</h1> */}
          <span>
            Our vision is to become the essential subscription for every
            curious, English-speaking person seeking to understand and engage
            with the world.
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
        <div className="left">
          <span className="logo">Oberlo</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
};
