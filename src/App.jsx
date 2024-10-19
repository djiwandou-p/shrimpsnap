import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './components/StartPage';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import Transaction from './components/Transaction';
import Adjustment from './components/Adjustment';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/adjustment" element={<Adjustment />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;