import ProductList from "../../components/ProductList.jsx";
import products from "../../data/products";
import "../Home/Home.scss";

const Home = () => {
  return (
    <div>
      <h1 className="home__body">Welcome to SPX </h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
