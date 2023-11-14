import PropTypes from "prop-types";


const EmptyData = ({message}) => {
  return (
    <>
      <div 
      className="flex justify-center items-center h-[50vh] bg-[#0A063E] 
      mx-10 my-14 rounded-lg lg:text-2xl font-bold shadow-md text-white">
        {message}
     </div>
    </>
  );
};

EmptyData.propTypes = {
  message: PropTypes.string,
}

export default EmptyData;
