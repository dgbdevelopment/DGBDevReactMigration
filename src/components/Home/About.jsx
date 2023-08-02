import './about.css';
import { logos } from '../../config/config.js';

export function About() {

  return (
    <section id="about" className="about">
      <h2 className="about-title neu-text">Mis lenguajes, herramientas y frameworks</h2>
      <div className="about-me">
        <div className="about-photo neu-border-with-inset"></div>
        <div className="about-text">
          <p>Desarrollador  web enfocado principalmente al Frontend con conocimientos suficientes de  Backend como para poder  crear mis propias aplicaciones.</p>
          <p>He aprendido por mi cuenta siguiendo tutoriales y videos, haciendo cursos online, leyendo la documentación oficial y siguiendo consejos de otros desarrolladores más experimentados. Sin olvidar lo más importante: practicar, practicar y practicar.</p>
          <p>Aficionado al desarrollo de videojuegos.</p>
          <p>Lo mejor de la programación es que nunca terminas de aprender.</p>
        </div>
      </div>      
      {Object.keys(logos).map(key => (
        <div key={ key } className={`about-${key}`}>
        <div className="about-card neu-border">
            <h3 className="card-title neu-text">{ logos[key].name }</h3>
          <div className="card-content neu-inset-border">
            {logos[key].content.map(elem => (
              <div className="card-logos" key={elem.filename}>
                <img className='logo-img' src={`src/assets/svg/skills/${elem.filename}`} alt={`Logo de ${elem.name}`} />
                <p className="logo-text">{ elem.name }</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      ))}
    </section>
  )
}