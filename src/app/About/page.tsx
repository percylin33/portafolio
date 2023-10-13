import Image from "next/image";
import about from "@/acces/about.jpeg"

const About = () => {
    return <div className="bg-gray-100  items-center h-full w-screen lg:flex lg:h-[calc(100vh-4rem)]"> 
      <div className="w-full flex justify-center py-8 lg:w-2/5 ">
        <Image src={about} alt="foto about" className="w-4/5 h-auto rounded-lg  "/>

      </div>
      <div className="w-full p-2 lg:w-3/5 lg:pr-4 ">
        <p className="  pl-4  text-4xl font-bold font-secular">Experiencia Academica </p>
        
        <p className="p-4 text-lg">
          Mi historia con la tecnología comenzó en 2018, en la <strong>Universidad Tecnológica del Perú (UTP)</strong>. Allí tuve la oportunidad de explorar diversos lenguajes de programación como <strong>JAVA, HTML, CSS, PHP, JavaScript y MySQL</strong>. 😊 Estas experiencias despertaron en mí una pasión por la programación que no había sentido antes.
        </p>
        <p className="p-4 text-lg">
          Lamentablemente, la pandemia llegó y tuve que posponer mis estudios 😞. Sin embargo, no me di por vencido. Ingresé a un bootcamp llamado <strong>HENRY</strong>, donde me sumergí en el mundo del desarrollo web <strong>Full Stack</strong>. Durante este período, perfeccioné mis habilidades en tecnologías de vanguardia tanto en el <strong>Front-end</strong> como en el <strong>Back-end</strong>. También adquirí conocimientos en bases de datos SQL y NoSQL, lo que me proporcionó una visión más completa del mundo de la tecnología. 💪
        </p>
        <p className="p-4 text-lg">
          Estoy seguro de que estas experiencias me prepararán para enfrentar desafíos aún más grandes en el futuro. 🚀🚀
        </p>

      </div>
    </div>
  };
  
    export default About;
