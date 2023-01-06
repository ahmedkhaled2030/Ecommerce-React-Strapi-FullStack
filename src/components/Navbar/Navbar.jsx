import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [toggle, setToggle] = useState("nav-menu");
  const [toggleIcon, setToggleIcon] = useState("nav-toggler");

  const navToggle = () => {
    toggle === "nav-menu"
      ? setToggle("nav-menu nav-active")
      : setToggle("nav-menu");

    toggleIcon === "nav-toggler"
      ? setToggleIcon("nav-toggler toggle")
      : setToggleIcon("nav-toggler");
  };

  const navbarColor = () => {
    if (window.scrollY >= 392) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  window.addEventListener("scroll", navbarColor);

  const products = useSelector((state) => state.cart.products);
  return (
    <div className={fixed ? "navbar fixed" : "navbar"}>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            Oberlo
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Vision
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>

        <div></div>
      </div>

      <div className="mobile">
        <div className="left">
          <div className={toggleIcon} onClick={navToggle}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <div className="logo">
            <Link className="link" to="/">
              Oberlo
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="icons">
            <SearchIcon className="icon" />
            <FavoriteBorderOutlinedIcon className="icon" />
            <PersonOutlineOutlinedIcon className="icon" />

            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon className="icon" />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={toggle}>
        <div className="item">
          <Link className="link" to="/products/1">
            Women
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/1">
            Kids
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/1">
            Men
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/1">
            Beauty
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/1">
            Sports
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/1">
            About Us
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/1">
            Contact Us
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/1">
            Our Policy
          </Link>
        </div>
      </div>

      {open && <Cart />}
    </div>
  );
};

export default Navbar;
