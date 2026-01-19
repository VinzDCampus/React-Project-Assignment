import React from 'react';
import { useProducts } from '../context/ProductContext';

const CategoryFilter = () => {
  const { selectedCategory, setSelectedCategory, getCategories } = useProducts();
  const categories = getCategories();

  return (
    <div className="category-filter">
      <h3>Filter by Category:</h3>
      <div className="category-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;