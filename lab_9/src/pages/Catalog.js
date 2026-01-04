import React, { useContext, useEffect, useState, useCallback } from 'react';
import { CarContext } from '../context/CarContext';
import { fetchCars } from '../api';
import CarCard from '../elements/CarCard';
import Loader from '../elements/Loader';
import { useNavigate } from 'react-router-dom';

const Catalog = () => {
    const { cars, setCars, loading, setLoading } = useContext(CarContext);
    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("All");
    const navigate = useNavigate();

    // Огортаємо функцію в useCallback, щоб прибрати попередження про залежності
    const getCarsData = useCallback(async () => {
        setLoading(true);
        try {
            const params = typeFilter !== "All" ? { type: typeFilter } : {};
            const data = await fetchCars(params);
            setCars(data);
        } catch (error) {
            console.error("Помилка завантаження:", error);
        } finally {
            setLoading(false);
        }
    }, [typeFilter, setCars, setLoading]);

    useEffect(() => {
        getCarsData();
    }, [getCarsData]); // Тепер залежність — це сама функція

    const filteredCars = cars.filter(car => 
        car.brand.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="catalog-page">
            <div className="filters-bar" style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
                <input 
                    type="text" 
                    placeholder="Пошук моделі..." 
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ padding: '10px', borderRadius: '8px', flex: 1, border: '1px solid #ccc' }}
                />
                <select 
                    onChange={(e) => setTypeFilter(e.target.value)}
                    style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                >
                    <option value="All">Всі типи</option>
                    <option value="Electric">Electric</option>
                    <option value="Gasoline">Gasoline</option>
                </select>
            </div>

            {loading ? <Loader /> : (
                <div className="car-grid">
                    {filteredCars.length > 0 ? (
                        filteredCars.map(car => (
                            <div key={car.id} className="catalog-item">
                                <CarCard {...car} />
                                <button 
                                    className="btn-edit" 
                                    style={{ width: '100%', marginTop: '10px' }}
                                    onClick={() => navigate(`/item/${car.id}`)}
                                >
                                    View More
                                </button>
                            </div>
                        ))
                    ) : (
                        <p style={{ textAlign: 'center', width: '100%' }}>Машин не знайдено на сервері. Перевір, чи запущено node server.js</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Catalog;