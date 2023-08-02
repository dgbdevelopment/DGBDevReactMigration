import './more.css'
import { Link } from 'react-router-dom';

export function More() {
  return (
    <section className="more">      
      <div className="more-title">
        <h2>Qué más...</h2>
      </div>
      <div className="more-content">
        <div className="more-card left">
          <h3>
            <Link to="/portafolio">Portafolio</Link>
          </h3>
          <p>Trabajos, proyectos y código.</p>
        </div>
        <div className="more-card right">
          <h3>
            <Link to="/blog">Blog</Link>
          </h3>
          <p>Artículos y guías rápidas sobre desarrollo.</p>
        </div>
        <div className="more-card left">
          <h3>
            <Link to="/contacto">Contacto</Link>
          </h3>
          <p>Dime lo que quieras. Deja tu mensaje.</p>
        </div>
      </div>
    </section>
  );
}
