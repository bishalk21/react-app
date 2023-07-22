import { useState, useEffect, useContext } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import MobileNav from "./mobile-nav/MobileNav";
import UserContext from "../../context/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
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
      <div
        className={`${
          sticky ? "h-28 !important bg-[#100f0f]" : ""
        } sticky z-20 top-0 w-full m-0 bg-[#100f0f] flex items-center justify-between text-white border-b border-solid border-lightgray`}
      >
        <div className="flex justify-center" data-testid="logo">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-32 rounded-3xl" />
          </Link>
        </div>

        <div className="lg:block hidden">
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

        <div className="flex items-center justify-between mr-6">
          <div className="nav-links">
            <ul className=".nav-links flex items-center justify-between">
              <li className="hidden lg:block">
                <Link to="/grocery">
                  <i class="fa-solid fa-paper-plane"></i> Grocery
                </Link>
              </li>
              <li className="hidden md:block">
                <Link to="/about">
                  <i class="fa-solid fa-people-carry-box"></i> About Us
                </Link>
              </li>
              <li className="hidden lg:block">
                <Link to="/contact">
                  <i class="fa-solid fa-paper-plane"></i> Contact Us
                </Link>
              </li>
              <li className="cart max-[426px]:text-xs" data-testid="cart">
                <Link to="/cart">
                  <i class="fa-solid fa-cart-shopping"></i> Cart
                  <span>{cartItems.length}</span>
                </Link>
              </li>

              <li className="bg-transparent max-[426px]:text-xs">
                <button
                  className="max-[426px]:text-xs flex items-center justify-center gap-1 p-1 cursor-pointer text-xl rounded-md"
                  onClick={handleOnBtnClick}
                >
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

          <div className="m-2 md:hidden sm:flex sm:text-2xl">
            <i
              title="menu"
              className="max-[426px]:text-md fa-solid fa-bars text-2xl cursor-pointer hidden sm:flex"
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
