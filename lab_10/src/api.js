import axios from 'axios';

const API_URL = 'http://localhost:5000/cars';

export const fetchCars = async (filters = {}) => {
    // Передаємо фільтри як параметри URL (наприклад, ?type=Electric)
    const response = await axios.get(API_URL, { params: filters });
    return response.data;
};

export const fetchCarById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};