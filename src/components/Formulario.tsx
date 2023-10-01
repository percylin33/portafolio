"use client"

import React, { useState, ChangeEvent, FormEvent } from "react";


const Formulario = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // Enviar el mensaje al correo electrónico
    const data = {
      name: name,
      email: email,
      message: message,
    };

    await fetch("http://localhost:3000/api/mail", {
      method: "POST",
      body: JSON.stringify(data),
    });

    // Limpiar los campos del formulario
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <div>
        <div></div>
        <div>
          <h1>Escribeme</h1>
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="name">Nombre</label>
              <div>
                <input
                  id="name"
                  placeholder="Nombre"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email">Correo electrónico</label>
              <div>
                <input
                  id="email"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message">Mensaje</label>
              <div>
                <input
                  id="message"
                  placeholder="Mensaje"
                  value={message}
                  onChange={handleMessageChange}
                />
              </div>
            </div>
            <div>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
