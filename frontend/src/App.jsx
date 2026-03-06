import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';
import CartScreen from './screens/CartScreen';
import { CartProvider } from './contexts/CartContext';

const App = () => {
  const location = useLocation();

  return (
    <CartProvider>
      <div>
        {location.pathname !== '/' && <Header />}
        <main className="py-3">
          <Container>
            <Routes>
              {/* App open panna mudhala Login page dhaan varum */}
              <Route path="/" element={<LoginScreen />} />
              
              {/* Login success aana dhaan indha dashboard-ku poga mudiyum */}
              <Route path="/dashboard" element={<HomeScreen />} />
              
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
            </Routes>
          </Container>
        </main>
      </div>
    </CartProvider>
  );
};

export default App;