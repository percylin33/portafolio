import Image from "next/image";
import about from "@/acces/about.jpeg"

const About = () => {
    return <div className="bg-gray-100 flex items-center h-screen w-screen"> 
      <div className="w-1/2 flex justify-center ">
        <Image src={about} alt="foto about" className="w-4/5 h-auto rounded-lg  "/>

      </div>
      <div className="w-1/2">
        <p className="  pl-8 font-dekko text-4xl font-bold ">Sobre mi experiencia academica </p>
        <p className=" p-8 font-dekko text-lg">Mi historia con la tecnología comenzó en 2018, en la Universidad Tecnológica del Perú (UTP). Allí tuve la oportunidad de explorar diversos lenguajes de programación, como Java, HTML, CSS, PHP, JavaScript y MySQL. Estas experiencias despertaron en mí una pasión por la programación que no había sentido antes.

Lamentablemente, la pandemia llegó y tuve que posponer mis estudios. Sin embargo, no me di por vencido. Ingresé a un bootcamp llamado HENRY, donde me sumergí en el mundo del desarrollo web Full Stack. Durante este período, perfeccioné mis habilidades en tecnologías de vanguardia tanto en el Front-end como en el Back-end. También adquirí conocimientos en bases de datos SQL y NoSQL, lo que me proporcionó una visión más completa del mundo de la tecnología.

Estoy seguro de que estas experiencias me prepararán para enfrentar desafíos aún más grandes en el futuro.
                  </p>

      </div>
    </div>
  };
  
    export default About;