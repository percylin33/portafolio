"use client"

import Link from "next/link";
import logo from "@/acces/logo-personal.png";
import Image from "next/image";
import { useState } from 'react';
import { IoMenu, IoCloseCircleSharp } from 'react-icons/io5';
import {usePathname} from "next/navigation"

const Navbar = () => {
  const pathname = usePathname()
  const linkNav = [
    { name: "About", link: "/About" },
    { name: "Skills", link: "/Skills" },
    { name: "Projects", link: "/Proyect" },
    { name: "Experience", link: "/Experience" },
    { name: "Contact", link: "/Contact" },
  ];

  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };
console.log(pathname);

  return (
    <nav className="bg-custom w-screen relative">
      <div className={`bg-custom shadow-md w-full top-0 left-0 relative z-40`}>
        <div className="md:flex  items-center justify-between lg:px-10 relative z-40 ">
          <div className="flex  items-center ">
            <Link href="/" rel="preload">
              <Image className="h-20 w-auto" src={logo} alt="Your Company" />
            </Link>
          </div>
          <div onClick={() => setOpen(!open)} className="text-white text-4xl absolute right-8 top-4 cursor-pointer md:hidden">
            {open ? <IoCloseCircleSharp /> : <IoMenu />}
          </div>
          
      <ul className={`bg-custom md:flex md:items-center  md:pb-0 pb-12 md:pr-10 absolute md:static left-0 w-screen md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'left-0 opacity-100 ' : 'left-screen md:opacity-100 opacity-0  hidden'}`}>
        {linkNav.map((li) => (
          <Link href={li.link} className={`text-white font-semibold hover:text-cyan-300 duration-500  `}>
              <li key={li.name} className={`md:ml-8 text-xl md:my-0 text-center my-7 ${pathname === li.link ? "bg-cyan-800 p-1 rounded-xl " : " " }`} onClick={closeMenu}> {li.name}</li>   
          </Link>  
        ))}
      </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
