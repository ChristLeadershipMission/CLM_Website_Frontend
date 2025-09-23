import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hymns', path: '/hymns' },
        { name: 'About', path: '/about' }
    ];

    const socialLinks = [
        {
            name: 'Facebook',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            )
        },
        {
            name: 'YouTube',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
            )
        },
        {
            name: 'Instagram',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            )
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
    };

    const handleLinkClick = (path) => window.history.pushState({}, '', path);

    return (
        <motion.footer
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-blue-900 text-white py-8 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Logo & Info */}
                    <motion.div variants={itemVariants} className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                            <motion.div whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0], transition: { duration: 0.3 } }} className="relative">
                                <svg width="24" height="24" viewBox="0 0 32 32" className="text-orange-400" fill="currentColor">
                                    <rect x="14" y="4" width="4" height="24" rx="2" />
                                    <rect x="8" y="12" width="16" height="4" rx="2" />
                                    <path d="M4 14c2-2 4-1 6 0 1 2 2 4 6 4s5-2 6-4c2-1 4-2 6 0-2 6-6 8-12 8s-10-2-12-8z" className="text-white opacity-30" fillRule="evenodd"/>
                                </svg>
                            </motion.div>
                            <span className="text-lg font-bold tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
                                CLM Hymns
                            </span>
                        </div>
                        <p className="text-gray-300 text-sm mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Inspiring worship through sacred music
                        </p>
                        <a
                            href="mailto:choir@clmhymns.org"
                            className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            choir@clmhymns.org
                        </a>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants} className="text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-4 text-orange-400" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Quick Links
                        </h3>
                        <div className="space-y-2">
                            {footerLinks.map(link => (
                                <motion.button
                                    key={link.name}
                                    onClick={() => handleLinkClick(link.path)}
                                    className="block text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    {link.name}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Social Media */}
                    <motion.div variants={itemVariants} className="text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-4 text-orange-400" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Connect With Us
                        </h3>
                        <div className="flex justify-center md:justify-start space-x-4">
                            {socialLinks.map(social => (
                                <motion.a
                                    key={social.name}
                                    href="#"
                                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 p-2 rounded-full hover:bg-blue-800"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                        <p className="text-gray-400 text-xs mt-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Follow us for hymn updates and choir news
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div variants={itemVariants} className="border-t border-blue-800 pt-6 text-center">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 text-gray-300 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <span>© {currentYear} CLM Hymns. All rights reserved</span>
                        <span className="hover:text-orange-400 transition-colors duration-200">Made with ♡ for worship</span>
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
