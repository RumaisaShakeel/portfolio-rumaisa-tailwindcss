/* eslint-disable @typescript-eslint/no-require-imports */

import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";
import footer from "@/app/assests/logo.png"

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="bg-slate-300 px-3 py-5 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={footer}
              alt="Rumaisa "
              width={100} height={100}/>

            <span className="ml-3 text-xl ">Rumaisa Shakeel</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Rumaisa Shakeel —
 
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link target="_blank" href="https://www.linkedin.com/in/rumaisa-shakeel?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNnahgrMvRGudBnuQc0aZMQ%3D%3D">
            <div className="ml-3 text-gray-500">
            <FaLinkedin className="text-2xl hover:text-[blue]" />
            </div></Link>
            <Link target="_blank"  href="https://github.com/RumaisaShakeel">
            <div className="ml-3 text-gray-500">
            <FaGithubSquare className="text-2xl hover:text-[black]"  />
            </div></Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
