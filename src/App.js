import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ResponsiveAppBar from './Components/AppBar';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Users from './Components/Users';
import Products from './Components/Products';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();
  const shouldRenderAppBar = !location.pathname.includes('/login');

  return (
    <div>
      {shouldRenderAppBar && <ResponsiveAppBar />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;
