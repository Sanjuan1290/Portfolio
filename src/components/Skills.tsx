import React from "react";
import {
  FaReact, FaNodeJs, FaGitAlt, FaGithub,
  FaHtml5, FaCss3Alt, FaJs, FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiMysql,
  SiPostman, SiCanva, SiExpress, SiTypescript,
} from "react-icons/si";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Skills: React.FC = () => {
  const { ref: sectionRef, visible } = useScrollAnimation();

  const skills = [
    { name: "HTML",       icon: <FaHtml5     className="text-orange-500 text-3xl" /> },
    { name: "CSS",        icon: <FaCss3Alt   className="text-blue-500 text-3xl"   /> },
    { name: "JavaScript", icon: <FaJs        className="text-yellow-400 text-3xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400 text-3xl"  /> },
    { name: "React",      icon: <FaReact     className="text-cyan-400 text-3xl"   /> },
    { name: "Express",    icon: <SiExpress   className="text-gray-300 text-3xl"   /> },
    { name: "Node.js",    icon: <FaNodeJs    className="text-green-500 text-3xl"  /> },
    { name: "Tailwind",   icon: <SiTailwindcss className="text-sky-400 text-3xl"  /> },
    { name: "MongoDB",    icon: <SiMongodb   className="text-green-400 text-3xl"  /> },
    { name: "MySQL",      icon: <SiMysql     className="text-blue-400 text-3xl"   /> },
    { name: "Postman",    icon: <SiPostman   className="text-orange-500 text-3xl" /> },
    { name: "Figma",      icon: <FaFigma     className="text-pink-500 text-3xl"   /> },
    { name: "Canva",      icon: <SiCanva     className="text-blue-400 text-3xl"   /> },
    { name: "GitHub",     icon: <FaGithub    className="text-gray-200 text-3xl"   /> },
    { name: "Git",        icon: <FaGitAlt    className="text-red-500 text-3xl"    /> },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="min-h-screen flex flex-col justify-center items-center text-center px-8 py-20 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]"
    >
      <h2
        className={`text-4xl font-bold mb-12 text-white scroll-hidden ${visible ? "scroll-visible" : ""}`}
      >
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`flex flex-col items-center gap-2 px-6 py-4 bg-gray-800/70 rounded-xl shadow-md hover:scale-110 transition cursor-pointer scroll-hidden-scale ${visible ? "scroll-visible" : ""}`}
            style={{ transitionDelay: visible ? `${index * 40}ms` : "0ms" }}
          >
            {skill.icon}
            <span className="text-gray-200 font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;