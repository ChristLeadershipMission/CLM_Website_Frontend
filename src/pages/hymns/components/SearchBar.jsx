import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {useNavigate} from 'react-router-dom';

const SearchBar = ({ setFilteredHymns, allHymns, onSearch, searchQuery, filteredHymns }) => {
    const [searchTerm, setSearchTerm] = useState(searchQuery || '');
    const [isFocused, setIsFocused] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    // Sync with parent's searchQuery
    useEffect(() => {
        setSearchTerm(searchQuery || '');
    }, [searchQuery]);

    // Only handle suggestions, let parent handle filtering
    useEffect(() => {
        // Generate suggestions for dropdown
        if (searchTerm.length > 0) {
            const uniqueSuggestions = Array.from(new Set([
                ...allHymns
                    .filter(hymn => hymn.title.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map(hymn => hymn.title)
                    .slice(0, 3),
                ...allHymns
                    .filter(hymn => hymn.category.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map(hymn => hymn.category)
                    .slice(0, 2)
            ])).slice(0, 5);
            setSuggestions(uniqueSuggestions);
        } else {
            setSuggestions([]);
        }
    }, [searchTerm, allHymns]);

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setSearchTerm(newValue);
        if (onSearch) {
            onSearch(newValue);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        setSuggestions([]);
        setIsFocused(false);
        if (onSearch) {
            onSearch(suggestion);
        }
    };

    const clearSearch = (e) => {
        e?.preventDefault();
        e?.stopPropagation();

        console.log('Clear search clicked'); // Debug log

        // Reset all local state immediately
        setSearchTerm('');
        setIsFocused(false);
        setSuggestions([]);

        // Force parent to reset with empty search - use setTimeout to ensure state is updated
        setTimeout(() => {
            if (onSearch) {
                console.log('Calling onSearch with empty string'); // Debug log
                onSearch('');
            }
        }, 0);
    };

    const handleBlur = (e) => {
        // Only hide suggestions on blur, don't interfere with search functionality
        setTimeout(() => {
            setIsFocused(false);
            setSuggestions([]);
        }, 150);
    };

    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const inputVariants = {
        focused: {
            scale: 1.02,
            boxShadow: "0 0 0 3px rgba(237, 137, 54, 0.1)",
            transition: { duration: 0.3 }
        },
        unfocused: {
            scale: 1,
            boxShadow: "0 0 0 0px rgba(237, 137, 54, 0)",
            transition: { duration: 0.3 }
        }
    };

    const iconVariants = {
        idle: {
            scale: 1,
            rotate: 0
        },
        pulse: {
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 0.6,
                repeat: Infinity,
                repeatDelay: 2
            }
        }
    };

    const suggestionVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: -10,
            transition: { duration: 0.2 }
        }
    };

    const SearchIcon = () => (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
        </svg>
    );

    const ClearIcon = () => (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
    );

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-md mx-auto relative"
            onBlur={handleBlur}
        >
            {/* Search Input Container */}
            <motion.div
                variants={inputVariants}
                animate={isFocused ? 'focused' : 'unfocused'}
                className="relative"
            >
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <motion.div
                        variants={iconVariants}
                        animate={searchTerm.length === 0 ? 'pulse' : 'idle'}
                        className="text-orange-500"
                    >
                        <SearchIcon />
                    </motion.div>
                </div>

                <motion.input
                    type="text"
                    placeholder="Search hymns by title or category..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    onFocus={() => setIsFocused(true)}
                    className="w-full pl-10 pr-10 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-orange-400 transition-all duration-300 text-black placeholder-gray-500"
                    style={{
                        backgroundColor: '#FFF7ED',
                        fontFamily: 'Inter, sans-serif',
                        color: '#000000'
                    }}
                />

                {/* Clear Button */}
                <AnimatePresence>
                    {searchTerm && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.2 }}
                            onClick={clearSearch}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-orange-500 transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ClearIcon />
                        </motion.button>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Search Suggestions Dropdown */}
            <AnimatePresence>
                {isFocused && suggestions.length > 0 && (
                    <motion.div
                        variants={suggestionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-0 right-0 mt-2 bg-white border border-blue-200 rounded-lg shadow-lg z-10 overflow-hidden"
                        style={{ backgroundColor: '#FFF7ED' }}
                    >
                        <div className="py-2">
                            {suggestions.map((suggestion, index) => (
                                <motion.button
                                    key={suggestion}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2, delay: index * 0.05 }}
                                    onClick={() => handleSuggestionClick(suggestion)}
                                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 flex items-center space-x-2"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                    whileHover={{
                                        backgroundColor: 'rgba(237, 137, 54, 0.1)',
                                        x: 5,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="text-orange-400 flex-shrink-0"
                                    >
                                        <SearchIcon />
                                    </motion.div>
                                    <span className="truncate">{suggestion}</span>
                                </motion.button>
                            ))}
                        </div>

                        {/* Suggestions Footer */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="px-4 py-2 bg-gray-50 border-t border-gray-200"
                        >
                            <p
                                className="text-xs text-gray-500 text-center"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                                {filteredHymns.length} hymn{filteredHymns.length !== 1 ? 's' : ''} found
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Search Results Count */}
            <AnimatePresence>
                {searchTerm && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 text-center"
                    >
                        <span
                            className="text-sm text-gray-600"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            Found {filteredHymns.length} hymn{filteredHymns.length !== 1 ? 's' : ''} for "{searchTerm}"
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default SearchBar;
