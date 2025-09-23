import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HymnCard = ({ hymn }) => {
    const navigate = useNavigate();

    const getExcerpt = (lyrics) => {
        if (!lyrics || lyrics.length <= 50) return lyrics || '';
        return lyrics.substring(0, 50) + '...';
    };

    const handleViewHymn = () => {
        navigate(`/hymns/${hymn.id}`);
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                delay: 0.1,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
                scale: 1.03,
                y: -8,
                boxShadow: "0 25px 50px rgba(16, 185, 129, 0.15)",
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-white border border-emerald-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 cursor-pointer"
        >
            <div className="h-full flex flex-col">
                {/* Category Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="mb-3"
                >
                    <span
                        className="inline-block bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        {hymn.category}
                    </span>
                </motion.div>

                {/* Title */}
                <motion.h3
                    variants={titleVariants}
                    className="text-xl font-bold text-slate-800 mb-2 line-clamp-2 hover:text-slate-900 transition-colors duration-200"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                >
                    <motion.span
                        whileHover={{
                            y: -1,
                            transition: { duration: 0.2 }
                        }}
                    >
                        {hymn.title}
                    </motion.span>
                </motion.h3>

                {/* Author */}
                {hymn.author && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        className="text-sm text-gray-600 mb-3 italic"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        by {hymn.author}
                    </motion.p>
                )}

                {/* Excerpt */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="text-gray-700 text-sm mb-4 flex-grow line-clamp-3"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    {getExcerpt(hymn.lyrics)}
                </motion.p>

                {/* View Hymn Button */}
                <motion.button
                    onClick={handleViewHymn}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: '#10B981',
                        color: '#FFFFFF',
                        transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white text-emerald-600 border-2 border-emerald-500 py-2 px-4 rounded-md font-medium text-sm transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    <motion.span
                        whileHover={{
                            x: 2,
                            transition: { duration: 0.2 }
                        }}
                        className="flex items-center justify-center space-x-1"
                    >
                        <span>View Hymn</span>
                        <motion.svg
                            whileHover={{
                                x: 3,
                                transition: { duration: 0.2 }
                            }}
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m9 18 6-6-6-6"/>
                        </motion.svg>
                    </motion.span>
                </motion.button>
            </div>
        </motion.div>
    );
};

export default HymnCard;
