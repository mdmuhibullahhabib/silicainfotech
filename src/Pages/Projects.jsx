import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "GradGo",
    description:
      "A consultancy marketplace platform connecting students with consultants. Features gig management, booking, and analytics.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/mdmuhibullahhabib/GradGo",
  },
  {
    title: "HASHI Dental",
    description:
      "A modern dental clinic website with doctor profiles, patient testimonials, and appointment booking.",
    tech: ["React", "Tailwind CSS", "Express"],
    github: "https://github.com/mdmuhibullahhabib/HASHI-Dental",
  },
  {
    title: "Portfolio Site",
    description:
      "Personal portfolio with animations, dark/light mode, and downloadable resume.",
    tech: ["React", "Framer Motion", "DaisyUI"],
    github: "https://github.com/mdmuhibullahhabib/my-portfolio",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen py-20 px-6 md:px-16 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-cyan-400">My Projects</h2>
        <p className="text-gray-300 mt-2">Explore some of my featured work</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:scale-105 transition transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs bg-cyan-600/30 px-3 py-1 rounded-full text-cyan-200"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:underline"
            >
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
