import { useState } from "react";
import logo from "../../assets/logo.png";
import "./header.css";

const Header = () => {
  // const [btnName, setBtnName] = useState("Login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleOnBtnClick = () => {
    // setBtnName("Logout")
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li className="home">
            <i class="fa-solid fa-house"></i> Home
          </li>
          <li className="about-us">
            <i class="fa-solid fa-people-carry-box"></i> About Us
          </li>
          <li className="cart">
            <i class="fa-solid fa-cart-shopping"></i> Cart
          </li>
          <li className="account">
            <button className="login" onClick={handleOnBtnClick}>
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
