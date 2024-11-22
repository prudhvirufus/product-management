import React, { useState } from 'react';

const ProductFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    stockStatus: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <form onSubmit={handleSubmit} className="product-filter">
      <label>
        Category:
        <input type="text" name="category" value={filters.category} onChange={handleChange} />
      </label>
      <label>
        Price Range:
        <input type="text" name="priceRange" value={filters.priceRange} onChange={handleChange} />
      </label>
      <label>
        Stock Status:
        <input type="text" name="stockStatus" value={filters.stockStatus} onChange={handleChange} />
      </label>
      <button type="submit">Filter</button>
    </form>
  );
};

export default ProductFilter;
