import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_drop_down from "../Assets/nav_dropdown.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  const closeMenu = () => {
    menuRef.current.classList.remove("nav-menu-visible");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>

      <img
        className="nav-drop-down"
        onClick={dropdown_toggle}
        src={nav_drop_down}
        alt="menu"
      />
      <ul className="nav-menu" ref={menuRef}>
        <li
          onClick={() => {
            setMenu("shop");
            closeMenu();
          }}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" && <hr />}
        </li>

        <li
          onClick={() => {
            setMenu("mens");
            closeMenu();
          }}
        >
          <Link to="/mens">Men</Link>
          {menu === "mens" && <hr />}
        </li>

        <li
          onClick={() => {
            setMenu("womens");
            closeMenu();
          }}
        >
          <Link to="/womens">Women</Link>
          {menu === "womens" && <hr />}
        </li>

        <li
          onClick={() => {
            setMenu("kids");
            closeMenu();
          }}
        >
          <Link to="/kids">Kids</Link>
          {menu === "kids" && <hr />}
        </li>

        <li className="nav-mobile-login" onClick={closeMenu}>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
