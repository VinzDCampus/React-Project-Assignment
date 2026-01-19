import React from 'react';
import ProductList from '../ui/Productlist';
import CategoryFilter from '../ui/CategoryFilter';

const Products = () => {
  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Our Products</h1>
        <p>Browse our collection of quality products</p>
      </div>
      
      <CategoryFilter />
      
      <ProductList />
    </div>
  );
};

export default Products;