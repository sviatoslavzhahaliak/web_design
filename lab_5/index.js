const API_URL = 'http://localhost:5000/cars';

async function fetchCars() {
    try {
        const res = await fetch(API_URL);
        const cars = await res.json();
        render(cars);
    } catch (err) {
        console.error("Сервер не доступний!");
    }
}

function render(cars) {
    const list = document.getElementById('carList');
    list.innerHTML = cars.map(car => `
        <div class="car-card">
            <div class="image-container">
                ${car.image ? `<img src="${car.image}" class="car-image">` : '<span class="no-image-text">🖼️ Немає фото</span>'}
            </div>
            <div class="car-info">
                <h3>${car.brand}</h3>
                <p>Потужність: <b>${car.power} HP</b></p>
                <button onclick="location.href='edit.html?id=${car.id}'" class="btn btn-edit">✏️ Редагувати</button>
                <button onclick="deleteCar('${car.id}')" class="btn btn--secondary" style="margin-top:10px; width:100%; background:#ff4d4d">🗑️ Видалити</button>
            </div>
        </div>
    `).join('');
}

async function deleteCar(id) {
    if (confirm('Видалити цей автомобіль?')) {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        fetchCars();
    }
}

document.addEventListener('DOMContentLoaded', fetchCars);