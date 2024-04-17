import React, { useState } from 'react';
import ProductInfo from './ProductInfo';
import ProductSummary from './ProductSummary';


function ProductPage() {
  const products = [
    { id: 1, name: 'Vans Old Skool', price: '60', description: 'Classic skate shoe with canvas and suede uppers' },
    { id: 2, name: 'Vans Authentic', price: '55', description: 'Iconic low top lace-up shoe with durable canvas upper' },
    { id: 3, name: 'Vans Slip-On', price: '50', description: 'Easy slip-on style with canvas uppers and elastic side accents' },
    { id: 4, name: 'Vans Sk8-Hi', price: '70', description: 'High-top skate shoe with canvas and suede uppers' },
    { id: 5, name: 'Vans Era', price: '65', description: 'Lace-up skate shoe with canvas and suede uppers' },
    { id: 6, name: 'Vans Authentic Checkerboard', price: '60', description: 'Iconic low top lace-up shoe with checkerboard canvas upper' },
    { id: 7, name: 'Vans Slip-On Pro', price: '65', description: 'Performance skate shoe with durable suede and canvas uppers' },
    { id: 8, name: 'Vans Old Skool Pro', price: '75', description: 'Classic skate shoe with upgraded cushioning and durability' },
    { id: 9, name: 'Vans Sk8-Hi MTE', price: '85', description: 'Winterized high-top skate shoe with insulated lining and traction outsole' },
    { id: 10, name: 'Vans UltraRange EXO', price: '90', description: 'Versatile athletic shoe with durable construction and UltraCush cushioning' },
];


    const [cart, setCart] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const addToCart = () => {
        const existingProduct = cart.find(item => item.id === selectedProduct.id);

        if (existingProduct) {
            const updatedCart = cart.map(item =>
                item.id === selectedProduct.id ? { ...item, quantity: item.quantity + quantity } : item
            );
            setCart(updatedCart);
        } else {
            setCart(prevCart => [...prevCart, { ...selectedProduct, quantity }]);
        }

        closeModal();
    };

    const openModal = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setQuantity(1);
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    // Modal styles
    const modalStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        content: {
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '5px',
            maxWidth: '400px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        },
        closeButton: {
            position: 'absolute',
            top: '10px',
            right: '10px',
            cursor: 'pointer',
            border: 'none',
            backgroundColor: 'transparent',
            fontSize: '1.5rem',
            color: '#555',
        },
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <ProductSummary cart={cart} />
            <h1 style={{ textAlign: 'center', color: 'red' }}>VANS OF THE WALL</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                {products.map(product => (
                    <div key={product.id} style={{ border: '2px solid #007bff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease', ':hover': { transform: 'scale(1.05)' } }}>
                        <ProductInfo
                            name={product.name}
                            price={product.price}
                            description={product.description}
                            onAddToCart={() => openModal(product)}
                            buttonStyle={{ backgroundColor: '#007bff', color: '#fff', border: '2px solid #007bff', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
                        />
                    </div>
                ))}
            </div>

            {/* Modal for adding products to cart */}
            {selectedProduct && (
                <div style={modalStyles.overlay}>
                    <div style={modalStyles.content}>
                        <button style={modalStyles.closeButton} onClick={closeModal}>✕</button>
                        <h2 style={{ marginBottom: '10px' }}>{selectedProduct.name}</h2>
                        <p><strong>PRICE: </strong> ₱{selectedProduct.price}</p>
                        <p><strong>DESCRIPTION: </strong>{selectedProduct.description}</p>
                        <div style={{ marginBottom: '10px' }}>
                            <button onClick={decrementQuantity} style={{ marginRight: '5px' }}>-</button>
                            <span>{quantity}</span>
                            <button onClick={incrementQuantity} style={{ marginLeft: '5px' }}>+</button>
                        </div>
                        <button onClick={addToCart} style={{ marginRight: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>ADD TO CART</button>
                        <button onClick={closeModal} style={{ backgroundColor: '#dc3545', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>CANCEL</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductPage;