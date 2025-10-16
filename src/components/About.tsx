import React from "react";
import { FaLaptopCode, FaLightbulb } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-8 py-20 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold mb-12 text-white">About Me</h2>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl">
        {/* Profile Image */}
        <div className="relative">
          <div className="w-64 h-64 rounded-full overflow-hidden ring-4 ring-pink-500 shadow-xl">
            <img
              src="/profile1.jpg"
              alt="Robert"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-pink-500 opacity-20 blur-2xl"></div>
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl font-semibold text-pink-400 mb-4">
            I’m Robert San Juan
          </h3>
          <p className="text-gray-300 mb-8">
            I’m a passionate full stack developer who loves building
            interactive and user-friendly applications. I specialize in React,
            Node.js, and Tailwind CSS, and I enjoy creating modern solutions
            that bring ideas to life.
          </p>

          {/* Feature Cards */}
          <div className="grid gap-4">
            <div className="flex items-center gap-3 p-4 border border-pink-500 rounded-lg hover:bg-pink-500/10 transition">
              <FaLaptopCode className="text-pink-400 text-xl" />
              <span className="text-white">Web Application Development</span>
            </div>

            <div className="flex items-center gap-3 p-4 border border-cyan-500 rounded-lg hover:bg-cyan-500/10 transition">
              <FaLightbulb className="text-cyan-400 text-xl" />
              <span className="text-white">Problem Solving</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
