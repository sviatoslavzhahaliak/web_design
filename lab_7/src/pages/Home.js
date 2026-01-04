import React from 'react';
import Hero from '../elements/Hero'; // Зверни увагу на ../ бо ми в папці pages
import CarList from '../elements/CarList';

const Home = () => {
  return (
    <>
      <Hero />
      <h2 style={{textAlign: 'center', margin: '30px 0'}}>Популярні авто</h2>
      <CarList />
    </>
  );
};

export default Home;