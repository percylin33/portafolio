"use client"
import Image from "next/image";
import correo from "@/acces/icon/correo.png"
import linken from "@/acces/icon/linkedin.png"
import git from "@/acces/icon/github_5968846.png"
import telefono from "@/acces/icon/telefono.png"
import peru from "@/acces/icon/peru.png"

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

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return (
<div className="flex ">
  <div className="bg-cyan-100 p-6 rounded-lg shadow-lg w-3/5  m-10" >
    <h1 className="text-2xl font-semibold mb-4">Escribeme</h1>
    <form onSubmit={onSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold">Nombre</label>
        <input
          id="name"
          type="text"
          className="border border-gray-300 rounded-md py-2 px-3 w-[60%]"
          placeholder="Nombre"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold">Correo electrónico</label>
        <input
          id="email"
          type="email"
          className="border border-gray-300 rounded-md py-2 px-3 w-[60%]"
          placeholder="Correo electrónico"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold">Mensaje</label>
        <textarea
          id="message"
          className="border border-gray-300 rounded-md py-2 px-3 w-full"
          placeholder="Mensaje"
          value={message}
          onChange={handleMessageChange}
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-custom text-white py-2 px-4 rounded-full hover:bg-cyan-800"
        >
          Enviar
        </button>
      </div>
    </form>
  </div>
  <div className="w-2/5 m-10 pt-8">
  <div className="items-center mb-4">
    <a href="www.linkedin.com/in/percy-valderrama-5a3244274" className="flex">
    <Image
      src={linken}
      alt="Descripción de la imagen 1"
      className="w-6 h-6 mr-2"
    />
    <span>www.linkedin.com/in/percy-valderrama-5a3244274</span>
    </a>
  </div>
  
  <div className="flex items-center mb-4">
    <a href="https://github.com/percylin33" className="flex">
    <Image
      src={git}
      alt="Descripción de la imagen 1"
      className="w-6 h-6 mr-2"
    />
    <span>https://github.com/percylin33</span>
    </a>
  </div>

  <div className="flex items-center mb-4">
    <div className="flex">
    <Image
      src={correo}
      alt="Descripción de la imagen 1"
      className="w-6 h-6 mr-2"
    />
    <span>p3r.valderrama@gmail.com</span>
    </div>
  </div>
  <div className="flex items-center mb-4">
    <div className="flex">
    <Image
      src={telefono}
      alt="Descripción de la imagen 1"
      className="w-6 h-6 mr-2"
    />
    <span>+51 940101228</span>
    </div>
  </div>

  <div className="flex items-center mb-4">
    <div className="flex">
    <Image
      src={peru}
      alt="Imagen de Peru"
      className="w-6 h-6 mr-2"
    />
    <span>Peru</span>
    </div>
  </div>
  
  <div className="flex justify-center items-cente pt-10 ">
      <a href="/pdfs/PDFcurriculum.pdf" download className="bg-custom text-white font-bold py-2 px-4 rounded hover:bg-cyan-800">
        Descargar CV
      </a>
  </div>
  </div>
</div>
  );
};

export default Formulario;
