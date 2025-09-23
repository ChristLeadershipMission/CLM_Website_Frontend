import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import Navbar from '../components/Navbar';
import {hymns} from '../data/hymns.js';
import Footer from '../components/Footer';
import HymnCard from '../components/HymnCard';
import SearchBar from '../components/SearchBar';
import AnimatedCross from '../components/AnimatedCross';

const HymnsListPage = () => {

    const [filteredHymns, setFilteredHymns] = useState(hymns);
    const [searchQuery, setSearchQuery] = useState('');

    // Handle search functionality
    const handleSearch = (query) => {
        setSearchQuery(query);

        if (!query.trim()) {
            setFilteredHymns(hymns); // Show all hymns
            return;
        }

        const filtered = hymns.filter(hymn =>
            hymn.title.toLowerCase().includes(query.toLowerCase()) ||
            hymn.author.toLowerCase().includes(query.toLowerCase()) ||
            hymn.category.toLowerCase().includes(query.toLowerCase()) ||
            hymn.lyrics.toLowerCase().includes(query.toLowerCase())
        );

        setFilteredHymns(filtered);
    };

    // Reset to all hymns when component mounts
    useEffect(() => {
        setFilteredHymns(hymns);
    }, []);

    const headerVariants = {
        hidden: {opacity: 0, y: -30},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.2
            }
        }
    };

    const headerItemVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const gridVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const searchSectionVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const statsVariants = {
        hidden: {opacity: 0, scale: 0.8},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-slate-50 to-emerald-50">
            <Navbar/>

            {/* Header Section */}
            <motion.section
                variants={headerVariants}
                initial="hidden"
                animate="visible"
                className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white relative overflow-hidden"
            >
                {/* Background Decorative Elements */}
                <motion.div
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-5 right-5 opacity-10"
                >
                    <AnimatedCross size="md"/>
                </motion.div>

                <motion.div
                    animate={{
                        rotate: [360, 0],
                        scale: [1, 0.8, 1]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-5 left-5 opacity-10"
                >
                    <AnimatedCross size="sm"/>
                </motion.div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        variants={headerItemVariants}
                        className="mb-6"
                    >
                        <AnimatedCross size="lg"/>
                    </motion.div>

                    <motion.h1
                        variants={headerItemVariants}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                        style={{fontFamily: 'Playfair Display, serif'}}
                    >
                        <motion.span
                            whileHover={{
                                scale: 1.05,
                                color: '#10B981',
                                transition: {duration: 0.3}
                            }}
                        >
                            All Hymns
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        variants={headerItemVariants}
                        className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto"
                        style={{fontFamily: 'Inter, sans-serif'}}
                    >
                        Explore our complete collection of sacred music and find the perfect hymn for worship,
                        reflection, or inspiration.
                    </motion.p>

                    <motion.div
                        variants={statsVariants}
                        className="flex items-center justify-center space-x-8 text-slate-200"
                    >
                        <div className="text-center">
                            <div className="text-2xl font-bold text-emerald-400">{hymns.length}</div>
                            <div className="text-sm" style={{fontFamily: 'Inter, sans-serif'}}>Total Hymns</div>
                        </div>
                        <div className="h-8 w-px bg-slate-300"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-emerald-400">
                                {[...new Set(hymns.map(h => h.category))].length}
                            </div>
                            <div className="text-sm" style={{fontFamily: 'Inter, sans-serif'}}>Categories</div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Search Section */}
            <motion.section
                variants={searchSectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.3}}
                className="py-12 px-4 sm:px-6 lg:px-8 bg-white"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center space-y-6">
                        <SearchBar
                            setFilteredHymns={setFilteredHymns}
                            allHymns={hymns}
                            onSearch={handleSearch}
                            searchQuery={searchQuery}
                            filteredHymns={filteredHymns}
                        />

                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.3, duration: 0.4}}
                            className="text-center"
                        >
                            <p
                                className="text-gray-600 text-sm"
                                style={{fontFamily: 'Inter, sans-serif'}}
                            >
                                Showing {filteredHymns.length} of {hymns.length} hymns
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Hymns Grid Section */}
            <motion.section
                variants={gridVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.1}}
                className="py-12 px-4 sm:px-6 lg:px-8"
            >
                <div className="max-w-7xl mx-auto">
                    {filteredHymns.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredHymns.map((hymn, index) => (
                                <motion.div
                                    key={hymn.id}
                                    variants={cardVariants}
                                    custom={index}
                                >
                                    <HymnCard hymn={hymn}/>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{opacity: 0, scale: 0.9}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.4}}
                            className="text-center py-16"
                        >
                            <div className="mb-6">
                                <AnimatedCross size="md"/>
                            </div>
                            <h3
                                className="text-2xl font-bold text-slate-800 mb-4"
                                style={{fontFamily: 'Playfair Display, serif'}}
                            >
                                No Hymns Found
                            </h3>
                            <p
                                className="text-gray-600 text-lg mb-6"
                                style={{fontFamily: 'Inter, sans-serif'}}
                            >
                                We couldn't find any hymns matching your search. Try adjusting your search terms.
                            </p>
                            <motion.button
                                onClick={() => {
                                    setFilteredHymns(hymns);
                                    setSearchQuery('');
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: '#10B981',
                                    transition: {duration: 0.2}
                                }}
                                whileTap={{scale: 0.95}}
                                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                                style={{fontFamily: 'Inter, sans-serif'}}
                            >
                                Show All Hymns
                            </motion.button>
                        </motion.div>
                    )}
                </div>
            </motion.section>

            {/* Category Filter Chips */}
            <motion.section
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.4}}
                className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-6">
                        <h3
                            className="text-lg font-semibold text-slate-800 mb-4"
                            style={{fontFamily: 'Playfair Display, serif'}}
                        >
                            Browse by Category
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[...new Set(hymns.map(h => h.category))].map((category, index) => (
                                <motion.button
                                    key={category}
                                    initial={{opacity: 0, scale: 0.8}}
                                    animate={{opacity: 1, scale: 1}}
                                    transition={{duration: 0.3, delay: index * 0.1}}
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: '#10B981',
                                        color: '#FFFFFF',
                                        transition: {duration: 0.2}
                                    }}
                                    whileTap={{scale: 0.95}}
                                    onClick={() => {
                                        const filtered = hymns.filter(h => h.category === category);
                                        setFilteredHymns(filtered);
                                        setSearchQuery('');
                                    }}
                                    className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium hover:bg-emerald-500 hover:text-white transition-all duration-300"
                                    style={{fontFamily: 'Inter, sans-serif'}}
                                >
                                    {category} ({hymns.filter(h => h.category === category).length})
                                </motion.button>
                            ))}
                            <motion.button
                                initial={{opacity: 0, scale: 0.8}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{duration: 0.3, delay: 0.5}}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: '#475569',
                                    transition: {duration: 0.2}
                                }}
                                whileTap={{scale: 0.95}}
                                onClick={() => {
                                    setFilteredHymns(hymns);
                                    setSearchQuery('');
                                }}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-slate-600 hover:text-white transition-all duration-300"
                                style={{fontFamily: 'Inter, sans-serif'}}
                            >
                                Show All
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.section>

            <Footer/>
        </div>
    );
};

export default HymnsListPage;
