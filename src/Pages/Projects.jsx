import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'GradGo',
    description:
      'A consultancy marketplace platform connecting students with educational consultants. Includes gig management, booking, earnings tracking, and more.',
    github: 'https://github.com/mdmuhibullahhabib/GradGo',
    tech: ['React', 'MongoDB', 'Node.js'],
  },
  {
    title: 'HASHI Dental',
    description:
      'Modern dental clinic site featuring doctor profiles, patient testimonials, and appointment booking. Includes admin dashboard.',
    github: 'https://github.com/mdmuhibullahhabib/hashi',
    tech: ['React', 'Express.js', 'MongoDB'],
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen px-6 py-16 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-cyan-400">My Projects</h2>
        <p className="text-gray-300 mt-2">Some of the work I've done recently</p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">{project.title}</h3>
            <p className="text-gray-200 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-cyan-700 text-white text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-cyan-400 hover:underline"
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
