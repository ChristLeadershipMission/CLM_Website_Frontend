
import PropTypes from 'prop-types';

const FaceOfClm = ({ name, campus, maritalStatus, occupation, favoriteVerse, imageSrc }) => {
console.log("ffrgtgrfrrfr");


  return (
    <>
    
    <motion.div
        className="sticky top-0 bg-white z-[800] shadow-2xl shadow-black
        h-[170vh] 
        "
        initial={{
          y: 0,
          transition: {
            duration: 3,
          },
        }}
        whileInView={{
          y: [55,10,0],
          transition: {
            duration: 2,
            delay: .1,
            ease: "linear",
            type: "keyframes",
          },
        }}
      >
    <div>
        frgtbtbtgtt
    </div>
    <div className="bg-red">
          <h1 className="text-center text-xl lg:text-[1.6rem] pb-[4vh] font-black text-[#F66D0A]">
            FACE OF CLM
          </h1>
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
    <motion.div/>
    </>
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
