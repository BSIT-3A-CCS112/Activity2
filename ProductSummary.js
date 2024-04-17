import React, { useState } from 'react';

function ProductSummary({ cart }) {
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);

  const calculateTotalPrice = (price, quantity) => {
    return parseFloat(price) * quantity; // Convert price to number and multiply with quantity
  };

  const getTotalPriceForCart = () => {
    return cart.reduce((total, item) => {
      return total + calculateTotalPrice(item.price, item.quantity);
    }, 0);
  };

  const getTotalItemsInCart = () => {
    return cart.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  };

  const summaryStyle = {
    backgroundColor: '#f8f9f9',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
  };

  const listItemStyle = {
    marginBottom: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderBottom: '1px solid #ddd',
    paddingBottom: '5px',
    color: '#333', // Text color for each item
    display: 'flex',
    justifyContent: 'space-between', // Align price to the right side
  };

  const quantityStyle = {
    fontSize: '14px',
    marginLeft: '10px',
    color: '#888', // Text color for quantity
    textAlign: 'center', // Align quantity in the middle
  };

  const totalPriceLabelStyle = {
    fontWeight: 'bold',
    color: '#333', // Text color for total price label
    marginBottom: '10px',
  };

  const totalPriceStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#007bff', // Text color for total price
  };

  return (
    <div>
      <button
        onClick={() => setIsSummaryVisible(!isSummaryVisible)}
        style={{
          backgroundColor: 'red',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
      >
        {isSummaryVisible ? 'HIDE CART' : 'VIEW CART'}
      </button>
      {isSummaryVisible && (
        <div style={summaryStyle}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'red' }}>CART SUMMARY</h2>
          <div>
            <p style={totalPriceLabelStyle}>ITEMS IN CART: {getTotalItemsInCart()}</p>
            <ul style={{ padding: 0, listStyle: 'none', marginBottom: '20px' }}>
              {cart.map(item => (
                <li key={item.id} style={listItemStyle}>
                  <strong>{item.name}</strong>
                  <span style={quantityStyle}>Quantity: {item.quantity}</span>
                  <span style={quantityStyle}>₱{calculateTotalPrice(item.price, item.quantity)}</span>
                </li>
              ))}
            </ul>
          </div>
          <p style={totalPriceStyle}><strong style={{color: '#333'}}>TOTAL PRICE FOR ALL ITEMS:</strong> <span style={{color: 'red'}}>₱{getTotalPriceForCart()}</span></p>
        </div>
      )}
    </div>
  );
}

export default ProductSummary;