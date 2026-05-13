import React from "react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiGmail } from "react-icons/si";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row items-center justify-center px-10 md:px-20 gap-12"
    >
      {/* Left Side - Text */}
      <div className="flex-1 text-center md:text-left">
        <h1
          className="text-5xl md:text-6xl font-bold animate-fade-in-down"
          style={{ animationDelay: "0.1s" }}
        >
          Hi, I'm <span className="text-pink-400">Robert</span>
        </h1>
        <h2
          className="text-2xl md:text-3xl text-pink-400 mt-4 animate-fade-in-down"
          style={{ animationDelay: "0.3s" }}
        >
          Full Stack Developer
        </h2>
        <p
          className="mt-6 max-w-lg text-gray-300 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          Crafting modern, responsive, and user-friendly websites with passion
          and precision.
        </p>

        <a
          href="/RESUME.pdf"
          download
          className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg hover:scale-105 transition animate-fade-in-up"
          style={{ animationDelay: "0.7s" }}
        >
          Download Resume
        </a>

        <div
          className="flex justify-center md:justify-start gap-6 mt-6 text-2xl animate-fade-in-up"
          style={{ animationDelay: "0.9s" }}
        >
          <a
            href="https://github.com/Sanjuan1290"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:robertrenbysanjuan@gmail.com"
            className="text-red-400 hover:text-red-500 transition hover:scale-125"
          >
            <SiGmail />
          </a>
        </div>
      </div>

      {/* Right Side - Image + Floating Icons */}
      <div
        className="flex-1 flex justify-center relative animate-scale-in"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg ring-4 ring-pink-400 animate-float">
          <img
            src="/profile1.jpg"
            alt="Robert"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-900 p-3 rounded-full shadow-lg drop-shadow-[0_0_10px_#00d8ff] animate-float"
          style={{ animationDelay: "0.2s" }}
        >
          <FaReact className="text-cyan-400 text-3xl" />
        </div>

        <div
          className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-gray-900 p-3 rounded-full shadow-lg drop-shadow-[0_0_10px_#3c873a] animate-float"
          style={{ animationDelay: "0.8s" }}
        >
          <FaNodeJs className="text-green-500 text-3xl" />
        </div>

        <div
          className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 p-3 rounded-full shadow-lg drop-shadow-[0_0_10px_#ffffff] animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <SiExpress className="text-gray-200 text-3xl" />
        </div>

        <div
          className="absolute top-1/2 -right-10 transform -translate-y-1/2 bg-gray-900 p-3 rounded-full shadow-lg drop-shadow-[0_0_10px_#38bdf8] animate-float"
          style={{ animationDelay: "1.1s" }}
        >
          <SiTailwindcss className="text-sky-400 text-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Home;