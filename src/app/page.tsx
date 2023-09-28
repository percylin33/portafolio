"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import foto1 from "@/acces/foto1.png";
import foto2 from "@/acces/foto2.png";
import foto3 from "@/acces/foto3.png";

const Home = () => {
  const photos = [foto1,foto2, foto3 ]
  const [currentPhotoIndex, setCurrentPhotoIndex ] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Cambiar a la siguiente foto (circularmente)
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 4000); // Cambiar cada 2 segundos

    return () => clearInterval(interval);
  }, []);
  return <div className="bg-gray-100 flex items-center h-screen w-screen "> 
  <div className="pb-10 w-1/2">
    <div  className="flex justify-center">
      <Image src={photos[currentPhotoIndex]} alt="my photo"  className="rounded-lg h-auto" />

    </div>
  </div>
    <div className="w-1/2  ">
      <h1 className="text-5xl pb-10 pr-20 font-bold">Hola!! soy Percy Valderrama, Bienvenidos a mi Portafolio</h1>
      <p className=" text-2xl pr-20 " >La creatividad es la chispa que da vida a mi trabajo. Cada proyecto es un lienzo en blanco donde puedo dar vida a mis ideas y expresar mi pasión por el diseño. Bienvenido a mi mundo creativo, donde cada detalle cuenta y cada pixel tiene un propósito. Explora mi portafolio y descubre cómo puedo ayudarte a dar vida a tus proyectos.</p>
    </div>
  </div>
};

export default Home;