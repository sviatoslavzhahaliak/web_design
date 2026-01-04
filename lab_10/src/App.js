import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CarProvider } from './context/CarContext';
import Header from './elements/Header';
import Footer from './elements/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ItemPage from './pages/ItemPage';
import Cart from './pages/Cart'; // Імпортуємо нову сторінку кошика
import './App.css';

function App() {
  return (
    <CarProvider>
      <Router>
        <div className="App">
          <Header />
          <main className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/item/:id" element={<ItemPage />} />
              {/* Додаємо маршрут для сторінки кошика */}
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CarProvider>
  );
}

export default App;