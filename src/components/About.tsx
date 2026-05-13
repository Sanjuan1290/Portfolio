import React from "react";
import { FaLaptopCode, FaLightbulb } from "react-icons/fa";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About: React.FC = () => {
  const { ref: sectionRef, visible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="min-h-screen flex flex-col items-center justify-center px-8 py-20 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]"
    >
      <h2
        className={`text-4xl font-bold mb-12 text-white scroll-hidden ${visible ? "scroll-visible" : ""}`}
      >
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl">
        {/* Profile Image */}
        <div
          className={`relative scroll-hidden-left ${visible ? "scroll-visible" : ""}`}
        >
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
        <div
          className={`flex-1 text-center md:text-left scroll-hidden-right ${visible ? "scroll-visible" : ""} delay-200`}
        >
          <h3 className="text-3xl font-semibold text-pink-400 mb-4">
            I'm Robert San Juan
          </h3>
          <p className="text-gray-300 mb-8">
            I'm a passionate full stack developer who loves building
            interactive and user-friendly applications. I specialize in React,
            Node.js, and Tailwind CSS, and I enjoy creating modern solutions
            that bring ideas to life.
          </p>

          <div className="grid gap-4">
            <div
              className={`flex items-center gap-3 p-4 border border-pink-500 rounded-lg hover:bg-pink-500/10 transition scroll-hidden ${visible ? "scroll-visible" : ""} delay-300`}
            >
              <FaLaptopCode className="text-pink-400 text-xl" />
              <span className="text-white">Web Application Development</span>
            </div>

            <div
              className={`flex items-center gap-3 p-4 border border-cyan-500 rounded-lg hover:bg-cyan-500/10 transition scroll-hidden ${visible ? "scroll-visible" : ""} delay-400`}
            >
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