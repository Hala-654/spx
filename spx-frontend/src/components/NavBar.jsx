import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav">
        <div className="nav__left">
          <Link to="/">Home</Link>
          <Link to="/products/:id">Products</Link>
        </div>
        <div className="nav__right">
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
