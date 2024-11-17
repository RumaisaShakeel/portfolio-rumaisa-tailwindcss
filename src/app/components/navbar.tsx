/* eslint-disable @typescript-eslint/no-require-imports */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import navbar from "@/app/assests/logo.png"


const Navbar = () => {
  return (
    <div className="bg-slate-300 sticky top-0 z-50">
      <header className="text-gray-600 body-font">
        <div className="bg-slate-300 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
            src={navbar}
             alt="Rumaisa "
             width={100} height={100} className="w-[50px]"/>
           

           <span className="ml-3 text-xl">Rumaisa Shakeel</span>
          </a>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"#Hero"} className="mr-5 hover:text-purple-900">Home</Link>
            <Link href={"#About" }className="mr-5 hover:text-purple-900">About</Link>
            <Link href={"#Contact"}className="mr-5 hover:text-purple-900">Contact</Link>
        
          </nav>
            <a href="/assest/RumaisaCV.pdf">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">

            Download CV
            <FaCloudDownloadAlt />
           
          </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
