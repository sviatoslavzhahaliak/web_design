import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CarContext } from '../context/CarContext';

const ItemPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { cars } = useContext(CarContext);
    
    // Знаходимо машину за ID
    const car = cars.find(c => c.id === parseInt(id));

    if (!car) return <h2 style={{textAlign: 'center'}}>Машину не знайдено 😕</h2>;

    return (
        <div className="item-page" style={{ display: 'flex', gap: '50px', padding: '50px 0' }}>
            <img src={car.image} alt={car.brand} style={{ width: '50%', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
            <div className="details">
                <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>{car.brand}</h1>
                <p style={{ fontSize: '1.5rem', color: '#6366f1', fontWeight: 'bold' }}>Ціна: ${car.price.toLocaleString()}</p>
                <div style={{ margin: '30px 0', lineHeight: '2' }}>
                    <p>🏎️ <b>Швидкість:</b> {car.speed} км/год</p>
                    <p>⚡ <b>Потужність:</b> {car.power} к.с.</p>
                    <p>⛽ <b>Тип:</b> {car.type}</p>
                </div>
                <button 
                    onClick={() => navigate('/catalog')}
                    className="btn-edit" 
                    style={{ background: '#6366f1', color: '#white', padding: '15px 30px' }}
                >
                    Назад до каталогу
                </button>
            </div>
        </div>
    );
};

export default ItemPage;