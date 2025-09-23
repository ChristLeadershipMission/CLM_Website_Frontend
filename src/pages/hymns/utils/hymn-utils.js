// Utility functions for working with hymn data structure

/**
 * Converts the structured lyrics array to a searchable text string
 * @param {Array} lyricsArray - Array of verse/chorus objects with lines
 * @returns {string} - Concatenated lyrics text for searching
 */
export const getLyricsText = (lyricsArray) => {
    if (!lyricsArray || lyricsArray.length === 0) return '';
    return lyricsArray
        .map(section => section.lines.join(' '))
        .join(' ');
};

/**
 * Gets an excerpt from the hymn lyrics for preview
 * @param {Array} lyricsArray - Array of verse/chorus objects with lines
 * @param {number} maxLength - Maximum length of excerpt (default: 50)
 * @returns {string} - Formatted excerpt
 */
export const getLyricsExcerpt = (lyricsArray, maxLength = 50) => {
    if (!lyricsArray || lyricsArray.length === 0) return '';

    // Get the first verse or section
    const firstSection = lyricsArray[0];
    if (!firstSection.lines || firstSection.lines.length === 0) return '';

    // Take the first line or two from the first section
    const excerpt = firstSection.lines.slice(0, 2).join(' ');
    if (excerpt.length <= maxLength) return excerpt;

    return excerpt.substring(0, maxLength) + '...';
};

/**
 * Formats lyrics for display with proper structure
 * @param {Array} lyricsArray - Array of verse/chorus objects with lines
 * @returns {Array} - Array of formatted section objects for rendering
 */
export const formatLyricsForDisplay = (lyricsArray) => {
    if (!lyricsArray || lyricsArray.length === 0) return [];

    return lyricsArray.map((section, index) => ({
        ...section,
        index,
        isChorus: section.type === 'chorus',
        displayLabel: section.type === 'chorus' ? '♪ Chorus' : `Verse ${section.number}`
    }));
};
