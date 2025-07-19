import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex items-center justify-center px-6 md:px-20">
      <div className="max-w-4xl w-full text-center md:text-left">
        {/* Animated Text */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          We Transform Brands with <br />
          <span className="text-cyan-400">Digital Innovation</span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          At <span className="text-white font-semibold">Silica Infotech</span>, we specialize in 
          <span className="text-cyan-300 font-semibold"> Web Development</span>, 
          <span className="text-cyan-300 font-semibold"> Digital Marketing</span>, and 
          <span className="text-cyan-300 font-semibold"> Creative Branding</span> — helping businesses grow with impactful digital experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            to="/projects"
            className="btn bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-600 transition"
          >
            Our Projects
          </Link>
          <a
            href="mailto:silicainfoteeh.bd@gmail.com"
            className="btn border border-cyan-400 px-6 py-3 rounded-full font-semibold text-cyan-300 hover:bg-cyan-700 transition"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
