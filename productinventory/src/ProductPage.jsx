import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ProductForm from './ProductForm';
import ProductListing from './ProductListing';
import ProductFilter from './ProductFilter';
import * as XLSX from 'xlsx';

const ProductPage = () => {
  const [isCardView, setIsCardView] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      category: "Category 1",
      price: 100,
      stockStatus: "In Stock",
      supplier: "Supplier 1",
      sku: "SKU1",
      description: "Description of Product 1",
      manufactureDate: "2023-01-01",
      expiryDate: "2024-01-01",
      weight: "1kg",
      dimensions: "10x10x10 cm",
      color: "Red",
      material: "Plastic",
      warranty: "1 year",
      location: "Location 1"
    },
    // Add more products here
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const toggleView = () => setIsCardView(!isCardView);

  const addProduct = (newProduct) => {
    const updatedProducts = [...products, { ...newProduct, id: products.length + 1 }];
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  const filterProducts = (filters) => {
    const filtered = products.filter(product => {
      return (
        (filters.category === '' || product.category.includes(filters.category)) &&
        (filters.priceRange === '' || parseFloat(product.price) <= parseFloat(filters.priceRange)) &&
        (filters.stockStatus === '' || product.stockStatus === filters.stockStatus)
      );
    });
    setFilteredProducts(filtered);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredProducts);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Products");
    XLSX.writeFile(workbook, "products.xlsx");
  };

  const editProduct = (id) => {
    console.log(`Edit product with id: ${id}`);
    // Implement edit functionality here
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  return (
    <div>
      <ProductForm onAddProduct={addProduct} />
      
      <ProductFilter onFilter={filterProducts} />

      <Button onClick={toggleView} style={{ margin: "2em 0em" }}>
        {isCardView ? "Switch to Table View" : "Switch to Card View"}
      </Button>

      <Button onClick={exportToExcel} style={{ margin: "2em 1em" }}>
        Export to Excel
      </Button>

      <ProductListing products={filteredProducts} isCardView={isCardView} onEdit={editProduct} onDelete={deleteProduct} />
    </div>
  );
};

export default ProductPage;
