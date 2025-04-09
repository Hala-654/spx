import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Toast from "./Toast";
import "../styles/components/_product-card.scss";

const ProductCard = ({ product }) => {
  const { name, price, image } = product;
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setShowToast(true);
  };
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
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
