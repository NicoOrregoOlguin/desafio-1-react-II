// Contacto.jsx
import React from 'react';
import './Contacto.css'; 

function Contacto() {
  return (
    <div className="contact-container">
      <h1>Cuéntanos, ¿en qué te podemos ayudar?</h1>
      <form className="contact-form">
        <label htmlFor="email">Correo:</label>
        <input type="email" id="email" name="email" placeholder="name@example.com" />
        
        <label htmlFor="description">Descripción:</label>
        <textarea id="description" name="description" rows="4" placeholder="Descripción"></textarea>
        
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
