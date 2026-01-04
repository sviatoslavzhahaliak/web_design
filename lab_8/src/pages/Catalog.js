import React, { useContext, useState } from 'react';
import { CarContext } from '../context/CarContext';
import { useNavigate } from 'react-router-dom';
import CarCard from '../elements/CarCard';

const Catalog = () => {
    const { cars } = useContext(CarContext);
    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("All");
    const navigate = useNavigate();

    const filteredCars = cars.filter(car => {
        const matchesSearch = car.brand.toLowerCase().includes(search.toLowerCase());
        const matchesType = typeFilter === "All" || car.type === typeFilter;
        return matchesSearch && matchesType;
    });

    return (
        <div className="catalog-page">
            <div className="filters-bar" style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
                <input 
                    type="text" 
                    placeholder="Пошук моделі..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc', flex: 1 }}
                />
                <select 
                    onChange={(e) => setTypeFilter(e.target.value)}
                    style={{ padding: '10px', borderRadius: '8px' }}
                >
                    <option value="All">Всі типи двигунів</option>
                    <option value="Electric">Electric</option>
                    <option value="Gasoline">Gasoline</option>
                </select>
            </div>

            <div className="car-grid">
                {filteredCars.map(car => (
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
                ))}
            </div>
        </div>
    );
};

export default Catalog;