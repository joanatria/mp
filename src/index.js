import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Product from './pages/Product'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = lazy(() => import('./App'));
const Signin = lazy(() => import('./pages/Signin'));
const Login = lazy(() => import('./pages/Login'));
const Cart = lazy(() => import('./pages/Cart'));
const Store = lazy(() => import('./pages/Store'));

// This is the root component
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    {/* The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. */}
      {/* Routers is used to separate different screens using their URL */}
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/store" element={<Store />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:productId" element={<Product />} />
          </Routes>
        </Suspense>
      </Router>
  </div>
);
