import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedLogo from '../components/AnimatedLogo';
import { hymns } from '../data/hymns.js';
import { formatLyricsForDisplay } from '../utils/hymn-utils.js';

const HymnDetailPage = () => {
    const { hymnId } = useParams();
    const navigate = useNavigate();

    const hymn = hymns.find(h => h.id === hymnId) || hymns[0];

    const handleBackToHymns = () => {
        navigate('/hymns');
    };

    const pageVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
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

    const titleVariants = {
        hidden: { opacity: 0, y: -20, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const lyricsVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const stanzaVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(16, 185, 129, 0.2)",
            transition: { duration: 0.3 }
        },
        tap: {
            scale: 0.95
        }
    };

    // Format lyrics using the utility function
    const formatLyrics = (lyricsArray) => {
        const formattedSections = formatLyricsForDisplay(lyricsArray);

        return formattedSections.map((section, index) => {
            return (
                <motion.div
                    key={index}
                    variants={stanzaVariants}
                    className={`mb-8 last:mb-0 ${section.isChorus ? 'bg-emerald-25 rounded-lg p-6 border-l-4 border-emerald-400' : ''}`}
                >
                    {/* Verse/Chorus Label */}
                    <motion.div
                        className="flex items-center mb-3"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <span
                            className={`text-sm font-semibold ${section.isChorus ? 'text-emerald-700 bg-emerald-100' : 'text-slate-600 bg-slate-100'} px-3 py-1 rounded-full`}
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            {section.displayLabel}
                        </span>
                    </motion.div>

                    {/* Stanza Lines */}
                    <div className={`${section.isChorus ? 'pl-4' : ''}`}>
                        {section.lines.map((line, lineIndex) => (
                            <motion.p
                                key={lineIndex}
                                className={`${section.isChorus ? 'text-emerald-800 font-medium' : 'text-gray-700'} leading-relaxed mb-1`}
                                style={{ fontFamily: 'Inter, sans-serif' }}
                                whileHover={{
                                    x: section.isChorus ? 4 : 2,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                {line}
                            </motion.p>
                        ))}
                    </div>
                </motion.div>
            );
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-slate-50 to-emerald-50">
            <Navbar />

            <motion.div
                variants={pageVariants}
                initial="hidden"
                animate="visible"
                className="py-8 px-4 sm:px-6 lg:px-8"
            >
                {/* Header Section */}
                <motion.section
                    variants={itemVariants}
                    className="mb-12"
                >
                    <div className="max-w-4xl mx-auto">
                        {/* Back Button */}
                        <motion.div
                            variants={itemVariants}
                            className="mb-8"
                        >
                            <motion.button
                                onClick={handleBackToHymns}
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-800 transition-colors duration-200 group"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                                <motion.svg
                                    whileHover={{ x: -3 }}
                                    transition={{ duration: 0.2 }}
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m15 18-6-6 6-6"/>
                                </motion.svg>
                                <span className="font-medium">Back to All Hymns</span>
                            </motion.button>
                        </motion.div>

                        {/* Title Section */}
                        <div className="text-center mb-8">
                            <motion.div
                                variants={itemVariants}
                                className="mb-4"
                            >
                                <AnimatedLogo size="md" />
                            </motion.div>

                            <motion.h1
                                variants={titleVariants}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 leading-tight"
                                style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                                <motion.span
                                    whileHover={{
                                        scale: 1.02,
                                        color: '#10B981',
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    {hymn.title}
                                </motion.span>
                            </motion.h1>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600"
                            >
                                <div className="flex items-center space-x-2">
                                    <span
                                        className="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full"
                                        style={{ fontFamily: 'Inter, sans-serif' }}
                                    >
                                        {hymn.category}
                                    </span>
                                </div>
                                {hymn.author && (
                                    <>
                                        <div className="hidden sm:block h-4 w-px bg-gray-300"></div>
                                        <p
                                            className="text-lg italic text-gray-700"
                                            style={{ fontFamily: 'Inter, sans-serif' }}
                                        >
                                            by {hymn.author}
                                        </p>
                                    </>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* Lyrics Section */}
                <motion.section
                    variants={itemVariants}
                    className="mb-12"
                >
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            variants={lyricsVariants}
                            className="bg-white rounded-lg shadow-xl p-8 md:p-12 border border-emerald-100"
                            whileHover={{
                                boxShadow: "0 25px 50px rgba(16, 185, 129, 0.15)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.div
                                variants={itemVariants}
                                className="text-center mb-8"
                            >
                                <h2
                                    className="text-2xl font-semibold text-slate-800 mb-2"
                                    style={{ fontFamily: 'Playfair Display, serif' }}
                                >
                                    Lyrics
                                </h2>
                                <div className="w-12 h-0.5 bg-emerald-400 mx-auto"></div>
                            </motion.div>

                            <motion.div
                                variants={lyricsVariants}
                                className="text-lg leading-relaxed"
                            >
                                {formatLyrics(hymn.lyrics)}
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Action Section */}
                <motion.section
                    variants={itemVariants}
                    className="mb-12"
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            variants={itemVariants}
                            className="mb-6"
                        >
                            <AnimatedLogo size="sm" />
                        </motion.div>

                        <motion.h3
                            variants={itemVariants}
                            className="text-2xl font-bold text-slate-800 mb-6"
                            style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                            Share This Hymn
                        </motion.h3>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                        >
                            <motion.button
                                onClick={handleBackToHymns}
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                                Explore More Hymns
                            </motion.button>

                            <motion.button
                                variants={buttonVariants}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: '#10B981',
                                    transition: { duration: 0.2 }
                                }}
                                whileTap="tap"
                                onClick={() => window.print()}
                                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                                Print Lyrics
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Related Information */}
                <motion.section
                    variants={itemVariants}
                    className="mb-12"
                >
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            variants={itemVariants}
                            className="bg-gradient-to-r from-emerald-50 to-slate-50 rounded-lg p-6 md:p-8 border border-emerald-100"
                        >
                            <div className="text-center mb-6">
                                <h3
                                    className="text-xl font-bold text-slate-800 mb-2"
                                    style={{ fontFamily: 'Playfair Display, serif' }}
                                >
                                    About This Hymn
                                </h3>
                                <div className="w-8 h-0.5 bg-emerald-400 mx-auto"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                    className="p-4"
                                >
                                    <div className="text-emerald-500 mb-2">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="mx-auto">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                        </svg>
                                    </div>
                                    <h4
                                        className="font-semibold text-slate-800 mb-1"
                                        style={{ fontFamily: 'Playfair Display, serif' }}
                                    >
                                        Category
                                    </h4>
                                    <p
                                        className="text-gray-600 text-sm"
                                        style={{ fontFamily: 'Inter, sans-serif' }}
                                    >
                                        {hymn.category}
                                    </p>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                    className="p-4"
                                >
                                    <div className="text-emerald-500 mb-2">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="mx-auto">
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                        </svg>
                                    </div>
                                    <h4
                                        className="font-semibold text-slate-800 mb-1"
                                        style={{ fontFamily: 'Playfair Display, serif' }}
                                    >
                                        Author
                                    </h4>
                                    <p
                                        className="text-gray-600 text-sm"
                                        style={{ fontFamily: 'Inter, sans-serif' }}
                                    >
                                        {hymn.author}
                                    </p>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                    className="p-4"
                                >
                                    <div className="text-emerald-500 mb-2">
                                        <AnimatedLogo size="sm" />
                                    </div>
                                    <h4
                                        className="font-semibold text-slate-800 mb-1"
                                        style={{ fontFamily: 'Playfair Display, serif' }}
                                    >
                                        Type
                                    </h4>
                                    <p
                                        className="text-gray-600 text-sm"
                                        style={{ fontFamily: 'Inter, sans-serif' }}
                                    >
                                        Sacred Hymn
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
            </motion.div>

            <Footer />
        </div>
    );
};

export default HymnDetailPage;
