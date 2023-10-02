import Link from "next/link";
import logo from "@/acces/logo-personal.png"
import Image from "next/image";
import foto from "@/acces/Diseño sin título.png"

// const Navbar = () => {
//     return <div>
//       <nav className="bg-gray-800">
//         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div>
//           <Link rel="stylesheet" href="/">
//             Imagen
//           </Link>
//         </div>

//         <div>
//           <ul>
//           <li>
//               <Link rel="stylesheet" href="/About">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link rel="stylesheet" href="/Proyect">
//                 Proyect
//               </Link>
//             </li>
//             <li>
//               <Link rel="stylesheet" href="/Contact">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div>

//         </div>
//         </div>
//       </nav>  
//     </div>
//   };
  
//   export default Navbar;



const Navbar = () => {
  return (
    <nav className="bg-custom w-screen">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
         
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href ="/" >
              <Image
                className="h-20 w-auto"
                src= {logo}
                alt="Your Company"
              />
              </Link>
            </div>
            <div className="hidden sm:ml-20 sm:block">
              <div className="flex space-x-8 pt-5">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Link
                  href="/About"
                  className="text-gray-300 hover:bg-hov hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                 <p className="font-bold">About</p> 
                </Link>
                <Link
                  href="/Skills"
                  className="text-gray-300 hover:bg-hov hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  <p className="font-bold">Skills</p> 
                </Link>
                <Link
                  href="/Proyect"
                  className="text-gray-300 hover:bg-hov hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  <p className="font-bold">Project</p> 
                </Link>
                <Link
                  href="/Contact"
                  className="text-gray-300 hover:bg-hov hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  <p className="font-bold">Contact</p> 
                </Link>
              </div>
            </div>
          </div>
        
        </div>
      </div>

      {/* Mobile menu */}
      {/* <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Team
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Calendar
          </a>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;