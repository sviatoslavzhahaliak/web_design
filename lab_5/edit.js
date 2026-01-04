const API_URL = 'http://localhost:5000/cars';
const carId = new URLSearchParams(window.location.search).get('id');

async function loadCar() {
    const res = await fetch(`${API_URL}/${carId}`);
    const car = await res.json();
    
    document.getElementById('brand').value = car.brand;
    document.getElementById('power').value = car.power;
    document.getElementById('maxSpeed').value = car.maxSpeed;
    document.getElementById('image').value = car.image || "";
}

document.getElementById('editForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const updatedCar = {
        brand: document.getElementById('brand').value,
        power: document.getElementById('power').value,
        maxSpeed: document.getElementById('maxSpeed').value,
        image: document.getElementById('image').value
    };

    await fetch(`${API_URL}/${carId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedCar)
    });

    const modal = document.getElementById('modal');
    document.getElementById('modalMessage').innerText = "Дані оновлено на сервері!";
    modal.classList.add('show');
});

function closeModal() {
    window.location.href = 'index.html';
}

loadCar();