import { useEffect, useState } from "react";
import "./hero.css";
import { Dgb, DownArrow } from "../../assets/logos";

export function Hero() {

  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    typewritter();    
  },[])

  function typewritter() {
    const typewritter = document.querySelectorAll(".typewritter");
    if (typewritter.length === 0) return;
    type(typewritter);
  }

  function type(elements, index = 0) {
    let cont = 0;

    if (index === elements.length) {
      setShowButton(true)
      return;
    }

    elements[index].classList.add("typewritter-prompt");

    const text = elements[index].getAttribute("data-text");

    const interval = setInterval(() => {
      let char = text.charAt(cont);
      elements[index].textContent += char;
      cont++;
      if (cont === text.length) {
        clearInterval(interval);
        elements[index].classList.remove("typewritter-prompt");
        type(elements, ++index);
      }
    }, 125);
  }

  return (
    <section className="hero">
      <div className="hero-img">
        <div className="hero-content">
          <div className="hero-logo">
            <Dgb/>
          </div>
          <div className="hero-card">
            <h1 className="hero-title">
              <span data-text="Hola, soy " className="typewritter"></span>
              <span data-text="David" className="typewritter primary"></span>
            </h1>
            <h2 className="hero-text">
              <span
                data-text="Programador Web y Apps   "
                className="typewritter"
              ></span>
            </h2>
            <a href="#about" className={`hero-button  ${showButton ? " show" : ""}`}>
              <DownArrow />
              <span className="arrow-text">Continuar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
