const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let cars = [
    { id: "1", brand: "Tesla Model 3", power: 450, maxSpeed: 233, image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400" },
    { id: "2", brand: "BMW M5", power: 600, maxSpeed: 305, image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400" }
];

app.get('/cars', (req, res) => res.json(cars));

app.get('/cars/:id', (req, res) => {
    const car = cars.find(c => c.id === req.params.id);
    res.json(car);
});

app.post('/cars', (req, res) => {
    const newCar = { id: Date.now().toString(), ...req.body };
    cars.push(newCar);
    res.status(201).json(newCar);
});

app.put('/cars/:id', (req, res) => {
    const index = cars.findIndex(c => c.id === req.params.id);
    if (index !== -1) {
        cars[index] = { id: req.params.id, ...req.body };
        res.json(cars[index]);
    } else {
        res.status(404).json({ message: "Not found" });
    }
});

app.delete('/cars/:id', (req, res) => {
    cars = cars.filter(c => c.id !== req.params.id);
    res.status(204).send();
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));