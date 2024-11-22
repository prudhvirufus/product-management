import React, { useState } from 'react';
import './ProductForm.css'; // Add this line to import the CSS file

const ProductForm = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    name: '',
    photo: null,
    category: '',
    price: '',
    stockStatus: 'In Stock',
    supplier: '',
    sku: '',
    description: '',
    manufactureDate: '',
    expiryDate: '',
    weight: '',
    dimensions: '',
    color: '',
    material: '',
    warranty: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setProduct({
      ...product,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(product);
    setProduct({
      name: '',
      photo: null,
      category: '',
      price: '',
      stockStatus: 'In Stock',
      supplier: '',
      sku: '',
      description: '',
      manufactureDate: '',
      expiryDate: '',
      weight: '',
      dimensions: '',
      color: '',
      material: '',
      warranty: '',
      location: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div className="form-group">
        <label>Product Name:</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Photo:</label>
        <input type="file" name="photo" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input type="text" name="category" value={product.category} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Price:</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Stock Status:</label>
        <input type="radio" name="stockStatus" value="In Stock" checked={product.stockStatus === 'In Stock'} onChange={handleChange} /> In Stock
        <input type="radio" name="stockStatus" value="Out of Stock" checked={product.stockStatus === 'Out of Stock'} onChange={handleChange} /> Out of Stock
      </div>
      <div className="form-group">
        <label>Supplier:</label>
        <input type="text" name="supplier" value={product.supplier} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>SKU:</label>
        <input type="text" name="sku" value={product.sku} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea name="description" value={product.description} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Manufacture Date:</label>
        <input type="date" name="manufactureDate" value={product.manufactureDate} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Expiry Date:</label>
        <input type="date" name="expiryDate" value={product.expiryDate} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Weight:</label>
        <input type="text" name="weight" value={product.weight} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Dimensions:</label>
        <input type="text" name="dimensions" value={product.dimensions} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Color:</label>
        <input type="text" name="color" value={product.color} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Material:</label>
        <input type="text" name="material" value={product.material} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Warranty:</label>
        <input type="text" name="warranty" value={product.warranty} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Location:</label>
        <input type="text" name="location" value={product.location} onChange={handleChange} />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
