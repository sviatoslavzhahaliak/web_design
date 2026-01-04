import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCarById } from '../api';
import { addToCart } from '../redux/actions';
import Loader from '../elements/Loader';
import PrimaryButton from '../elements/PrimaryButton';

const ItemPage = () => {
    // Отримуємо ID з URL параметрів
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Локальний стан для даних автомобіля та стану завантаження
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);

    // Завантажуємо дані про конкретне авто з бекенду при завантаженні сторінки
    useEffect(() => {
        const getCar = async () => {
            try {
                const data = await fetchCarById(id);
                setCar(data);
            } catch (error) {
                console.error("Помилка при отриманні даних авто:", error);
            } finally {
                setLoading(false);
            }
        };
        getCar();
    }, [id]);

    // Функція для додавання товару в Redux store (кошик)
    const handleAddToCart = () => {
        if (car) {
            dispatch(addToCart(car));
            alert(`${car.brand} успішно додано до кошика! 🛒`);
        }
    };

    // Відображаємо спінер, поки чекаємо відповідь від сервера
    if (loading) return <Loader />;

    // Якщо авто не знайдено в базі даних
    if (!car) return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h2>Автомобіль не знайдено 😕</h2>
            <PrimaryButton text="Повернутися до каталогу" onClick={() => navigate('/catalog')} />
        </div>
    );

    return (
        <div className="item-page-container" style={{ padding: '40px 0' }}>
            <div className="item-content" style={{ display: 'flex', gap: '50px', alignItems: 'start' }}>
                
                {/* Секція зображення */}
                <div className="item-image-box" style={{ flex: 1 }}>
                    <img 
                        src={car.image || 'https://via.placeholder.com/600x400'} 
                        alt={car.brand} 
                        style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                    />
                </div>

                {/* Секція детальної інформації */}
                <div className="item-details-box" style={{ flex: 1 }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px', color: '#1e293b' }}>{car.brand}</h1>
                    <p style={{ fontSize: '1.8rem', color: '#6366f1', fontWeight: '800', marginBottom: '30px' }}>
                        Ціна: ${car.price ? car.price.toLocaleString() : '---'}
                    </p>

                    <div className="specs-list" style={{ marginBottom: '40px', lineHeight: '2', fontSize: '1.1rem', color: '#475569' }}>
                        <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0', padding: '10px 0' }}>
                            <span style={{ flex: 1, fontWeight: '600' }}>🏎️ Макс. швидкість:</span>
                            <span style={{ flex: 1 }}>{car.speed} км/год</span>
                        </div>
                        <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0', padding: '10px 0' }}>
                            <span style={{ flex: 1, fontWeight: '600' }}>⚡ Потужність:</span>
                            <span style={{ flex: 1 }}>{car.power} к.с.</span>
                        </div>
                        <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0', padding: '10px 0' }}>
                            <span style={{ flex: 1, fontWeight: '600' }}>⛽ Тип двигуна:</span>
                            <span style={{ flex: 1 }}>{car.type}</span>
                        </div>
                    </div>

                    <div className="item-actions" style={{ display: 'flex', gap: '20px' }}>
                        <PrimaryButton 
                            text="Додати в кошик 🛒" 
                            onClick={handleAddToCart} 
                        />
                        <button 
                            className="btn-secondary" 
                            onClick={() => navigate('/catalog')}
                            style={{ 
                                padding: '12px 25px', 
                                borderRadius: '12px', 
                                border: '2px solid #e2e8f0', 
                                background: 'white', 
                                cursor: 'pointer',
                                fontWeight: '600'
                            }}
                        >
                            Назад до списку
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemPage;