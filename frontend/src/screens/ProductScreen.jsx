import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useCart } from '../contexts/CartContext';

const ProductScreen = () => {
const { id } = useParams(); // URL-la irundhu andha product ID-ah yedukkum
const [product, setProduct] = useState({});
const { addToCart } = useCart();

useEffect(() => {
const fetchProduct = async () => {
// Backend-la oru single product-ah mattum fetch panra API
const { data } = await axios.get(`/api/products/${id}`);
setProduct(data);
};
fetchProduct();
}, [id]);

const addToCartHandler = () => {
  addToCart({ ...product, qty: 1 });
  alert('Added to cart!');
};

return (
<>
<Link className="btn btn-light my-3" to="/dashboard">
Go Back
</Link>
<Row>
<Col md={6}>
<Image src={`http://localhost:5000${product.image}`} alt={product.name} fluid />
</Col>
<Col md={3}>
<ListGroup variant="flush">
<ListGroup.Item>
<h3>{product.name}</h3>
</ListGroup.Item>
<ListGroup.Item>₹{product.price}</ListGroup.Item>
<ListGroup.Item>Description: {product.description}</ListGroup.Item>
<ListGroup.Item>Category: {product.category}</ListGroup.Item>
<ListGroup.Item>
Stock: {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
</ListGroup.Item>
</ListGroup>
<Card className="my-3">
<Card.Body>
<Button
className="btn-block"
type="button"
disabled={product.countInStock === 0}
onClick={addToCartHandler}
>
Add to Cart
</Button>
</Card.Body>
</Card>
</Col>
</Row>
</>
);
};

export default ProductScreen;