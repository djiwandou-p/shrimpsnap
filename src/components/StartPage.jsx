import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/StartPage.css';

function StartPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="start-page">
      <img src="/gudang-logo.png" alt="Gudang Logo" className="logo" />
    </div>
  );
}

export default StartPage;