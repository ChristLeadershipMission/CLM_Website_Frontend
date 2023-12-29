// FaceOfClm.jsx
import React from 'react';

const FaceOfClm = ({ name, campus, maritalStatus, occupation, favoriteVerse, imageSrc }) => {
  return (
    <div className="bg-gradient-to-b from-indigo-900 to-blue-500 text-white py-12">
      <div className="container mx-auto flex flex-col items-center">
        <img
          src={imageSrc}
          alt={name}
          className="rounded-full w-32 h-32 border-4 border-white mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-lg mb-2">{campus}</p>
        <p className="text-lg mb-2">{maritalStatus}</p>
        <p className="text-lg mb-2">{occupation}</p>
        <p className="text-lg mb-8">{favoriteVerse}</p>
      </div>
    </div>
  );
};

export default FaceOfClm;
