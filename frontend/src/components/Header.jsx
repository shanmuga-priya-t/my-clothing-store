import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { useCart } from '../contexts/CartContext';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { cartItems } = useCart();

  const submitHandler = (e) => {
    e.preventDefault();
    // Search logic here, for now just alert
    alert(`Searching for: ${searchTerm}`);
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          {/* Dashboard-ku kootitu pogum */}
          <LinkContainer to="/dashboard">
            <Navbar.Brand>My Clothing Store</Navbar.Brand>
          </LinkContainer>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Form className="d-flex me-3" onSubmit={submitHandler}>
                <Form.Control
                  type="search"
                  placeholder="Search products..."
                  className="me-2"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button variant="outline-success" type="submit">Search</Button>
              </Form>
              
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart ({cartItems.length})
                </Nav.Link>
              </LinkContainer>

              {/* Logout click panna thirumba Login page-ku kootitu pogum */}
              <LinkContainer to="/">
                <Nav.Link>
                  <i className="fas fa-user"></i> Logout
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;