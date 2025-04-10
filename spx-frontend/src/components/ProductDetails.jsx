import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products"; // local data
import Toast from "./Toast";

const ProductDetails = () => {
  const { id } = useParams(); // gets the product ID from the URL
  const product = products.find((p) => p._id === id);
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <div className="info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>${product.price.toFixed(2)}</p>
        <button
          onClick={() => {
            addToCart(product);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000); // auto-close after 2 sec
          }}
        >
          Add to Cart
        </button>{" "}
      </div>
      {showToast && (
        <Toast
          message={`${product.name} added to cart`}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default ProductDetails;
