import React from 'react';

function ProductInfo({ id, name, price, description, onAddToCart }) {
  return (
    <div>
      <h2>{name}</h2>
      <p><strong>Price: </strong> ₱{price}</p>
      <p style={{ textAlign: 'justify' }}><strong>Description: </strong>{description}</p>
      <button 
        onClick={() => onAddToCart({ id, name, price })}
        style={{
          backgroundColor: 'red',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontFamily: 'Poppins',
          transition: 'background-color 0.3s ease',
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
}

export default ProductInf;