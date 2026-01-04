import CarCard from './CarCard';

const carsData = [
  { id: 1, brand: "Tesla Model S", power: 670, speed: 250, image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400" },
  { id: 2, brand: "BMW M4", power: 510, speed: 290, image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400" },
  { id: 3, brand: "Porsche 911", power: 450, speed: 308, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400" }
];

const CarList = () => (
  <div className="car-grid">
    {carsData.map(car => (
      <CarCard 
        key={car.id} 
        brand={car.brand} 
        power={car.power} 
        speed={car.speed} 
        image={car.image} 
      />
    ))}
  </div>
);
export default CarList;