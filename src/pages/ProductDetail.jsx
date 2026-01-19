import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductById, loading } = useProducts();
  
  const product = getProductById(id);

  if (loading) {
    return <div className="loading">Loading product details...</div>;
  }

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product Not Found</h2>
        <p>Sorry, the product you're looking for doesn't exist.</p>
        <Link to="/products" className="back-btn">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back
      </button>
      
      <div className="product-detail-container">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
          {!product.inStock && (
            <span className="out-of-stock-badge large">Out of Stock</span>
          )}
        </div>
        
        <div className="product-detail-info">
          <span className="category-badge">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="price">${product.price.toFixed(2)}</p>
          
          <div className="description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          
          <div className="features">
            <h3>Features</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="stock-status">
            {product.inStock ? (
              <span className="in-stock">✓ In Stock</span>
            ) : (
              <span className="out-of-stock">✗ Out of Stock</span>
            )}
          </div>
          
          <button 
            className="add-to-cart-btn" 
            disabled={!product.inStock}
          >
            {product.inStock ? 'Add to Cart' : 'Unavailable'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;