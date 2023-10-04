"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import foto1 from "@/acces/foto1.png";
import foto2 from "@/acces/foto2.png";
import logo from "@/acces/logo-personal.png";

const Home = () => {
  const photos = [foto1, foto2, logo];
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Comenzar la transición de salida
      setFadeOut(true);

      // Después de 500 ms (duración de la transición), cambiar la imagen y reiniciar la transición
      setTimeout(() => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
        setFadeOut(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100  items-center  w-screen h-screen lg:h-[calc(100vh-4rem)] lg:flex ">
      <div className="pb-10 w-full pt-4 lg:w-1/2">
        <div className="bg-fondo flex justify-center w-[60%] mx-auto text-center rounded-lg ">
          <Image src={photos[currentPhotoIndex]} alt="my photo" className={`rounded-lg h-64 sm:h-96 w-80 m-auto text-center transition-opacity ${fadeOut ? "opacity-0" : "opacity-100"}` } />
        </div>
      </div>
      <div className="w-full p-4 lg:w-1/2 lg:p-0">
        <h1 className="text-4xl pb-10 font-bold lg:pr-20 ">Hola!! Soy <span className="text-cyan-800 ">Percy Valderrama</span>, Bienvenidos a mi Portafolio</h1>
        <p className="text-xl lg:pr-20 ">La creatividad es la chispa que da vida a mi trabajo👩‍💻. Cada proyecto es un lienzo en blanco donde puedo dar vida a mis ideas y expresar mi pasión por el codigo. <br /> <br /> Bienvenido a mi mundo creativo 🎨, donde cada detalle cuenta y cada pixel tiene un propósito. Explora mi portafolio y descubre cómo puedo ayudarte a dar vida a tus proyectos.</p>
      </div>
    </div>
  );
};

export default Home;
