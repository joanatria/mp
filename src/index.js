import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = lazy(() => import('./App'));

// This is the root component
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    {/* The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. */}
      {/* Routers is used to separate diffrent screen using thier url */}
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<App />}>
            </Route>
          </Routes>
        </Suspense>
      </Router>
  </div>
  
);
