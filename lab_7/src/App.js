import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './elements/Header';
import Footer from './elements/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;