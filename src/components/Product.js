import React from 'react';

const Product = ({ product }) => {
    const price = parseFloat(product.price);

    return (
        <div className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${!isNaN(price) ? price.toFixed(2) : 'Price not available'}</p>
        </div>
    );
};

export default Product;
