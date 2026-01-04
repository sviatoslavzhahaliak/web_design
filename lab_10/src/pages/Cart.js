import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../elements/PrimaryButton';

const Cart = () => {
    const cartItems = useSelector(state => state.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <div style={{textAlign: 'center'}}>
                    <p>Кошик порожній 🛒</p>
                    <PrimaryButton text="Back to Catalog" onClick={() => navigate('/catalog')} />
                </div>
            ) : (
                <div className="cart-content">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item" style={{display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px', background: '#fff', padding: '15px', borderRadius: '12px'}}>
                            <img src={item.image} alt={item.brand} style={{width: '100px', borderRadius: '8px'}} />
                            <div style={{flex: 1}}>
                                <h3>{item.brand}</h3>
                                <p>${item.price.toLocaleString()}</p>
                            </div>
                            <div className="quantity-controls">
                                <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                                <span style={{margin: '0 15px'}}>{item.quantity}</span>
                                <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                            </div>
                            <button onClick={() => dispatch(removeFromCart(item.id))} style={{color: 'red', border: 'none', background: 'none', cursor: 'pointer'}}>Видалити</button>
                        </div>
                    ))}
                    <div className="cart-footer" style={{marginTop: '30px', borderTop: '2px solid #eee', paddingTop: '20px'}}>
                        <h2>Total: ${totalPrice.toLocaleString()}</h2>
                        <div style={{display: 'flex', gap: '15px', marginTop: '20px'}}>
                            <PrimaryButton text="Back to Catalog" onClick={() => navigate('/catalog')} />
                            <PrimaryButton text="Continue to Checkout" onClick={() => alert('Йдемо далі!')} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;