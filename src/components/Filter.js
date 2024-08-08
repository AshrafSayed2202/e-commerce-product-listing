import React from 'react';

const Filter = ({ categories, selectedCategory, handleFilterChange }) => {
    return (
        <select value={selectedCategory} onChange={handleFilterChange}>
            <option value="">All Categories</option>
            {categories.map(category => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
    );
};

export default Filter;
