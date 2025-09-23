import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import clmLogo from "../../../assets/pictures/clmLogo.svg";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState('/');
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
    ];

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const handleNavClick = (path) => {
        setCurrentPath(path);
        setIsMobileMenuOpen(false);
        navigate(path);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 bg-blue-900 text-white transition-all duration-300 ${
                    isScrolled ? 'shadow-lg' : 'shadow-none'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
                            className="flex items-center space-x-2"
                        >
                            <button onClick={() => handleNavClick('/')} className="flex items-center space-x-2 group">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0], transition: { duration: 0.3 } }}
                                    className="relative"
                                >
                                    <motion.img
                                        src={clmLogo}
                                        alt="CLM Logo"
                                        className="w-8 h-8 object-contain"
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
                                <motion.span
                                    whileHover={{ scale: 1.05 }}
                                    className="text-xl font-bold tracking-wide"
                                    style={{ fontFamily: 'Playfair Display, serif' }}
                                >
                                    CLM Hymns
                                </motion.span>
                            </button>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item, idx) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                                >
                                    <button onClick={() => handleNavClick(item.path)}>
                                        <motion.span
                                            whileHover={{ scale: 1.1, color: '#F6AD55', transition: { duration: 0.2 } }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`text-lg font-medium transition-colors duration-200 relative ${
                                                currentPath === item.path
                                                    ? 'text-orange-400'
                                                    : 'text-white hover:text-orange-400'
                                            }`}
                                            style={{ fontFamily: 'Inter, sans-serif' }}
                                        >
                                            {item.name}
                                            {currentPath === item.path && (
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-400"
                                                    initial={{ scaleX: 0 }}
                                                    animate={{ scaleX: 1 }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            )}
                                        </motion.span>
                                    </button>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleMobileMenu}
                            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
                            aria-label="Toggle menu"
                        >
                            <motion.span
                                animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 6 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="block w-6 h-0.5 bg-white mb-1.5 origin-center"
                            />
                            <motion.span
                                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                                transition={{ duration: 0.3 }}
                                className="block w-6 h-0.5 bg-white mb-1.5"
                            />
                            <motion.span
                                animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -6 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="block w-6 h-0.5 bg-white origin-center"
                            />
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-black bg-opacity-40 md:hidden"
                        onClick={toggleMobileMenu}
                    />
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ y: '-100%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: '-100%', opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.4 }}
                        className="fixed top-16 left-0 right-0 bg-blue-900 z-40 md:hidden min-h-screen"
                    >
                        <div className="flex flex-col items-center justify-start pt-12 px-6 space-y-8">
                            {navItems.map((item, idx) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.1 + idx * 0.1, ease: "easeOut" }}
                                    className="w-full"
                                >
                                    <button onClick={() => handleNavClick(item.path)} className="block w-full text-center py-4">
                                        <motion.span
                                            whileHover={{ scale: 1.05, color: '#F6AD55', transition: { duration: 0.2 } }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`text-2xl font-semibold transition-colors duration-200 ${
                                                currentPath === item.path ? 'text-orange-400' : 'text-white'
                                            }`}
                                            style={{ fontFamily: 'Inter, sans-serif' }}
                                        >
                                            {item.name}
                                        </motion.span>
                                    </button>
                                </motion.div>
                            ))}

                            {/* Mobile Decoration */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
                                className="mt-12 opacity-20"
                            >
                                <motion.img
                                    src={clmLogo}
                                    alt="CLM Logo"
                                    className="w-16 h-16 object-contain"
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
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Spacer */}
            <div className="h-16" />
        </>
    );
};

export default Navbar;
