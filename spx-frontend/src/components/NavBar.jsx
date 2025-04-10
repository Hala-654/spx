import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav">
        <div className="nav__left">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </div>
        <div className="nav__right">
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
