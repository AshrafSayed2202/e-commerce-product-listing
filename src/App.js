import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Filter from './components/Filter';
import Sort from './components/Sort';
import AddProductForm from './components/AddProductForm';
import './index.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  const handleAddProduct = (product) => {
    setProducts([...products, { ...product, id: products.length + 1 }]);
  };

  const handleFilter = (category) => {
    setFilter(category);
  };

  const handleSort = (criteria) => {
    setSort(criteria);
  };

  const filteredProducts = products.filter((product) =>
    filter ? product.category === filter : true
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sort === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sort === 'price') {
      return a.price - b.price;
    }
    return 0;
  });

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="app">
      <h1>Product Listing Page</h1>
      <AddProductForm onAddProduct={handleAddProduct} />
      <Filter categories={categories} onFilter={handleFilter} />
      <Sort onSort={handleSort} />
      <ProductList products={sortedProducts} />
    </div>
  );
};

export default App;
