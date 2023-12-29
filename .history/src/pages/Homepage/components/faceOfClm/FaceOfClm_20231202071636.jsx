// FaceOfClm.jsx
import React from 'react';
import PropTypes from 'prop-types';

const FaceOfClm = ({ name, campus, maritalStatus, occupation, favoriteVerse, imageSrc }) => {
  return (
    <div className="bg-gradient-to-b from-indigo-900 to-blue-500 text-white py-12 flex justify-center items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Left Side: Person's Image */}
        <img
          src={imageSrc}
          alt={name}
          className="rounded-full w-32 h-52 border-4 border-white mb-4 md:mr-8"
        />

        {/* Right Side: Details */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="text-lg mb-2">{campus}</p>
          <p className="text-lg mb-2">{maritalStatus}</p>
          <p className="text-lg mb-2">{occupation}</p>
          <p className="text-lg mb-8">{favoriteVerse}</p>
        </div>
      </div>
    </div>
  );
};

FaceOfClm.propTypes = {
  name: PropTypes.string.isRequired,
  campus: PropTypes.string.isRequired,
  maritalStatus: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  favoriteVerse: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default FaceOfClm;
