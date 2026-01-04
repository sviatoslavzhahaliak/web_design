document.getElementById('carForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newCar = {
        id: Date.now(),
        brand: document.getElementById('brand').value,
        power: document.getElementById('power').value,
        maxSpeed: document.getElementById('maxSpeed').value,
        image: document.getElementById('image').value
    };

    const cars = JSON.parse(localStorage.getItem('cars_data')) || [];
    cars.push(newCar);
    localStorage.setItem('cars_data', JSON.stringify(cars));

    showModal("Авто успішно додано! Зараз вас буде перенаправлено.");
});

function showModal(msg) {
    document.getElementById('modalMessage').innerText = msg;
    document.getElementById('modal').classList.add('show');
}

function closeModal() {
    window.location.href = 'index.html';
}