import { createContext, useContext, useState, useEffect } from 'react';
import productsData from '../data/products.json';

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  // Simulate API call - load products from JSON
  useEffect(() => {
    const loadProducts = () => {
      setTimeout(() => {
        setProducts(productsData);
        setFilteredProducts(productsData);
        setLoading(false);
      }, 500); // Simulate network delay
    };
    
    loadProducts();
  }, []);

  // Filter products by category
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(product => product.category === selectedCategory)
      );
    }
  }, [selectedCategory, products]);

  // Get product by ID
  const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
  };

  // Get all unique categories
  const getCategories = () => {
    const categories = ['All', ...new Set(products.map(p => p.category))];
    return categories;
  };

  const value = {
    products,
    filteredProducts,
    selectedCategory,
    setSelectedCategory,
    loading,
    getProductById,
    getCategories,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};