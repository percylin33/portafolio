import Link from "next/link";
import Image from "next/image";
import github from "@/acces/github.png"
import link from "@/acces/link.png"


const Proyectos = () => {
    return <div className="bg-gray-100"> 
        <p className="text-center  text-4xl p-10  font-bold font-secular">Proyectos</p>
      <div className="grid grid-cols-1 gap-8 p-8 pt-4 md:grid-cols-2 lg:grid-cols-4">

      <div className="bg-cyan-50 h-64 flex flex-col rounded-md shadow-xl hover:bg-cyan-100 hover:shadow-2xl hover:scale-105 transition duration-300 ">
            <p className="text-center text-xl mx-auto py-2 font-bold ">Back Office</p>
            <div  className="grow relative bg-cover bg-center opacity-80 mx-6 rounded-md" style={{ backgroundImage: 'url("/imagenes/back-office.png")' }}>    
            </div>
            <div className="p-2 px-6 max-h-[40%]  overflow-y-auto  scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-slate-300 ">
              <p className="font-medium ">Proyecto donde realizamos una página donde los socios pueden comprar suscripciones a proyectos de inversión y dar seguimiento a sus pagos de cuotas. Usamos Angular y Java Reactivo en un enfoque de microservicios.</p>
            </div>

            <div className="flex justify-center bottom-0 pb-2 items-center  ">
                <a href="https://github.com/percylin33" target="_blank" rel="noopener noreferrer " className=" w-6 mx-auto hover:scale-110 transition duration-300 ">
                  <Image src={github} alt="link" className="w-auto"/>
                </a>
                <a href="https://gateway-dev.inclub.world/backoffice/profile/partner" target="_blank" rel="noopener noreferrer " className=" w-6 mx-auto hover:scale-110 transition duration-300" >
                  <Image src={link} alt="link" className="w-full"/>
                </a>
            </div>
        </div>
        
        <div className="bg-cyan-50 h-64 flex flex-col rounded-md shadow-xl hover:bg-cyan-100 hover:shadow-2xl hover:scale-105 transition duration-300 ">
            <p className="text-center text-xl mx-auto py-2 font-bold ">Parcels</p>
            <div  className="grow relative bg-cover bg-center opacity-80 mx-6 rounded-md" style={{ backgroundImage: 'url("/imagenes/logoIcon.png")' }}>    
            </div>
            <div className="p-2 px-6  max-h-[40%]  overflow-y-auto  scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-slate-300  ">
              <p className="font-medium ">Proyecto grupal ecommerce inmobiliario con Pasarelas de pago · React, NodeJS, MongoDB, Mercado Pago, Cloudinary, NextJS, Tailwind-CSS y TypeScript.</p>
            </div>

            <div className="flex justify-center bottom-0 pb-2 items-center  ">
                <a href="https://github.com/LucasRibotta/Project-Parcels" target="_blank" rel="noopener noreferrer " className=" w-6 mx-auto hover:scale-110 transition duration-300 ">
                  <Image src={github} alt="link" className="w-auto"/>
                </a>
                <a href="https://parcelas.vercel.app/" target="_blank" rel="noopener noreferrer " className=" w-6 mx-auto hover:scale-110 transition duration-300" >
                  <Image src={link} alt="link" className="w-full"/>
                </a>
            </div>
        </div>

        <div className="bg-cyan-50 h-64 flex flex-col rounded-md shadow-xl hover:bg-cyan-100 hover:shadow-2xl hover:scale-105 transition duration-300 ">
            <p className="text-center text-xl mx-auto py-2 font-bold ">Dashboard</p>
            <div  className="grow relative bg-cover bg-center opacity-80 mx-6 rounded-md" style={{ backgroundImage: 'url("/imagenes/curso-next.png")' }}>    
            </div>
            <div className="p-2 px-6 max-h-[40%]  overflow-y-auto  scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-slate-300 ">
              <p className="font-medium ">Proyecto de un Dashboard donde implemento lo nuevo de NextJS 14, NextAuth, TypeScript, Tailwind-CSS y React</p>
            </div>

            <div className="flex justify-center bottom-0 pb-2 items-center  ">
                <a href="https://github.com/percylin33/cuso-next" target="_blank" rel="noopener noreferrer " className=" w-6 mx-auto hover:scale-110 transition duration-300 ">
                  <Image src={github} alt="link" className="w-auto"/>
                </a>
                <a href="https://cuso-next.vercel.app/" target="_blank" rel="noopener noreferrer " className=" w-6 mx-auto hover:scale-110 transition duration-300" >
                  <Image src={link} alt="link" className="w-full"/>
                </a>
            </div>
        </div>

        <div className="bg-cyan-50 h-64 flex flex-col rounded-md shadow-xl hover:bg-cyan-100 hover:shadow-2xl hover:scale-105 transition duration-300 ">
            <p className="text-center text-xl mx-auto py-2 font-bold ">Portafolio</p>
            <div  className="grow relative bg-cover bg-center opacity-80 mx-6 rounded-md" style={{ backgroundImage: 'url("/imagenes/logo-personal.png")' }}>    
            </div>
            <div className="p-2 px-6 max-h-[40%]  overflow-y-auto  scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-slate-300  ">
              <p className="font-medium ">Proyecto en el que creo un portafolio personalizado donde utilizo mis habilidades en TypeScript, Next, Tailwind-CSS y React</p>
            </div>

            <div className="flex justify-center bottom-0 pb-2 items-center  ">
                <a href="https://github.com/percylin33/portafolio" target="_blank" rel="noopener noreferrer " className=" w-6 mx-auto hover:scale-110 transition duration-300 ">
                  <Image src={github} alt="link" className="w-auto"/>
                </a>
                <a href="https://portafolio-pied-six.vercel.app/" target="_blank" rel="noopener noreferrer " className=" w-6 mx-auto hover:scale-110 transition duration-300" >
                  <Image src={link} alt="link" className="w-full"/>
                </a>
            </div>
        </div>

        <div className="bg-cyan-50 h-64 flex flex-col rounded-md shadow-xl hover:bg-cyan-100 hover:shadow-2xl hover:scale-105 transition duration-300 ">
            <p className="text-center text-xl mx-auto py-2 font-bold ">Rick and Morty</p>
            <div  className="grow relative bg-cover bg-center opacity-80 mx-6 rounded-md" style={{ backgroundImage: 'url("/imagenes/fondo.jpg")' }}>    
            </div>
            <div className="p-2 px-6 max-h-[40%]  overflow-y-auto  scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-slate-300 ">
              <p className="font-medium ">Proyecto realizado durante el bootcamp donde aplico mis habilidades en React, CSS, Redux, Express y Postgresql.</p>
            </div>

            <div className="flex justify-center bottom-0 pb-2 items-center  ">
                <a href="https://github.com/percylin33/app_Rick_and_morty" target="_blank" rel="noopener noreferrer " className=" w-6 mx-auto hover:scale-110 transition duration-300 ">
                  <Image src={github} alt="link" className="w-auto"/>
                </a>
                <a href="https://app-rick-and-morty-nm2s.vercel.app/" target="_blank" rel="noopener noreferrer " className=" w-6 mx-auto hover:scale-110 transition duration-300" >
                  <Image src={link} alt="link" className="w-full"/>
                </a>
            </div>
        </div>

        <div className="bg-cyan-50 h-64 flex flex-col rounded-md shadow-xl hover:bg-cyan-100 hover:shadow-2xl hover:scale-105 transition duration-300 ">
            <p className="text-center text-xl mx-auto py-2 font-bold ">Pokedex</p>
            <div  className="grow h-[40%] relative bg-cover bg-center opacity-80 mx-6 rounded-md" style={{ backgroundImage: 'url("/imagenes/pokemon.png")' }}>    
            </div>
            <div className="p-2 px-6 max-h-[40%]  overflow-y-auto  scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-slate-300 ">
              <p className="font-medium ">App donde implementé diversos filtros y operaciones CRUD aplicando con JS, React, Redux, Express, NodeJS, Postgresql.</p>
            </div>

            <div className="flex justify-center bottom-0 pb-2 items-center ">
                <a href="https://github.com/percylin33/PI-POKEMON" target="_blank" rel="noopener noreferrer " className=" w-6 mx-auto hover:scale-110 transition duration-300 ">
                  <Image src={github} alt="link" className="w-auto"/>
                </a>
                <a href="https://pi-pokemon-amber.vercel.app" target="_blank" rel="noopener noreferrer " className=" w-6 mx-auto hover:scale-110 transition duration-300" >
                  <Image src={link} alt="link" className="w-full"/>
                </a>
            </div>
        </div>

      </div>
    </div>
  };
  
  export default Proyectos; 