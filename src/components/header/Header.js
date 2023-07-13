import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  // const [btnName, setBtnName] = useState("Login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {}, [isLoggedIn]);

  const handleOnBtnClick = () => {
    // setBtnName("Logout")
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="nav-links">
        <ul>
          <li className="about-us">
            <Link to="/about">
              <i class="fa-solid fa-people-carry-box"></i> About Us
            </Link>
          </li>
          <li className="contact">
            <Link to="/contact">
              <i class="fa-solid fa-paper-plane"></i> Contact Us
            </Link>
          </li>
          <li className="cart">
            <Link to="cart">
              <i class="fa-solid fa-cart-shopping"></i> Cart
            </Link>
          </li>

          <li className="account">
            <button className="login-logout" onClick={handleOnBtnClick}>
              {isLoggedIn ? (
                <>
                  <i class="fa-solid fa-user-large"></i> Logout
                </>
              ) : (
                <>
                  <i class="fa-solid fa-right-to-bracket"></i> Login
                </>
              )}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
