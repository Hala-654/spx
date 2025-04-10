import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Toast from "./Toast";
import "../styles/components/_product-card.scss";

const ProductCard = ({ product }) => {
  const { name, price, image, _id } = product;
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setShowToast(true);
  };
  return (
    <div className="product-card">
      <Link to={`/products/${product._id}`}>
        <img src={product.image} alt={product.name} className="product-image" />
      </Link>{" "}
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <p className="product-price">${price.toFixed(2)}</p>
        <button className="product-button" onClick={handleAdd}>
          Add to Cart
        </button>
      </div>
      {showToast && (
        <Toast
          message={`${name} added to cart`}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default ProductCard;
