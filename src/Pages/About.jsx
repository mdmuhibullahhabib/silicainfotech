import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Sadia Ahmed',
    role: 'Project Manager',
    image: 'https://i.ibb.co/8zh2Tpn/team1.jpg',
  },
  {
    name: 'Tanvir Hasan',
    role: 'Senior Frontend Developer',
    image: 'https://i.ibb.co/B2WxBvp/team2.jpg',
  },
  {
    name: 'Nusrat Jahan',
    role: 'UI/UX Designer',
    image: 'https://i.ibb.co/zQgwTgx/team3.jpg',
  },
  {
    name: 'Rakibul Islam',
    role: 'Digital Marketing Specialist',
    image: 'https://i.ibb.co/DkkCHvX/team4.jpg',
  },
];

const About = () => {
  return (
    <section className="min-h-screen px-6 py-16 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      {/* About Company */}
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">About Silica Infotech</h2>
        <p className="text-lg text-gray-300 mb-12 leading-relaxed">
          <span className="text-cyan-300 font-semibold">Silica Infotech</span> is a results-driven digital agency specializing in <span className="font-semibold text-cyan-300">Web Development</span>, <span className="font-semibold text-cyan-300">Digital Marketing</span>, and <span className="font-semibold text-cyan-300">Creative Branding</span>.
          We help businesses establish powerful online identities, engage their audiences, and grow their digital presence with cutting-edge solutions.
        </p>

        <motion.div
          className="grid md:grid-cols-3 gap-6 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {/* ... three cards: What We Do, Technologies, Services */}
          {/* Same content as earlier */}
        </motion.div>
      </motion.div>

      {/* Meet Our Team */}
      <motion.div
        className="max-w-6xl mx-auto mt-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">Meet Our Team</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          At <span className="text-cyan-300 font-semibold">Silica Infotech</span>, our strength lies in our people.
          Our talented and dedicated team brings together diverse skills and years of experience across development, design, marketing, and strategy.
          Together, we work with a shared vision: to deliver exceptional digital solutions that empower businesses to grow, innovate, and lead in their industries.
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
