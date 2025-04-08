import React from "react";
import "./Products.scss";
import ProductCard from "../../components/ProductCard";

const Products = () => {
  return (
    <div className="products-page">
      <h1 className="products-title">All Products</h1>
      <div className="product-grid">
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
