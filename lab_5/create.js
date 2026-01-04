const API_URL = 'http://localhost:5000/cars';

document.getElementById('carForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const carData = {
        brand: document.getElementById('brand').value,
        power: document.getElementById('power').value,
        maxSpeed: document.getElementById('maxSpeed').value,
        image: document.getElementById('image').value
    };

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(carData)
    });

    // Виклик модалки (якщо вона є в HTML)
    const modal = document.getElementById('modal');
    document.getElementById('modalMessage').innerText = "Авто успішно додано!";
    modal.classList.add('show');
});

function closeModal() {
    window.location.href = 'index.html';
}