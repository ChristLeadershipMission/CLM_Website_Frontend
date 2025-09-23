import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
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
            <nav
                className={`fixed top-0 left-0 right-0 z-50 bg-blue-900 text-white ${
                    isScrolled ? 'shadow-lg' : 'shadow-none'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => handleNavClick('/')}
                                className="flex items-center space-x-2 group"
                            >
                                <img
                                    src={clmLogo}
                                    alt="CLM Logo"
                                    className="w-8 h-8 object-contain"
                                />
                                <span
                                    className="text-xl font-bold tracking-wide"
                                    style={{ fontFamily: 'Playfair Display, serif' }}
                                >
                  CLM Hymns
                </span>
                            </button>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavClick(item.path)}
                                    className={`text-lg font-medium relative ${
                                        currentPath === item.path
                                            ? 'text-orange-400'
                                            : 'text-white hover:text-orange-400'
                                    }`}
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    {item.name}
                                    {currentPath === item.path && (
                                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-400" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
                            aria-label="Toggle menu"
                        >
              <span
                  className={`block w-6 h-0.5 bg-white mb-1.5 transition-transform ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
              />
                            <span
                                className={`block w-6 h-0.5 bg-white mb-1.5 ${
                                    isMobileMenuOpen ? 'opacity-0' : ''
                                }`}
                            />
                            <span
                                className={`block w-6 h-0.5 bg-white transition-transform ${
                                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}
                            />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black bg-opacity-40 md:hidden"
                    onClick={toggleMobileMenu}
                />
            )}

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed top-16 left-0 right-0 bg-blue-900 z-40 md:hidden min-h-screen">
                    <div className="flex flex-col items-center justify-start pt-12 px-6 space-y-8">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => handleNavClick(item.path)}
                                className={`block w-full text-center py-4 text-2xl font-semibold ${
                                    currentPath === item.path ? 'text-orange-400' : 'text-white'
                                }`}
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                                {item.name}
                            </button>
                        ))}

                        {/* Mobile Decoration */}
                        <div className="mt-12 opacity-20">
                            <img
                                src={clmLogo}
                                alt="CLM Logo"
                                className="w-16 h-16 object-contain"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Spacer */}
            <div className="h-16" />
        </>
    );
};

export default Navbar;
