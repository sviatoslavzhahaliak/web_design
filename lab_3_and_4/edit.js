const urlParams = new URLSearchParams(window.location.search);
const carId = urlParams.get('id');

const form = document.getElementById('editForm');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modalMessage');

let cars = JSON.parse(localStorage.getItem('cars_data')) || [];

const car = cars.find(c => String(c.id) === String(carId));

if (car) {
    document.getElementById('brand').value = car.brand;
    document.getElementById('power').value = car.power;
    document.getElementById('maxSpeed').value = car.maxSpeed;
    document.getElementById('image').value = car.image || "";
} else {
    alert("Помилка: авто не знайдено в базі!");
    window.location.href = 'index.html';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    cars = cars.map(c => {
        if (String(c.id) === String(carId)) {
            return {
                ...c,
                brand: document.getElementById('brand').value,
                power: document.getElementById('power').value,
                maxSpeed: document.getElementById('maxSpeed').value,
                image: document.getElementById('image').value
            };
        }
        return c;
    });

    localStorage.setItem('cars_data', JSON.stringify(cars));

    document.getElementById('modalMessage').innerText = "Зміни успішно збережено!";
    modal.classList.add('show');
});

function closeModal() {
    window.location.href = 'index.html';
}