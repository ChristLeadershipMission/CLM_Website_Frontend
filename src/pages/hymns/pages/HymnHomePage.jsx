import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HymnCard from '../components/HymnCard';
import logo from '../../../assets/pictures/clmLogo.svg';
import {useNavigate} from "react-router-dom";
import {hymns} from "../data/hymns.js";

// AnimatedLogo component to replace AnimatedCross
const AnimatedLogo = ({ size = "md" }) => {
    const sizeClasses = {
        sm: "w-8 h-8",
        md: "w-12 h-12",
        lg: "w-16 h-16"
    };

    return (
        <motion.div
            whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 }
            }}
            className={`${sizeClasses[size]} mx-auto`}
        >
            <motion.img
                src={logo}
                alt="CLM Logo"
                className="w-full h-full object-contain"
                animate={{
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </motion.div>
    );
};

const HymnHomePage = () => {
    const navigate = useNavigate();

    const featuredHymns = hymns.slice(0, 3);

    const handleExploreHymns = () => {
        navigate('/hymns/explore');
    };


    const heroVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
                ease: "easeOut"
            }
        }
    };

    const heroItemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const pulseVariants = {
        pulse: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <motion.section
                variants={heroVariants}
                initial="hidden"
                animate="visible"
                className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
            >
                {/* Background Decorative Elements */}
                <motion.div
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-10 right-10 opacity-10"
                >
                    <AnimatedLogo size="lg" />
                </motion.div>

                <motion.div
                    animate={{
                        rotate: [360, 0],
                        scale: [1, 0.9, 1]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-10 left-10 opacity-10"
                >
                    <AnimatedLogo size="md" />
                </motion.div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        variants={heroItemVariants}
                        className="mb-8"
                    >
                        <AnimatedLogo size="lg" />
                    </motion.div>

                    <motion.h1
                        variants={heroItemVariants}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                        <motion.span
                            whileHover={{
                                scale: 1.05,
                                color: '#10B981',
                                transition: { duration: 0.3 }
                            }}
                        >
                            Welcome to CLM Hymns
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        variants={heroItemVariants}
                        className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        Explore timeless hymns that uplift the soul.
                        Worship through song and find inspiration in every verse.
                    </motion.p>

                    <motion.div
                        variants={heroItemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                    >
                        <motion.button
                            onClick={handleExploreHymns}
                            variants={pulseVariants}
                            animate="pulse"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: '#10B981',
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            Explore All Hymns
                        </motion.button>

                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="text-slate-300 text-sm"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            <span className="flex items-center space-x-2">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                                <span>Over {hymns.length} beautiful hymns</span>
                            </span>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Floating Dove SVG */}
                <motion.div
                    animate={{
                        y: [-10, 10, -10],
                        x: [-5, 5, -5]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 left-1/4 opacity-20 hidden lg:block"
                >
                    <svg width="60" height="60" viewBox="0 0 32 32" fill="currentColor" className="text-emerald-400">
                        <path d="M4 14c2-2 4-1 6 0 1 2 2 4 6 4s5-2 6-4c2-1 4-2 6 0-2 6-6 8-12 8s-10-2-12-8z" />
                    </svg>
                </motion.div>
            </motion.section>

            {/* Featured Hymns Section */}
            <motion.section
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-slate-50 to-emerald-50"
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={heroItemVariants}
                        className="text-center mb-16"
                    >
                        <div className="flex items-center justify-center mb-4">
                            <AnimatedLogo size="sm" />
                        </div>
                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4"
                            style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                            Featured Hymns
                        </h2>
                        <p
                            className="text-lg text-gray-600 max-w-2xl mx-auto"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            Discover some of our most beloved hymns that have inspired congregations for generations
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredHymns.map((hymn, index) => (
                            <motion.div
                                key={hymn.id}
                                variants={cardVariants}
                                style={{
                                    transitionDelay: `${index * 0.1}s`
                                }}
                            >
                                <HymnCard hymn={hymn} />
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        variants={heroItemVariants}
                        className="text-center mt-16"
                    >
                        <motion.button
                            onClick={handleExploreHymns}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 25px rgba(16, 185, 129, 0.2)",
                                transition: { duration: 0.3 }
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            View All Hymns →
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section>

            {/* Call to Action Section */}
            <motion.section
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900 text-white"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        variants={heroItemVariants}
                        className="mb-8"
                    >
                        <AnimatedLogo size="md" />
                    </motion.div>

                    <motion.h2
                        variants={heroItemVariants}
                        className="text-3xl md:text-4xl font-bold mb-6"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                        Join Our Community of Worship
                    </motion.h2>

                    <motion.p
                        variants={heroItemVariants}
                        className="text-xl text-slate-200 mb-8 leading-relaxed"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        Whether you're leading a choir, planning a service, or seeking personal inspiration,
                        our hymn collection is here to enrich your spiritual journey.
                    </motion.p>

                    <motion.div
                        variants={heroItemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                    >
                        <motion.button
                            onClick={handleExploreHymns}
                            variants={pulseVariants}
                            animate="pulse"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: '#10B981',
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            Start Exploring
                        </motion.button>

                        <motion.a
                            href="mailto:choir@clmhymns.org"
                            whileHover={{
                                scale: 1.05,
                                color: '#10B981',
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="text-slate-300 hover:text-emerald-400 underline text-lg transition-colors duration-300"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            Contact Our Choir
                        </motion.a>
                    </motion.div>
                </div>
            </motion.section>

            <Footer />
        </div>
    );
};

export default HymnHomePage;
