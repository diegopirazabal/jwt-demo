import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import TokenDisplay from './components/TokenDisplay';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        {/* Rutas privadas */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/token" element={<TokenDisplay />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;