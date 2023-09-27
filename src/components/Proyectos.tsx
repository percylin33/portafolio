import Link from "next/link";
import Image from "next/image";
import github from "@/acces/github.png"
import link from "@/acces/link.png"


const Proyectos = () => {
    return <div > 
        <p className="text-center">proyectos</p>
      <div className="grid grid-cols-4 gap-8 p-8">
        <div className="bg-cyan-50 h-60 flex flex-col rounded-md shadow-xl hover:bg-cyan-100 hover:shadow-2xl hover:scale-105 transition duration-300 ">
            <p className="text center mx-auto py-2">Rick and Morty</p>
            <div className="grow" > 
            
                <p>texto</p>
            </div>
            <div className="flex justify-center bottom-0 pb-2 items-center  ">
                <a href="https://github.com/percylin33/app_Rick_and_morty" target="_blank" rel="noopener noreferrer " className=" w-6 mx-auto hover:scale-110 transition duration-300 ">
                  <Image src={github} alt="link" className="w-auto"/>
                </a>
                <a href="https://github.com/percylin33/app_Rick_and_morty" target="_blank" rel="noopener noreferrer " className=" w-6 mx-auto hover:scale-110 transition duration-300" >
                  <Image src={link} alt="link" className="w-full"/>
                </a>

            </div>
        </div>
        <div className="bg-cyan-100 h-60   flex flex-col rounded-md shadow-xl  hover:bg-cyan-200">
            <p className="text center mx-auto py-2">Pokedex</p>
            <div className="grow">
                <p>texto</p>
            </div>
            <div className="flex justify-center bottom-0 pb-2 items-center  ">
                <a href="https://github.com/percylin33/app_Rick_and_morty" target="_blank" rel="noopener noreferrer " className=" w-6 mx-auto ">
                  <Image src={github} alt="link" className="w-auto"/>
                </a>
                <a href="https://github.com/percylin33/app_Rick_and_morty" target="_blank" rel="noopener noreferrer " className=" w-6 mx-auto" >
                  <Image src={link} alt="link" className="w-full"/>
                </a>

            </div>
        </div>
        <div className="bg-cyan-100 h-60   flex flex-col rounded-md shadow-xl  hover:bg-cyan-200">
            <p className="text center mx-auto py-2">Parcels</p>
            <div className="grow">
                <p>texto</p>
            </div>
            <div className="flex justify-center bottom-0 pb-2 items-center  ">
                <a href="https://github.com/percylin33/app_Rick_and_morty" target="_blank" rel="noopener noreferrer " className=" w-6 mx-auto ">
                  <Image src={github} alt="link" className="w-auto"/>
                </a>
                <a href="https://github.com/percylin33/app_Rick_and_morty" target="_blank" rel="noopener noreferrer " className=" w-6 mx-auto" >
                  <Image src={link} alt="link" className="w-full"/>
                </a>

            </div>
        </div>
        <div className="bg-cyan-100 h-60   flex flex-col rounded-md shadow-xl  hover:bg-cyan-200">
            <p className="text center mx-auto py-2">Portafolio</p>
            <div className="grow">
                <p>texto</p>
            </div>
            <div className="flex justify-center bottom-0 pb-2 items-center  ">
                <a href="https://github.com/percylin33/app_Rick_and_morty" target="_blank" rel="noopener noreferrer " className=" w-6 mx-auto ">
                  <Image src={github} alt="link" className="w-auto"/>
                </a>
                <a href="https://github.com/percylin33/app_Rick_and_morty" target="_blank" rel="noopener noreferrer " className=" w-6 mx-auto" >
                  <Image src={link} alt="link" className="w-full"/>
                </a>

            </div>
        </div>
      </div>
    </div>
  };
  
  export default Proyectos; 