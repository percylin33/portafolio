import Link from "next/link";
import logo from "@/acces/logo-personal.png"
import Image from "next/image";
import foto from "@/acces/Diseño sin título.png"

const Navbar = () => {
  return (
    <nav className="bg-custom w-screen  ">
     <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
  <div className="relative flex h-16 items-center justify-between">
    <div className="flex flex-1 items-center sm:items-stretch justify-start">
      <div className="flex flex-shrink-0 items-center">
        <Link href="/"><Image className="h-20 w-auto" src={logo} alt="Your Company" /></Link>
      </div>
      <div className="sm:ml-20 sm:block">
        <input type="checkbox" id="menu" className="peer hidden" />
        <label htmlFor="menu" className="bg-open-menu  bg-cover bg-center peer-checked:bg-close-menu transition-all h-8 w-8 absolute top-3 right-4 z-50 md:hidden"><span className="text-cyan-950 z-50">-----</span></label>
       
        <div className="space-x-8 pt-5 fixed inset-0 bg-gradient-to-b from-cyan-500/70 to-cyan-900/70 translate-x-full peer-checked:translate-x-0 transition-transform z-10 md:static md:flex md:bg-none md:translate-x-0">
       
          <div className="absolute inset-0 top-20 p-12 bg-slate-300 w-[80%] mx-auto h-max rounded-md text-center grid gap-6 font-bold shadow-2xl md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static ">
            <Link href="/About" className=" hover:bg-hov text-black rounded-md px-3 py-2 text-sm font-medium md:text-white" >
              <p className="font-bold">About</p>
            </Link>
            <Link href="/Skills" className=" hover:bg-hov text-black rounded-md px-3 py-2 text-sm font-medium md:text-white">
              <p className="font-bold">Skills</p>
            </Link>
            <Link href="/Proyect" className=" hover:bg-hov text-black rounded-md px-3 py-2 text-sm font-medium md:text-white">
              <p className="font-bold">Projects</p>
            </Link>
            <Link href="/Experience" className=" hover:bg-hov text-black rounded-md px-3 py-2 text-sm font-medium md:text-white">
              <p className="font-bold">Experience</p>
            </Link>
            <Link href="/Contact" className=" hover:bg-hov text-black rounded-md px-3 py-2 text-sm font-medium md:text-white">
              <p className="font-bold">Contact</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Mobile menu */}
      {/* <div className="sm:hidden" id="mobile-menu">
        <input type="checkbox" id="menu" />
        <label htmlFor="menu">Activa/Desactiva</label>
        <div className="space-y-1 px-2 pb-3 pt-2 ">
          <Link
            href="/About"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            About
          </Link>
          <Link
            href="/Skills"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Skills
          </Link>
          <Link
            href="/Proyect"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Projects
          </Link>
          <Link
            href="/Experience"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Experience
          </Link>
          <Link
            href="/Contact"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Contact
          </Link>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;