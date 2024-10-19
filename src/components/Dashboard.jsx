import React from 'react';
import '../styles/Dashboard.css';

function Dashboard() {
  // Dummy data - replace with actual data from your JSON file
  const summaryData = {
    products: 20,
    willExpire: 5,
    productsIn: 3,
    productsOut: 6,
    mustBeOut: 4,
    mustBeIn: 3
  };

  const historyData = [
    { product: 'A', quantity: 1000, quality: 'Fresh', expiredDate: '1/1/2024', status: 'Inbound' },
    { product: 'B', quantity: 1000, quality: 'Fresh', expiredDate: '1/1/2024', status: 'Inbound' },
    { product: 'C', quantity: 1000, quality: 'Fresh', expiredDate: '1/1/2024', status: 'Outbound' },
    { product: 'D', quantity: 1000, quality: 'Fresh', expiredDate: '1/1/2024', status: 'Inbound' },
    { product: 'E', quantity: 1000, quality: 'Fresh', expiredDate: '1/1/2024', status: 'Outbound' },
  ];

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="summary">
        <div className="summary-item">
          <h2>Products</h2>
          <p>{summaryData.products}</p>
        </div>
        <div className="summary-item">
          <h2>Will Expire</h2>
          <p>{summaryData.willExpire}</p>
        </div>
        <div className="summary-item">
          <h2>Products In</h2>
          <p>{summaryData.productsIn}</p>
        </div>
        <div className="summary-item">
          <h2>Products Out</h2>
          <p>{summaryData.productsOut}</p>
        </div>
        <div className="summary-item">
          <h2>Must Be Out</h2>
          <p>{summaryData.mustBeOut}</p>
        </div>
        <div className="summary-item">
          <h2>Must Be In</h2>
          <p>{summaryData.mustBeIn}</p>
        </div>
      </div>
      <div className="history">
        <h2>History</h2>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Quality</th>
              <th>Expired Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((item, index) => (
              <tr key={index}>
                <td>{item.product}</td>
                <td>{item.quantity}</td>
                <td>{item.quality}</td>
                <td>{item.expiredDate}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;