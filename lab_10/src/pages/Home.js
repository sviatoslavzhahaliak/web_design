import React, { useState } from 'react';
import Hero from '../elements/Hero';
import CarList from '../elements/CarList';

const Home = () => {
    const [isMoreVisible, setIsMoreVisible] = useState(false);

    return (
        <div>
            <Hero />
            <h2 style={{textAlign: 'center', margin: '40px 0'}}>Наші топ-моделі</h2>
            <CarList />
            
            <div style={{ textAlign: 'center', margin: '40px' }}>
                <button 
                    className="btn-edit" 
                    onClick={() => setIsMoreVisible(!isMoreVisible)}
                    style={{ padding: '15px 40px', fontSize: '1.1rem' }}
                >
                    {isMoreVisible ? "Приховати деталі" : "Показати більше"}
                </button>
                
                {isMoreVisible && (
                    <div style={{ marginTop: '20px', padding: '30px', background: '#fff', borderRadius: '15px', border: '2px dashed #6366f1' }}>
                        <h3>🚀 Чому обирають нас?</h3>
                        <p>Ми надаємо 5 років гарантії на всі електрокари та безкоштовний сервіс протягом першого року!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;