import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import Navbar from '../components/Navbar';
import {hymns} from '../data/hymns.js';
import Footer from '../components/Footer';
import HymnCard from '../components/HymnCard';
import SearchBar from '../components/SearchBar';
import AnimatedCross from '../components/AnimatedLogo.jsx';
import { getLyricsText } from '../utils/hymn-utils.js';

const HymnsListPage = () => {
  const [filteredHymns, setFilteredHymns] = useState(hymns);
  const [searchQuery, setSearchQuery] = useState('');

  // CRITICAL DEBUG LOGGING - ADD THIS FIRST
  useEffect(() => {
    console.log('=== HYMNS DEBUG INFO ===');
    console.log('1. Raw hymns import:', hymns);
    console.log('2. Type of hymns:', typeof hymns);
    console.log('3. Is array?:', Array.isArray(hymns));
    console.log('4. Total hymns:', hymns?.length || 0);
    console.log('5. First 3 hymns:', hymns?.slice(0, 3));
    console.log('6. filteredHymns length:', filteredHymns?.length || 0);
    console.log('7. filteredHymns is array?:', Array.isArray(filteredHymns));
    console.log('8. First filtered hymn:', filteredHymns?.[0]);

    // Check for duplicate IDs
    if (hymns && Array.isArray(hymns)) {
      const ids = hymns.map(h => h.id);
      const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
      const uniqueDuplicates = [...new Set(duplicates)];
      console.log('9. Duplicate IDs:', uniqueDuplicates.length > 0 ? uniqueDuplicates : 'None');

      // Check for missing IDs
      const missingIds = hymns.filter(h => !h.id);
      console.log('10. Hymns with missing IDs:', missingIds.length);
    }
    console.log('=====================');
  }, []);

  // Monitor filteredHymns changes
  useEffect(() => {
    console.log('🔄 filteredHymns CHANGED:', {
      length: filteredHymns?.length || 0,
      isArray: Array.isArray(filteredHymns),
      first: filteredHymns?.[0]?.title
    });
  }, [filteredHymns]);

  // Handle search functionality - with debug logging
  const handleSearch = (query) => {
    console.log('Search triggered with query:', query);
    setSearchQuery(query);

    if (!query || query.trim() === '') {
      console.log('Empty query - resetting to all hymns');
      setFilteredHymns(hymns);
      return;
    }

    const lowerQuery = query.toLowerCase().trim();

    // Split query into words for better matching
    const queryWords = lowerQuery.split(/\s+/);

    const filtered = hymns.filter(hymn => {
      const title = (hymn.title || '').toLowerCase();
      const author = (hymn.author || '').toLowerCase();
      const category = (hymn.category || '').toLowerCase();
      const lyrics = getLyricsText(hymn.lyrics).toLowerCase();

      // Check if ALL query words appear in title (highest priority)
      const allWordsInTitle = queryWords.every(word => title.includes(word));

      // Check if title contains the full query
      const fullQueryInTitle = title.includes(lowerQuery);

      // Check if author contains query
      const authorMatch = author.includes(lowerQuery);

      // Check if category contains query
      const categoryMatch = category.includes(lowerQuery);

      // Only check lyrics if title/author/category don't match
      // This prevents getting 735 results for common words
      if (fullQueryInTitle || allWordsInTitle || authorMatch || categoryMatch) {
        return true;
      }

      // Only search lyrics if query is 4+ characters and specific
      if (lowerQuery.length >= 4) {
        return lyrics.includes(lowerQuery);
      }

      return false;
    });

    // Sort results: exact title matches first, then partial title matches, then others
    const sorted = filtered.sort((a, b) => {
      const aTitle = (a.title || '').toLowerCase();
      const bTitle = (b.title || '').toLowerCase();

      const aExactMatch = aTitle === lowerQuery;
      const bExactMatch = bTitle === lowerQuery;

      if (aExactMatch && !bExactMatch) return -1;
      if (!aExactMatch && bExactMatch) return 1;

      const aStartsWith = aTitle.startsWith(lowerQuery);
      const bStartsWith = bTitle.startsWith(lowerQuery);

      if (aStartsWith && !bStartsWith) return -1;
      if (!aStartsWith && bStartsWith) return 1;

      const aAllWords = queryWords.every(word => aTitle.includes(word));
      const bAllWords = queryWords.every(word => bTitle.includes(word));

      if (aAllWords && !bAllWords) return -1;
      if (!aAllWords && bAllWords) return 1;

      return 0;
    });

    console.log('Filtered results:', sorted.length);
    setFilteredHymns(sorted);
  };

  // Reset to all hymns when component mounts
  useEffect(() => {
    console.log('Component mounted, setting initial hymns');
    setFilteredHymns(hymns);
    setSearchQuery('');
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

  const handleCategoryFilter = (category) => {
    if (category === 'all') {
      setFilteredHymns(hymns);
      setSearchQuery('');
    } else {
      const filtered = hymns.filter(h => h.category === category);
      setFilteredHymns(filtered);
      setSearchQuery('');
    }
  };

  const handleShowAllHymns = () => {
    setFilteredHymns(hymns);
    setSearchQuery('');
  };

  // CRITICAL: Check if we have data to render
  console.log('🎨 RENDER CHECK:', {
    hasHymns: hymns?.length > 0,
    hasFilteredHymns: filteredHymns?.length > 0,
    willRender: filteredHymns?.length > 0 ? 'YES' : 'NO'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <Navbar />

      {/* Header Section */}
      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="relative py-20 px-6 overflow-hidden"
      >
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div variants={headerItemVariants} className="flex items-center justify-center mb-6">
            <AnimatedCross />
          </motion.div>

          <motion.h1
            variants={headerItemVariants}
            className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"
            style={{fontFamily: 'Playfair Display, serif'}}
          >
            All Hymns
          </motion.h1>

          <motion.p
            variants={headerItemVariants}
            className="text-xl text-center text-slate-600 max-w-3xl mx-auto mb-12"
            style={{fontFamily: 'Inter, sans-serif'}}
          >
            Explore our complete collection of sacred music and find the perfect hymn for worship, reflection, or inspiration.
          </motion.p>

          <motion.div
            variants={headerItemVariants}
            className="flex justify-center gap-8 flex-wrap"
          >
            <motion.div
              variants={statsVariants}
              className="bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-emerald-100"
            >
              <div className="text-4xl font-bold text-emerald-600 text-center" style={{fontFamily: 'Playfair Display, serif'}}>
                {hymns.length}
              </div>
              <div className="text-sm text-slate-600 text-center" style={{fontFamily: 'Inter, sans-serif'}}>
                Total Hymns
              </div>
            </motion.div>

            <motion.div
              variants={statsVariants}
              className="bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-blue-100"
            >
              <div className="text-4xl font-bold text-blue-600 text-center" style={{fontFamily: 'Playfair Display, serif'}}>
                {[...new Set(hymns.map(h => h.category))].length}
              </div>
              <div className="text-sm text-slate-600 text-center" style={{fontFamily: 'Inter, sans-serif'}}>
                Categories
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.header>

      {/* Search Section */}
      <motion.section
        variants={searchSectionVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 -mt-8 mb-12 relative z-20"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
          <SearchBar
            onSearch={handleSearch}
            searchQuery={searchQuery}
            allHymns={hymns}
            filteredHymns={filteredHymns}
          />
          <div className="mt-4 text-center text-sm text-slate-500" style={{fontFamily: 'Inter, sans-serif'}}>
            Showing {filteredHymns.length} of {hymns.length} hymns
          </div>
        </div>
      </motion.section>

      {/* Hymns Grid Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate="visible"
        >
          {console.log('🎨 About to render grid. filteredHymns:', filteredHymns?.length)}

          {filteredHymns && filteredHymns.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredHymns.map((hymn, index) => {
                console.log(`Rendering hymn ${index}:`, hymn.title, 'ID:', hymn.id);
                return (
                  <motion.div key={`hymn-${hymn.id}-${index}`} variants={cardVariants}>
                    <HymnCard hymn={hymn} />
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🎵</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                No Hymns Found
              </h3>
              <p className="text-slate-600 mb-6" style={{fontFamily: 'Inter, sans-serif'}}>
                We couldn't find any hymns matching your search. Try adjusting your search terms.
              </p>
              <button
                onClick={handleShowAllHymns}
                className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors"
                style={{fontFamily: 'Inter, sans-serif'}}
              >
                Show All Hymns
              </button>
            </div>
          )}
        </motion.div>

        {/* Category Filter Chips */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-800" style={{fontFamily: 'Playfair Display, serif'}}>
            Browse by Category
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[...new Set(hymns.map(h => h.category))].map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryFilter(category)}
                className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium hover:bg-emerald-500 hover:text-white transition-all duration-300"
                style={{fontFamily: 'Inter, sans-serif'}}
              >
                {category} ({hymns.filter(h => h.category === category).length})
              </button>
            ))}
            <button
              onClick={() => handleCategoryFilter('all')}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-slate-600 hover:text-white transition-all duration-300"
              style={{fontFamily: 'Inter, sans-serif'}}
            >
              Show All
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HymnsListPage;