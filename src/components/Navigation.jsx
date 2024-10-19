import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
        <i className="fas fa-home"></i>
      </Link>
      <Link to="/inventory" className={location.pathname === '/inventory' ? 'active' : ''}>
        <i className="fas fa-box"></i>
      </Link>
      <Link to="/transaction" className={location.pathname === '/transaction' ? 'active' : ''}>
        <i className="fas fa-exchange-alt"></i>
      </Link>
      <Link to="/adjustment" className={location.pathname === '/adjustment' ? 'active' : ''}>
        <i className="fas fa-sliders-h"></i>
      </Link>
    </nav>
  );
}

export default Navigation;