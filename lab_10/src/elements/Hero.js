import { Link } from "react-router-dom";

const Hero = () => (
  <section className="hero">
    <h1>Знайдіть авто своєї мрії</h1>
    <p>Найкращий вибір преміальних автомобілів з гарантією якості.</p>
    <button className="cta-button"><Link to="/catalog"> Переглянути каталог </Link> </button>
  </section>
);
export default Hero;