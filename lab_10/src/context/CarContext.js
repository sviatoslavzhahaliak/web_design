import React, { createContext, useState } from 'react';

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
        <CarContext.Provider value={{ cars, setCars, loading, setLoading }}>
            {children}
        </CarContext.Provider>
    );
};