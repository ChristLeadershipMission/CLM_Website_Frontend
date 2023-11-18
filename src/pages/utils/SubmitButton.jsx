import PropTypes from "prop-types";
const SubmitButton = ({request, uploadOrupdate}) => {
    const submitForm = (e) =>{
      e.preventDefault();
        request();
    };

  return (
    <button
      type="submit"
      className="w-full bg-[#0A063E] text-lg 
      p-2 rounded-md text-white hover:bg-[#1f2555] mt-5"
      onClick={submitForm}
    >
      {uploadOrupdate}
    </button>
  );
};

SubmitButton.propTypes = {
    request: PropTypes.func.isRequired,
    uploadOrupdate: PropTypes.string,
}

export default SubmitButton;
