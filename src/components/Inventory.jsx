import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../styles/Inventory.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function Inventory() {
  const [products, setProducts] = useState([
    { name: 'A', quantity: 1000, inDate: '31/12/2023', expiredDate: '1/1/2024' },
    { name: 'B', quantity: 1000, inDate: '31/12/2023', expiredDate: '1/1/2024' },
    { name: 'C', quantity: 1000, inDate: '31/12/2023', expiredDate: '1/1/2024' },
    { name: 'D', quantity: 1000, inDate: '31/12/2023', expiredDate: '1/1/2024' },
    { name: 'E', quantity: 1000, inDate: '31/12/2023', expiredDate: '1/1/2024' },
  ]);

  const chartData = {
    labels: products.map(product => product.name),
    datasets: [
      {
        data: products.map(product => product.quantity),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
      },
    ],
  };

  return (
    <div className="inventory">
      <h1>Inventory</h1>
      <div className="chart-container">
        <Pie data={chartData} />
      </div>
      <div className="filters">
        <select>
          <option value="">Products</option>
        </select>
        <select>
          <option value="">Quality</option>
        </select>
        <select>
          <option value="">In Date</option>
        </select>
        <select>
          <option value="">Expired Date</option>
        </select>
      </div>
      <div className="product-list">
        <h2>Product List</h2>
        <table>
          <thead>
            <tr>
              <th>Products</th>
              <th>Quantity</th>
              <th>In Date</th>
              <th>Expired Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.inDate}</td>
                <td>{product.expiredDate}</td>
                <td><button>Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="add-product">Add Product</button>
    </div>
  );
}

export default Inventory;