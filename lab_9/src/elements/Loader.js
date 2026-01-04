import React from 'react';
import './Loader.css';

const Loader = () => (
    <div className="loader-container">
        <div className="loader-wrapper">
            <div className="spinner"></div>
            <p className="loader-text">Завантаження...</p>
        </div>
    </div>
);

export default Loader;