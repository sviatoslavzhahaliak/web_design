import React from 'react';
import './App.css';
import Header from './elements/Header.js';
import Hero from './elements/Hero.js';
import CarList from './elements/CarList.js';
import Footer from './elements/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Hero />
        <h2 className="section-title" style={{textAlign: 'center', margin: '40px 0'}}>
          Наші пропозиції
        </h2>
        <CarList />
      </main>
      <Footer />
    </div>
  );
}

export default App;