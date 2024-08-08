import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Filter from './components/Filter';
import AddProductForm from './components/AddProductForm';
import './index.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const categories = ['Electronics', 'Books', 'Clothing'];

  const addProduct = (product) => {
    const newProduct = { ...product, id: Date.now() };
    setProducts([...products, newProduct]);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const getFilteredProducts = () => {
    return filter ? products.filter(product => product.category === filter) : products;
  };

  return (
    <div className="App">
      <h1>E-commerce Product Listing</h1>
      <Filter
        categories={categories}
        selectedCategory={filter}
        handleFilterChange={handleFilterChange}
      />
      <AddProductForm addProduct={addProduct} />
      <ProductList products={getFilteredProducts()} />
    </div>
  );
};

export default App;
