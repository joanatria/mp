import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = lazy(() => import('./App'));
const Signin = lazy(() => import('./pages/Signin'));
const Login = lazy(() => import('./pages/Login'));
const Cart = lazy(() => import('./pages/Cart'));
const Store = lazy(() => import('./pages/Store'));

// Import the individual pages lazily
const Mac = lazy(() => import('./pages/Mac'));
const Ipad = lazy(() => import('./pages/Ipads'));
const Iphone = lazy(() => import('./pages/Iphone'));
const Watch = lazy(() => import('./pages/Watch'));
const Airpods = lazy(() => import('./pages/Airpods'));
const Accessories = lazy(() => import('./pages/Accessories'));
const Product = lazy(() => import('./pages/Product'));

ReactDOM.render(
  <div>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/store" element={<Store />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/airpods" element={<Airpods />} />
          <Route path="/acc" element={<Accessories />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
      </Suspense>
    </Router>
  </div>,
  document.getElementById('root')
);
