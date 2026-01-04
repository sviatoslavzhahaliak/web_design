import React from 'react';
import CarCard from '../elements/CarCard';
import PrimaryButton from '../elements/PrimaryButton';
import Select from '../elements/Select';

const carsData = [
  { id: 1, brand: "Tesla Model S", power: 670, speed: 250, image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400" },
  { id: 2, brand: "BMW M4", power: 510, speed: 290, image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400" },
  { id: 3, brand: "Porsche 911", power: 450, speed: 308, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400" },
  { id: 4, brand: "Audi RS6", power: 600, speed: 250, image: "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?w=400" }
];

const Catalog = () => {
  return (
    <div className="catalog-page">
      <div className="catalog-controls">
        <Select 
          label="Сортувати за:" 
          options={[
            {label: 'Ціною', value: 'price'},
            {label: 'Потужністю', value: 'power'}
          ]} 
        />
        <input type="text" placeholder="Пошук авто..." className="search-input" />
        <PrimaryButton text="Застосувати" />
      </div>

      <div className="car-grid">
        {carsData.map(car => (
          <div key={car.id} className="catalog-item">
            <CarCard {...car} />
            <div style={{padding: '0 20px 20px'}}>
              <PrimaryButton text="View More" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Catalog;