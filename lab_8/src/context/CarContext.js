import React, { createContext, useState } from 'react';

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
    const [cars] = useState([
        { id: 1, brand: "Tesla Model S", power: 670, speed: 250, type: "Electric", price: 90000, image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400" },
        { id: 2, brand: "BMW M4", power: 510, speed: 290, type: "Gasoline", price: 75000, image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400" },
        { id: 3, brand: "Porsche 911", power: 450, speed: 308, type: "Gasoline", price: 120000, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400" },
        { id: 4, brand: "Audi RS6", power: 600, speed: 250, type: "Gasoline", price: 110000, image: "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?w=400" }
    ]);

    return (
        <CarContext.Provider value={{ cars }}>
            {children}
        </CarContext.Provider>
    );
};