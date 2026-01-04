const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Твоя база даних (додай сюди поле "type" для фільтрації)
let cars = [
    { id: "1", brand: "Tesla Model S", power: 670, speed: 250, type: "Electric", price: 90000, image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400" },
    { id: "2", brand: "BMW M4", power: 510, speed: 290, type: "Gasoline", price: 75000, image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400" },
    { id: "3", brand: "Porsche 911", power: 450, speed: 308, type: "Gasoline", price: 120000, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400" },
    { id: "4", brand: "Audi RS6", power: 600, speed: 250, type: "Gasoline", price: 110000, image: "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?w=400" }
];

// GET з підтримкою фільтрації
app.get('/cars', (req, res) => {
    const { type } = req.query;
    if (type && type !== 'All') {
        const filtered = cars.filter(c => c.type === type);
        return res.json(filtered);
    }
    res.json(cars);
});

// GET одного авто за ID
app.get('/cars/:id', (req, res) => {
    const car = cars.find(c => c.id === req.params.id);
    if (car) res.json(car);
    else res.status(404).send("Not found");
});

app.listen(PORT, () => {
    console.log(`Сервер Lab 9 запущено на http://localhost:${PORT}`);
});