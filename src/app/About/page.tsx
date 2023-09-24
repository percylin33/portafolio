import Image from "next/image";
import about from "@/acces/about.jpeg"

const About = () => {
    return <div className="bg-gray-100 flex items-center h-screen w-screen"> 
      <div className="w-1/2 flex justify-center ">
        <Image src={about} alt="foto about" className="w-4/5 h-auto rounded-lg  "/>

      </div>
      <div className="w-1/2">
        <h1 className=" p-8">Sobre mi experiencia academica </h1>
        <p className=" p-8">Hola mi historia con la tecnologia comenzo en el 2018, en la univecidas tecnologia de Peru (UTP), 
          hay conoci lenguajes de programacion como JAVA, HTML, css, PHP, JS y MySQL  los cuales despertaron 
          en mi la pasion porla programacion, luego lamentablemete llego la pandemia y tube que posponer mis estudios 
          , pero luego ingrese a bootcamp  HENRY donde estudiey  me comberti en un desarrollador web Full Stack 
          donde puli mis abilidades con tecnologias de vanguardia tanto en el Front-end como en el Back-end  ademas base de datos SQL y no SQL 
          lo cual me a dado un panorama mas amplio del mundo de la tecnologia y estoy deguro que en el futuro me llevara a por desafios mas grandes 
                  </p>

      </div>
    </div>
  };
  
    export default About;