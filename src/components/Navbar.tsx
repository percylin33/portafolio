"use client"

import Link from "next/link";
import logo from "@/acces/logo-personal.png";
import Image from "next/image";
import { useState } from 'react';
import { IoMenu, IoCloseCircleSharp } from 'react-icons/io5';

const Navbar = () => {
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

  return (
    <nav className="bg-custom w-screen relative">
      <div className={`bg-custom shadow-md w-full top-0 left-0 relative z-40`}>
        <div className="md:flex  items-center justify-between  relative z-40 ">
          <div className="flex  items-center ">
            <Link href="/" rel="preload">
              <Image className="h-20 w-auto" src={logo} alt="Your Company" />
            </Link>
          </div>
          <div onClick={() => setOpen(!open)} className="text-white text-4xl absolute right-8 top-4 cursor-pointer md:hidden">
            {open ? <IoCloseCircleSharp /> : <IoMenu />}
          </div>
          
      <ul className={`bg-custom md:flex md:items-center  md:pb-0 pb-12 md:pr-10 absolute md:static left-0 w-screen md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'left-0 opacity-100 z-20' : 'left-screen md:opacity-100 opacity-0 z-10'}`}>
        {linkNav.map((li) => (
          <li key={li.name} className="md:ml-8 text-xl md:my-0 my-7" onClick={closeMenu}>
            <Link href={li.link} className="text-white font-medium hover:text-gray-400 duration-500">
              {li.name}
            </Link>
          </li>
        ))}
      </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
