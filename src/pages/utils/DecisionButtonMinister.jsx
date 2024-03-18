import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';


const DecisionButtonMinister = ({ id, editMinister, deleteMinister }) => {
  return (
    <div
      className="flex justify-center items-center gap-5
      pb-5 absolute lg:bottom-[-2vh] lg:pl-[0vw] md:text-[1.3rem] 
      lg:text-[1rem] md:bottom-[0.5vh] bottom-[-0.5vh] lg:w-[100%]  
      py-2 lg:gap-1 w-full"
    >
      {/* bg-[#F66D0A]  */}
      <p
        className="font-bold cursor-pointer py-1 rounded-md
        hover:scale-[1.05] transition-all duration-150 delay-75 
        ease-in-out bg-[#F66D0A] px-3 lg:w-[40%] text-black
        order-2 lg:px-1 text-center md:w-[32%] w-[30%]
        "
        id={id}
        onClick={() => editMinister(id)}
      >
        {" "}
        <FontAwesomeIcon icon={faPenToSquare} /> Edit
      </p>
      <p
        className="font-bold cursor-pointer hover:scale-[1.05] mr-5
        transition-all duration-150 delay-75 ease-in-out bg-[#F66D0A] px-3 
        lg:w-[40%] py-1 text-black rounded-md text-center md:w-[32%] w-[30%]"
        onClick={() => deleteMinister(id)}
      >
        {" "}
        <FontAwesomeIcon icon={faTrash} /> Delete
      </p>
    </div>
  );
};

DecisionButtonMinister.propTypes = {
    id: PropTypes.number,
    editMinister: PropTypes.func.isRequired,
    deleteMinister: PropTypes.func.isRequired,
  };

export default DecisionButtonMinister;
