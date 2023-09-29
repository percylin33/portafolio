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
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>

            {/* Profile dropdown */}
            <div className="relative ml-3">
              {/* <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className="h-8 w-8 rounded-full"
                    src={foto}
                    alt="myfoto"
                  />
                </button>
              </div> */}

              {/* Dropdown menu */}
             
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