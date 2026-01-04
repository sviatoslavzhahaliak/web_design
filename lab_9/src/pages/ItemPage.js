import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCarById } from '../api';
import Loader from '../elements/Loader';

const ItemPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCar = async () => {
            try {
                const data = await fetchCarById(id);
                setCar(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        getCar();
    }, [id]);

    if (loading) return <Loader />;
    if (!car) return <h2>Авто не знайдено</h2>;

    return (
        <div className="item-page" style={{ display: 'flex', gap: '50px', padding: '50px 0' }}>
            <img src={car.image} alt={car.brand} style={{ width: '50%', borderRadius: '20px' }} />
            <div className="details">
                <h1>{car.brand}</h1>
                <p style={{ fontSize: '1.5rem', color: '#6366f1' }}>Ціна: ${car.price}</p>
                <button onClick={() => navigate('/catalog')} className="btn-edit">Назад</button>
            </div>
        </div>
    );
};

export default ItemPage;