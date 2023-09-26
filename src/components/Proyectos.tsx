import Link from "next/link";
import Image from "next/image";
import github from "@/acces/github.png"
import link from "@/acces/link.png"


const Proyectos = () => {
    return <div > 
        <p className="text-center">proyectos</p>
      <div className="grid grid-cols-4 gap-8 p-8">
        <div className="bg-cyan-600 h-60">
            <p className="text center">Rick and Morty</p>
            <div>
                <p>texto</p>
            </div>
            <div className="flex space-x">
                <a href="https://github.com/percylin33/app_Rick_and_morty" target="_blank" rel="noopener noreferrer ">
                  <Image src={github} alt="link" className="w-1/5"/>
                </a>
                <a href="https://github.com/percylin33/app_Rick_and_morty" target="_blank" rel="noopener noreferrer ">
                  <Image src={link} alt="link" className="w-1/5"/>
                </a>

            </div>
        </div>
        <div className="bg-cyan-600 h-60">
            <p>Pokedex</p>
        </div>
        <div className="bg-cyan-600 h-60">
            <p>Parcels</p>
        </div>
        <div className="bg-cyan-600 h-60">
            <p>Portafolio</p>
        </div>
      </div>
    </div>
  };
  
  export default Proyectos; 