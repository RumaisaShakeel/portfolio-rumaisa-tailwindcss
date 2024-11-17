import React from "react";

const About = () => {
  return (
    <div id="About">
      <section className="bg-slate-400 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              About Me
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"></div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Undergraduate Electrical Engineer.
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Final Year Engineering student of Ned University Of Engineering and Technology
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"></div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Web Developer
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                 GIAIC Quarter 2 Student.
                 Skilled in HTML,CSS,NextJs and Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
  
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Graphic Designer
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Canva Professional.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
