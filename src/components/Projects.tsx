import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Projects: React.FC = () => {
  const { ref: sectionRef, visible } = useScrollAnimation();

  const projects = [
    {
      title: "BROOM all about music",
      desc: "A music platform where users can explore, visualize 3D and rent sound system. Built with responsive design for smooth access on all devices.",
      img: "https://broomallaboutmusic.netlify.app/logo.png",
      repo: "https://github.com/Sanjuan1290/BroomAllAboutMusic",
      demo: "https://broomallaboutmusic.netlify.app/",
    },
    {
      title: "ComfySloth",
      desc: "An e-commerce web app for comfy lifestyle products. Features product listings, cart functionality, and checkout simulation.",
      img: "https://comfysloth123.netlify.app/HomeImages/ShopNowImage/niceTable.png",
      repo: "https://github.com/Sanjuan1290/ComfySloth",
      demo: "https://comfysloth123.netlify.app",
    },
    {
      title: "Amazon Clone",
      desc: "A React-based clone of Amazon's front-end, including product browsing, search functionality, and a shopping cart system.",
      img: "https://amazonreactclo.netlify.app/logos/amazon-logo-white.png",
      repo: "https://github.com/Sanjuan1290/AmazonClone_React",
      demo: "https://amazonreactclo.netlify.app",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="min-h-screen flex flex-col justify-center items-center px-8 py-20 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]"
    >
      <h2
        className={`text-4xl font-bold mb-12 text-white scroll-hidden ${visible ? "scroll-visible" : ""}`}
      >
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`bg-gray-900/70 backdrop-blur-lg rounded-xl shadow-md overflow-hidden border border-gray-700 hover:scale-105 transition scroll-hidden ${visible ? "scroll-visible" : ""}`}
            style={{ transitionDelay: visible ? `${index * 150}ms` : "0ms" }}
          >
            <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />

            <div className="p-6 flex flex-col justify-between h-56">
              <div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-gray-300 text-sm">{project.desc}</p>
              </div>

              <div className="mt-4 flex gap-4">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-4 text-sm text-center rounded-lg bg-gray-800 text-pink-400 border border-pink-500 hover:bg-pink-500 hover:text-white transition"
                >
                  Repository
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-4 text-sm text-center rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg hover:opacity-90 transition"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;