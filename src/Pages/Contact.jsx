import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-20 px-6 md:px-20">
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-2 text-cyan-400">Contact Me</h2>
        <p className="text-gray-300">Let's work together or just say hello!</p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        className="max-w-3xl mx-auto bg-white/10 p-8 rounded-xl shadow-lg space-y-6 backdrop-blur"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full bg-white/5 placeholder-gray-300 text-white"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full bg-white/5 placeholder-gray-300 text-white"
            required
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered w-full bg-white/5 placeholder-gray-300 text-white"
        />
        <textarea
          placeholder="Your Message"
          rows="6"
          className="textarea textarea-bordered w-full bg-white/5 placeholder-gray-300 text-white"
          required
        ></textarea>
        <button
          type="submit"
          className="btn bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-600 transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
