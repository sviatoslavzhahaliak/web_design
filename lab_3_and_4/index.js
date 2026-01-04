const defaultData = [
    { id: 1, brand: "Tesla Model 3", power: 450, maxSpeed: 233, image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400" },
    { id: 2, brand: "BMW M5", power: 600, maxSpeed: 305, image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400" },
    { id: 3, brand: "Audi RS6", power: 591, maxSpeed: 250, image: "" } 
];

function loadCars() {
    let stored = localStorage.getItem('cars_data');
    if (!stored || JSON.parse(stored).length === 0) {
        localStorage.setItem('cars_data', JSON.stringify(defaultData));
        return defaultData;
    }
    return JSON.parse(stored);
}

function render(cars) {
    const list = document.getElementById('carList');
    list.innerHTML = cars.map(car => {
        // Логіка: якщо посилання є, створюємо тег img, якщо немає - ставимо заглушку
        const imageHtml = car.image 
            ? `<img src="${car.image}" class="car-image" alt="${car.brand}" onerror="this.parentElement.innerHTML='<span class=\'no-image-text\'>🖼️ Фото недоступне</span>'">`
            : `<span class="no-image-text">🖼️ Зображення відсутнє</span>`;

        return `
        <div class="car-card">
            <div class="image-container">
                ${imageHtml}
            </div>
            <div class="car-info">
                <h3>${car.brand}</h3>
                <p>Потужність: <b>${car.power} HP</b></p>
                <p>Швидкість: <b>${car.maxSpeed} km/h</b></p>
                <button onclick="location.href='edit.html?id=${car.id}'" class="btn btn-edit"> Редагувати</button>
            </div>
        </div>
        `;
    }).join('');
}

// Події (пошук, сортування, підрахунок) залишаються без змін...
document.getElementById('searchInput').addEventListener('input', (e) => {
    const filtered = loadCars().filter(c => c.brand.toLowerCase().includes(e.target.value.toLowerCase()));
    render(filtered);
});

document.getElementById('sortBtn').addEventListener('click', () => {
    const sorted = [...loadCars()].sort((a, b) => b.maxSpeed - a.maxSpeed);
    render(sorted);
});

document.getElementById('countBtn').addEventListener('click', () => {
    const total = loadCars().reduce((sum, c) => sum + Number(c.power), 0);
    document.getElementById('totalResult').innerText = `📊 Загальна потужність: ${total} к.с.`;
});

document.addEventListener('DOMContentLoaded', () => render(loadCars()));