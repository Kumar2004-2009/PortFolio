import React from "react";
import { bg } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto mb-12 lg:mb-0 md:mb-0`}>
      <section className="flex flex-col md:flex-row lg:flex-row justify-between items-start">
        {/* Left Section */}
        <div className="ml-[70px] lg:ml-[150px] md:ml-[130px] mt-[200px]">
          <div className="relative text-white flex flex-col items-start">
            {/* Line and Dot */}
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-purple-500"></div>
                <div className="w-[2px] h-40 sm:h-80 bg-gradient-to-b from-purple-500 to-transparent"></div>
              </div>

              {/* Heading and Subheading */}
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold">
                  Hi, I'm <span className="text-purple-500">Kumar Piyush</span>
                </h1>
                <p className="mt-4 text-xl lg:text-2xl text-gray-400">
                  I develop interactive, user <br className="hidden sm:block" />
                  interfaces and web applications
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center ">
          <img
            src={bg}
            alt="Your Image"
            className="ml-[20px] lg:ml-0 md:ml-0 mt-[110px] lg:mt-[180px] md:mt-[180px] w-[350px] h-[300px] lg:w-[600px] lg:h-[550px] md:w-[480px] md:h-[400px] rounded-3xl lg:mr-[270px] md:mr-[220px] mr-[70px]"
          />
        </div>
      </section>
    </section>
  );
};

export default Hero;
