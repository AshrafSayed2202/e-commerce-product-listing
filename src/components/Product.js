import React from 'react';

const Product = ({ product }) => {
    return (
        <div className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>{product.category}</p>
        </div>
    );
};

export default Product;
