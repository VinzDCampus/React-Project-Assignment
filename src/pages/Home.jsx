import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../ui/ProductCard';

const Home = () => {
  const { products, loading } = useProducts();
  
  // Get featured products (first 3 products)
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to ProductHub</h1>
          <p>Discover amazing products at great prices</p>
          <Link to="/products" className="cta-button">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Products</h2>
        {loading ? (
          <div className="loading">Loading products...</div>
        ) : (
          <div className="product-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        <div className="view-all-container">
          <Link to="/products" className="view-all-btn">
            View All Products
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>🚚 Free Shipping</h3>
          <p>On orders over $50</p>
        </div>
        <div className="feature-card">
          <h3>🔒 Secure Payment</h3>
          <p>100% secure transactions</p>
        </div>
        <div className="feature-card">
          <h3>↩️ Easy Returns</h3>
          <p>30-day return policy</p>
        </div>
      </section>
    </div>
  );
};

export default Home;