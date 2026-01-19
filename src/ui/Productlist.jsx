import React from 'react';
import ProductCard from './ProductCard';
import { useProducts } from '../context/ProductContext';

const ProductList = () => {
  const { filteredProducts, loading } = useProducts();

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (filteredProducts.length === 0) {
    return <div className="no-products">No products found in this category.</div>;
  }

  return (
    <div className="product-grid">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;