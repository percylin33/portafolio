"use client"
import Image from "next/image";
import { useState } from "react";
import imageT from "@/acces/ImagenFull.png"
import imageF from "@/acces/imagenTeacher.png"

const Experience = () => {

  const [isImage1Large, setIsImage1Large] = useState(false);
  const [isImage2Large, setIsImage2Large] = useState(false);

  const toggleImageSize = (imageNumber: number) => {
    if (imageNumber === 1) {
      setIsImage1Large(!isImage1Large);
      setIsImage2Large(false);
    } else if (imageNumber === 2) {
      setIsImage2Large(!isImage2Large);
      setIsImage1Large(false);
    }
  };

  return <div className="bg-gray-100  w-screen h-[calc(100vh-4rem)] flex justify-center items-center">
  <div className="justify-center items-center">
    <h2 className="text-center p-8 font-bold text-4xl">Certificados</h2>
    <div className=" w-[80%] m-auto space-y-4 justify-center items-center md:flex md:space-x-4 md:space-y-0 ">
      <div
        className={`cursor-pointer py-4 md:py-0  ${
          isImage2Large ? "md:w-[70%] md:h-[70%]" : "md:w-[40%] md:h-[40%]"
        }`}
        onClick={() => toggleImageSize(2)}
      >
        <Image
          src={imageT} // Reemplaza con la ruta de tu segunda imagen
          alt="Image 2"
          className="w-full h-full object-cover rounded-lg md:w-[70%]"
        />
      </div>
      <div
        className={`cursor-pointer py-4 md:py-0 ${
          isImage1Large ? "md:w-[70%] md:h-[70%]" : "md:w-[40%] md:h-[40%]"
        }`}
        onClick={() => toggleImageSize(1)}
      >
        <Image
          src={imageF} // Reemplaza con la ruta de tu primera imagen
          alt="Image 1"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
</div>
  };
  
  export default Experience;
