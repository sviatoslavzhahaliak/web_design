const CarCard = ({ brand, power, speed, image }) => (
  <div className="car-card">
    <div className="car-image-container">
      <img src={image || 'https://via.placeholder.com/300x200'} alt={brand} />
    </div>
    <div className="car-info">
      <h3>{brand}</h3>
      <p>⚡ Потужність: {power} HP</p>
      <p>🏁 Макс. швидкість: {speed} km/h</p>
    </div>
  </div>
);
export default CarCard;