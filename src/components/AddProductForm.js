import React, { useState } from 'react';

const AddProductForm = ({ addProduct }) => {
    const [product, setProduct] = useState({
        name: '',
        image: '',
        price: '',
        description: '',
        category: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (product.name && product.image && product.price && product.description && product.category) {
            setProduct({ name: '', image: '', price: '', description: '', category: '' });
            addProduct(product);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" required />
            <input type="text" name="image" value={product.image} onChange={handleChange} placeholder="Image URL" required />
            <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
            <input type="text" name="description" value={product.description} onChange={handleChange} placeholder="Description" required />
            <input type="text" name="category" value={product.category} onChange={handleChange} placeholder="Category" required />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProductForm;
