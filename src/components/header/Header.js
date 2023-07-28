import { useState, useEffect, useContext } from "react";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import MobileNav from "./mobile-nav/MobileNav";
import UserContext from "../../context/UserContext";
import { useSelector } from "react-redux";
import { clearUser } from "../../reducers/userSlice";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [mobileNavbar, setMobileNavbar] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();

  // ------------ context
  // const { userInfo, setUserInfo } = useContext(UserContext);

  // ---------- RTK
  const userInfo = useSelector((state) => state.user.userInfo);

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

  // useEffect(() => {}, []);

  const handleLogout = () => {
    // setUserInfo(null);
    clearUser();
    navigate("/"); // Navigate back to the login page after logout
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
            value={userInfo}
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
                  <i class="fa-solid fa-cart-shopping"></i> Cart{" "}
                  <span>
                    {cartItems.length === 0 ? null : cartItems.length}
                  </span>
                </Link>
              </li>

              <li className="bg-transparent max-[426px]:text-xs">
                {/* {isLoggedIn ? (
                    <>
                      <i class="fa-solid fa-user-large"></i> Logout
                    </>
                  ) : (
                    <>
                      <i class="fa-solid fa-right-to-bracket"></i>{" "}
                      {loggedInUser}
                    </>
                  )} */}
                {/* <i class="fa-solid fa-right-to-bracket"></i> Login */}

                {userInfo ? (
                  <>
                    <div className="flex gap-2">
                      {" "}
                      <div className="user">
                        <button
                          className="max-[426px]:text-xs flex items-center justify-center gap-1 p-1 cursor-pointer text-xl rounded-md"
                          // onClick={handleOnBtnClick}
                        >
                          <i class="fa-solid fa-user-large"></i> {userInfo}
                        </button>{" "}
                      </div>
                      <div className="user">
                        <button
                          className="max-[426px]:text-xs flex items-center justify-center gap-1 p-1 cursor-pointer text-xl rounded-md"
                          onClick={handleLogout}
                        >
                          <i class="fa-solid fa-right-to-bracket"></i> Signout
                        </button>{" "}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <button
                        className="max-[426px]:text-xs flex items-center justify-center gap-1 p-1 cursor-pointer text-xl rounded-md"
                        // onClick={handleOnBtnClick}
                      >
                        <i class="fa-solid fa-right-to-bracket"></i> Login{" "}
                      </button>{" "}
                    </Link>
                  </>
                )}
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
