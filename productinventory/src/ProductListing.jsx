import React from 'react';
import { Card, Table, Button } from 'react-bootstrap';

const ProductListing = ({ products, isCardView, onEdit, onDelete }) => {
  return isCardView ? (
    <div className="card-container">
      {products.map((product) => (
        <Card key={product.id} className="product-card">
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button variant="primary" onClick={() => onEdit(product.id)}>Edit</Button>
            <Button variant="danger" onClick={() => onDelete(product.id)} style={{ marginLeft: '10px' }}>Delete</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  ) : (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Stock Status</th>
          <th>Supplier</th>
          <th>SKU</th>
          <th>Description</th>
          <th>Manufacture Date</th>
          <th>Expiry Date</th>
          <th>Weight</th>
          <th>Dimensions</th>
          <th>Color</th>
          <th>Material</th>
          <th>Warranty</th>
          <th>Location</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.stockStatus}</td>
            <td>{product.supplier}</td>
            <td>{product.sku}</td>
            <td>{product.description}</td>
            <td>{product.manufactureDate}</td>
            <td>{product.expiryDate}</td>
            <td>{product.weight}</td>
            <td>{product.dimensions}</td>
            <td>{product.color}</td>
            <td>{product.material}</td>
            <td>{product.warranty}</td>
            <td>{product.location}</td>
            <td>
              <Button variant="primary" onClick={() => onEdit(product.id)}>Edit</Button>
              <Button variant="danger" onClick={() => onDelete(product.id)} style={{ marginLeft: '10px' }}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductListing;
