import React, { useState } from 'react';
import '../styles/Adjustment.css';

function Adjustment() {
  const [products, setProducts] = useState([
    { name: 'A', quantity: 1000, quality: 'Fresh', expiredDate: '1/1/2024' },
    { name: 'B', quantity: 1000, quality: 'Fresh', expiredDate: '1/1/2024' },
    { name: 'C', quantity: 1000, quality: 'Fresh', expiredDate: '1/1/2024' },
    { name: 'D', quantity: 1000, quality: 'Fresh', expiredDate: '1/1/2024' },
    { name: 'E', quantity: 1000, quality: 'Fresh', expiredDate: '1/1/2024' },
  ]);

  const outboundRecommendations = products.slice(0, 3);
  const inboundRecommendations = products.slice(3, 5);

  return (
    <div className="adjustment">
      <h1>Adjustment</h1>
      <div className="filters">
        <select>
          <option value="">Products</option>
        </select>
        <select>
          <option value="">In Date</option>
        </select>
        <select>
          <option value="">Expired Date</option>
        </select>
      </div>
      <div className="adjustment-table">
        <h2>Adjustment</h2>
        <table>
          <thead>
            <tr>
              <th>Products</th>
              <th>Quantity</th>
              <th>Quality</th>
              <th>Expired Date</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.quality}</td>
                <td>{product.expiredDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="recommendations">
        <h2>Recommendations</h2>
        <div className="outbound-recommendations">
          <h3>Outbound Recommendations</h3>
          <p>There are 3 products that need to be outbound soon due to approaching expired date on 1/1/2024.</p>
          <table>
            <thead>
              <tr>
                <th>Products</th>
                <th>Quantity</th>
                <th>Quality</th>
                <th>Expired Date</th>
              </tr>
            </thead>
            <tbody>
              {outboundRecommendations.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>{product.quality}</td>
                  <td>{product.expiredDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="inbound-recommendations">
          <h3>Inbound Recommendations</h3>
          <p>There are 2 products that need to be inbound due to low stock.</p>
          <table>
            <thead>
              <tr>
                <th>Products</th>
                <th>Quantity</th>
                <th>Quality</th>
                <th>Expired Date</th>
              </tr>
            </thead>
            <tbody>
              {inboundRecommendations.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>{product.quality}</td>
                  <td>{product.expiredDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button className="export-button">Export</button>
    </div>
  );
}

export default Adjustment;