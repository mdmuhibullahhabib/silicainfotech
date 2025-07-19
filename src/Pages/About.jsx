import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="min-h-screen px-6 py-16 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">About Me</h2>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          I’m <span className="text-cyan-300 font-semibold">Md. Muhib Ullah Habib</span>, a passionate and detail-oriented Full Stack Web Developer.
          I specialize in building responsive web applications using modern JavaScript technologies like React, Tailwind CSS, Node.js, Express, and MongoDB.
          With a strong foundation in both frontend and backend, I love crafting seamless, scalable, and user-focused solutions.
        </p>

        <motion.div
          className="grid md:grid-cols-2 gap-6 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">What I Do</h3>
            <ul className="list-disc list-inside text-gray-200">
              <li>Build full-stack MERN web apps</li>
              <li>Develop reusable frontend components</li>
              <li>Integrate APIs and authentication</li>
              <li>Deploy apps using Vercel, Netlify, Render</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Technologies I Use</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              {[
                'HTML', 'CSS', 'JavaScript', 'React',
                'Tailwind', 'Node.js', 'Express', 'MongoDB',
                'Firebase', 'JWT', 'Framer Motion',
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-cyan-600/80 text-white px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
