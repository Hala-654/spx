import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Toast from "./Toast";
import products from "../data/products";

const ProductList = ({ product }) => {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setShowToast(true);
  };
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product._id} className="product-card">
          <Link to={`/products/${product._id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          </Link>{" "}
          <h2>{product.name}</h2>
          <p>${product.price.toFixed(2)}</p>
          <button className="product-button" onClick={handleAdd}>
            Add to Cart
          </button>
          {showToast && (
            <Toast
              message={`${product.name} added to cart`}
              onClose={() => setShowToast(false)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
