import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import ProductList from "../../components/ProductList.jsx";
import products from "../../data/products";
import "../Home/Home.scss";

const Home = () => {
  const navigate = useNavigate();

  const scrollLeft = () => {
    document
      .querySelector(".scroll-row")
      .scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    document
      .querySelector(".scroll-row")
      .scrollBy({ left: 200, behavior: "smooth" });
  };
  return (
    <div className="home">
      <h1 className="home-background">Welcome to SPX </h1>
      <h2> Products</h2>
      <div className="scroll-container">
        <button className="scroll-btn left" onClick={scrollLeft}>
          ◀
        </button>
        <div className="scroll-row">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>
          ▶
        </button>
      </div>
      <button className="view-all" onClick={() => navigate("/products")}>
        See All Products
      </button>
    </div>
  );
};

export default Home;
