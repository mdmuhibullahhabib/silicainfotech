import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    {
      name: 'Rakib Hasan',
      role: 'CEO & Founder',
      image: 'https://i.ibb.co/2nF4tpQ/person1.jpg',
    },
    {
      name: 'Nusrat Jahan',
      role: 'Lead Designer',
      image: 'https://i.ibb.co/TgXkq8Y/person2.jpg',
    },
    {
      name: 'Jahidul Islam',
      role: 'Full Stack Developer',
      image: 'https://i.ibb.co/JzFb0hK/person3.jpg',
    },
    {
      name: 'Sadia Rahman',
      role: 'Digital Marketing Specialist',
      image: 'https://i.ibb.co/BBg3z5T/person4.jpg',
    },
  ];

  return (
    <section className="min-h-screen px-6 py-16 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">About Silica Infotech</h2>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          <span className="text-cyan-300 font-semibold">Silica Infotech</span> is a results-driven digital agency specializing in <span className="font-semibold text-cyan-300">Web Development</span>, <span className="font-semibold text-cyan-300">Digital Marketing</span>, and <span className="font-semibold text-cyan-300">Creative Branding</span>.  
          We help businesses establish powerful online identities, engage their audiences, and grow their digital presence with cutting-edge solutions.  
          Our team of experts is passionate about blending technology and creativity to deliver modern, scalable, and impactful experiences.
        </p>

        <motion.div
          className="grid md:grid-cols-3 gap-6 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">What We Do</h3>
            <ul className="list-disc list-inside text-gray-200">
              <li>Build full-stack MERN web applications</li>
              <li>Create modern, responsive UI/UX</li>
              <li>Develop scalable backend solutions</li>
              <li>Deploy websites & apps to cloud platforms</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Technologies We Use</h3>
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

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Services We Provide</h3>
            <ul className="list-disc list-inside text-gray-200">
              <li>Custom Website Development & Design</li>
              <li>SEO, PPC & Social Media Marketing</li>
              <li>Creative Branding & Visual Identity</li>
              <li>Content Strategy & Digital Campaigns</li>
              <li>Analytics & Performance Optimization</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>

      {/* Meet Our Team Section */}
      <motion.div
        className="max-w-6xl mx-auto mt-24 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">Meet Our Team</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          At <span className="text-cyan-300 font-semibold">Silica Infotech</span>, we believe that great work is the result of great people.  
          Our dedicated professionals collaborate across disciplines to build digital experiences that leave a lasting impact.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-4">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              whileHover={{ y: -5 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-52 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-cyan-300">{member.name}</h3>
              <p className="text-sm text-gray-200">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
