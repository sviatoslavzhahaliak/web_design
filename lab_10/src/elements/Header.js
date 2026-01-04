import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Хук для отримання даних з Redux

const Header = () => {
  // Отримуємо список товарів у кошику зі стору
  const cartItems = useSelector(state => state.cartItems);

  return (
    <header className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 50px', background: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
      <Link to="/" className="logo" style={{ fontSize: '1.5rem', fontWeight: '800', textDecoration: 'none', color: '#1e293b' }}>
        🏎️ CarPremium
      </Link>
      
      <nav style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        <ul className="nav-links" style={{ display: 'flex', listStyle: 'none', gap: '20px', margin: 0, padding: 0 }}>
          <li><Link to="/" style={{ textDecoration: 'none', color: '#475569', fontWeight: '600' }}>Home</Link></li>
          <li><Link to="/catalog" style={{ textDecoration: 'none', color: '#475569', fontWeight: '600' }}>Catalog</Link></li>
        </ul>

        {/* Посилання на кошик з лічильником */}
        <Link to="/cart" className="cart-link" style={{ 
          textDecoration: 'none', 
          background: '#6366f1', 
          color: 'white', 
          padding: '8px 15px', 
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: '600'
        }}>
          🛒 Cart 
          <span style={{ 
            background: 'white', 
            color: '#6366f1', 
            borderRadius: '50%', 
            padding: '2px 8px', 
            fontSize: '0.8rem' 
          }}>
            {cartItems.length}
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;