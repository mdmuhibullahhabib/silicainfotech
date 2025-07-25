import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

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
        <h2 className="text-4xl font-bold mb-2 text-cyan-400">Contact Us</h2>
        <p className="text-gray-300">Let's work together or just say hello!</p>
      </motion.div>

      {/* Grid Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side - Contact Info */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-cyan-400 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-cyan-300">Our Address</h3>
              <p className="text-gray-300">House 22, Road 3, Block B, Mirpur-2, Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-cyan-400 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-cyan-300">Call Us</h3>
              <p className="text-gray-300">+880 1731809046</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-cyan-400 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-cyan-300">Email</h3>
              <p className="text-gray-300">silicainfotech.bd@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaClock className="text-cyan-400 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-cyan-300">Working Hours</h3>
              <p className="text-gray-300">Open Every Day</p>
              <p className="text-gray-300">9:00 AM – 9:00 PM</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.form
          className="bg-white/10 p-8 rounded-xl shadow-lg space-y-6 backdrop-blur"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
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
      </div>
    </section>
  );
};

export default Contact;
