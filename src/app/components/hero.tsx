/* eslint-disable @typescript-eslint/no-require-imports */
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import hero from "@/app/assests/picture.png"

const Hero = () => {
  return (
    <div>
      <section className="bg-slate-500 body-font">
        <div className="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">
              I am Engr.Rumaisa Shakeel
            </h1>
            <div className="w-[430px] h-[2px] bg-gray-700">

            </div>
            <p className="mb-8 leading-relaxed">
            Welcome to my PortFolio!I am an ambitious undergraduate electrical engineer with a passion for innovation and a keen interest in harnessing technology to drive positive change.With a solid foundation in circuit analysis, electronics, and signal systems, I am eager to contribute my skills to real-world projects. I am excited to continue exploring advancements in power generation and automation, aiming to make a meaningful impact in shaping the future of technology.
I am driven by a desire to create practical and sustainable solutions for real-world problems. I firmly believe that every obstacle is an opportunity in disguise, and I thrive in dynamic environments where teamwork and creativity converge.
            </p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <Link href={"#Contact"}>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Contact
              </button>
              </Link>
            </div>
            
            <div className="flex lg:flex-row md:flex-col">
  
  </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded mx-auto h-[640px] "
              alt="hero"
              src={hero}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
