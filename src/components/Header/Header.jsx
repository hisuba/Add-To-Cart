import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            Logo
          </Link>
        </h1>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li >
            <Link to="/cart"><i className="bi bi-cart-fill"></i></Link>
          </li>
          <li >
            <Link to="/wishlist"><i className="bi bi-heart-fill"></i></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
