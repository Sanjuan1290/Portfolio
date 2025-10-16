import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A clean, responsive portfolio built with React and Tailwind CSS.",
      img: "https://via.placeholder.com/400x200", // placeholder image
      repo: "#",
      demo: "#",
    },
    {
      title: "E-commerce App",
      desc: "Full-stack e-commerce platform with Node.js, MongoDB, and Stripe integration.",
      img: "https://via.placeholder.com/400x200",
      repo: "#",
      demo: "#",
    },
    {
      title: "IoT Dashboard",
      desc: "Real-time monitoring dashboard for IoT devices with live charts.",
      img: "https://via.placeholder.com/400x200",
      repo: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-8 py-20 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]"
    >
      <h2 className="text-4xl font-bold mb-12 text-white">My Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900/70 backdrop-blur-lg rounded-xl shadow-md overflow-hidden border border-gray-700 hover:scale-105 transition"
          >
            {/* Project Image */}
            <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />

            {/* Project Content */}
            <div className="p-6 flex flex-col justify-between h-56">
              <div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-gray-300 text-sm">{project.desc}</p>
              </div>

              {/* Buttons */}
              <div className="mt-4 flex gap-4">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-4 text-sm rounded-lg bg-gray-800 text-pink-400 border border-pink-500 hover:bg-pink-500 hover:text-white transition"
                >
                  Repository
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-4 text-sm rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg hover:opacity-90 transition"
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
