import { useState, useEffect, useContext } from "react";
import Logo from "../../assets/logo.png";
import "./header.css";
import { Link } from "react-router-dom";
import MobileNav from "./mobile-nav/MobileNav";
import UserContext from "../../context/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // const [btnName, setBtnName] = useState("Login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [mobileNavbar, setMobileNavbar] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);

  const { loggedInUser, setUserInfo } = useContext(UserContext);

  const handleOnClick = () => {
    setMobileNavbar(!mobileNavbar);
  };

  const handleOnScroll = () => {
    if (window.scrollY > 4) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleOnScroll);

  useEffect(() => {}, [isLoggedIn]);

  const handleOnBtnClick = () => {
    // setBtnName("Logout")
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <div className={`header ${sticky ? "sticky-nav" : ""}`}>
        <div className="logo" data-testid="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <div>
          <label htmlFor="" className="p-3">
            User
          </label>
          <input
            type="text"
            className="text-black"
            value={loggedInUser}
            onChange={(e) => setUserInfo(e.target.value)}
          />
        </div>

        <div className="right-menu">
          <div className="nav-links">
            <ul>
              <li className="contact">
                <Link to="/grocery">
                  <i class="fa-solid fa-paper-plane"></i> Grocery
                </Link>
              </li>
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
              <li className="cart" data-testid="cart">
                <Link to="/cart">
                  <i class="fa-solid fa-cart-shopping"></i> Cart
                  <span>{cartItems.length}</span>
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
                      <i class="fa-solid fa-right-to-bracket"></i>{" "}
                      {loggedInUser}
                    </>
                  )}
                </button>
              </li>
            </ul>
          </div>

          <div className="hamburger-menu">
            <i
              title="menu"
              className="fa-solid fa-bars burger-menu"
              onClick={() => handleOnClick()}
            ></i>
          </div>
        </div>
      </div>
      <MobileNav mobileNavbar={mobileNavbar} handleOnClick={handleOnClick} />
    </>
  );
};

export default Header;
