import React from 'react';

const Sort = ({ onSort }) => (
    <select onChange={(e) => onSort(e.target.value)}>
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
    </select>
);

export default Sort;
