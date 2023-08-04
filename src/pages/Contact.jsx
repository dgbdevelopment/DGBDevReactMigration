import { Link } from "react-router-dom";
import { Twitter, Github, Linkedin, Facebook, Stackoverflow, Devto } from "../assets/svg/logos";
import "./contact.css";
import { useState } from "react";

export function Contact() {

  const [sending, setSending] = useState(false)
  const [resultMessage, setResultMessage] = useState({ message: "Deja tu mensaje", class: "text" });

  const sendMessage = (body) => {
    fetch('https://admin.dgbdevelopment.com/mail', {
      method: "POST",
      body,
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {        
        setResultMessage({ message: data.message, class: "primary" });        
      })
      .catch(() => { 
        setResultMessage({ message: "Error. Mensaje no enviado", class: "error" })
      })
      .finally(()=> setSending(false));
  }
  
  const handleSubmit = (e => {
    e.preventDefault();
    const form = e.target
    const fields = Object.fromEntries(new window.FormData(form));
    const { email, message } = fields
    if (email.trim() === '' || message.trim() === '') {
      return setResultMessage({ message: "Email y mensaje son campos obligatorios", class: "error" })
    }
    setSending(true);
    setResultMessage({ message: "Enviando mensaje...", class: "text" })    
    const body = new URLSearchParams(fields)
    sendMessage(body);
  })

  const handleFocus = (e) => {
    e.target.classList.add("selected");
  };

  const handleBlur = (e) => {
    const element = e.target;
    if (element.value.trim() !== "") return;
    element.classList.remove("selected");
  };

  return (
    <section className="contact">
      <div className="img">
        <img src="src/assets/img/contact.jpg" />
      </div>
      <div className="form">
        <div className="form-title">
          <h2 >Contacto</h2>
        </div>
        <div className="form-description">
          <h3>
            {sending && <img
              className="loader"
              id="loader"
              src="src/assets/img/loader.svg"
            />}
            <span className={`result ${resultMessage.class}` }>
              {resultMessage.message}
            </span>
          </h3>
        </div>        
        <form
          className="form-content"
          id="contact-form"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <input
              className="form-input"
              type="email"
              name="email"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <label className="form-label" htmlFor="email">
              Tu email
            </label>
          </div>
          <div className="form-group">
            <textarea
              className="form-textarea"
              name="message"
              onFocus={handleFocus}
              onBlur={handleBlur}
            ></textarea>
            <label className="form-label" htmlFor="message">
              Mensaje
            </label>
          </div>
          <div className="form-group">
            <input
              className="form-submit"
              type="submit"
              value="Enviar"
            />
          </div>
        </form>
      </div>
      <div className="social">
        <Link
          to="https://github.com/dgbdevelopment"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </Link>
        <Link
          to="https://twitter.com/dgbdevelopment"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter />
        </Link>
        <Link
          to="https://www.linkedin.com/in/david-guerrero-bernal-66a590169/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin/>
        </Link>
        <Link
          to="https://facebook.com/dgbdevelopment"
          target="_blank"
          rel="noreferrer"
        >
          <Facebook/>
        </Link>
        <Link
          to="https://stackoverflow.com/users/14193075/dgb-development"
          target="_blank"
          rel="noreferrer"
        >
          <Stackoverflow/>
        </Link>
        <Link
          to="https://dev.to/dgbdevelopment"
          target="_blank"
          rel="noreferrer"
        >
          <Devto/>
        </Link>
      </div>
    </section>
  );
}
