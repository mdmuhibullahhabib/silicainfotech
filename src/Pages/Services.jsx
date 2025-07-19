import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaServer, FaPaintBrush } from 'react-icons/fa';

const services = [
  {
    title: "Frontend Development",
    icon: <FaCode className="text-3xl text-cyan-400" />,
    description:
      "Building responsive, user-friendly interfaces using React, Tailwind, and modern web tech.",
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-3xl text-cyan-400" />,
    description:
      "Creating secure and scalable APIs using Node.js, Express, and MongoDB.",
  },
  {
    title: "Mobile Responsive Design",
    icon: <FaMobileAlt className="text-3xl text-cyan-400" />,
    description:
      "Ensuring perfect layouts across all screen sizes using mobile-first design principles.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush className="text-3xl text-cyan-400" />,
    description:
      "Crafting intuitive user experiences and visually pleasing designs with clean, modern UI.",
  },
];

const Services = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] px-6 py-16 text-white">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">My Services</h2>
        <p className="text-gray-300 mb-12 text-lg">
          I offer a wide range of web development services to bring your ideas to life.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-200">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
