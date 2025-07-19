import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Banner from "./Banner";

const services = [
    {
        title: "Web Development",
        description: "Responsive, modern websites using MERN stack.",
        icon: "💻",
    },
    {
        title: "Creative Branding",
        description: "Brand identity design and strategy that stands out.",
        icon: "🎨",
    },
    {
        title: "Digital Marketing",
        description: "Result-driven SEO, ads & content strategies.",
        icon: "📈",
    },
    {
        title: "UI/UX Design",
        description: "User-centered interfaces for websites & apps.",
        icon: "📱",
    },
];

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <section className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white min-h-screen py-20 px-6 md:px-20">
                {/* Hero Section */}
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Welcome to <span className="text-cyan-400">SilicalInfoTech</span>
                    </h1>
                    <p className="text-lg text-gray-300 mb-8">
                        We transform businesses with modern web development, marketing, and branding solutions.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-full transition"
                    >
                        Let's Talk
                    </Link>
                </motion.div>

                {/* Services Section */}
                <motion.div
                    className="mt-24"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-center text-white mb-12">
                        What We Offer
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/10 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition hover:scale-105 backdrop-blur"
                                whileHover={{ scale: 1.05 }}
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-5xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-2 text-cyan-300">{service.title}</h3>
                                <p className="text-sm text-gray-300">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default Home;

