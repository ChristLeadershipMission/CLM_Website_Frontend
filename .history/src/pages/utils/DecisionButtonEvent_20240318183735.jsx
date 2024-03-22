import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';


const DecisionButtonEvent = ({id, editEvent, deleteEvent }) => {
    return (
        <div
          className="flex justify-center items-center
          md:text-[1.3rem] lg:text-[1rem] gap-[10vw]
          lg:w-[100%] py-4 w-[100%] border-b-4 md:gap-[7vw]
          rounded-b-md bg-transparent lg:gap-[1vw]
          lg:px-4
          "
        >
          {/* bg-[#F66D0A]  */}
          <p
            className="font-bold cursor-pointer py-1 rounded-md ml-0 w-10
            hover:scale-[1.05] transition-all duration-150 delay-75 
            ease-in-out bg-[#F66D0A] px-3 lg:w-[60%] text-black
            order-2
            "
            id={id}
            onClick={() => editEvent(id)}
          >
            {" "}
            <FontAwesomeIcon icon={faPenToSquare} /> Edit
          </p>
          <p
            className="font-bold cursor-pointer hover:scale-[1.05] mr-0
                          transition-all duration-150 delay-75 ease-in-out bg-[#F66D0A] px-3 lg:w-[70%]
                          py-1 text-black rounded-md"
            onClick={() => deleteEvent(id)}
          >
            {" "}
            <FontAwesomeIcon icon={faTrash} /> Delete
          </p>
        </div>
      );
};

DecisionButtonEvent.propTypes = {
    id: PropTypes.number,
    editEvent: PropTypes.func.isRequired,
    deleteEvent: PropTypes.func.isRequired,
  };

export default DecisionButtonEvent;