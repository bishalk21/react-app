import logo from "../../assets/logo.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <i class="fa-solid fa-house"></i> Home
          </li>
          <li>
            <i class="fa-solid fa-people-carry-box"></i> About Us
          </li>
          <li>
            <i class="fa-solid fa-cart-shopping"></i> Cart
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
