import successful from "../../../images/successful.svg";

const Successfull = () => {
  return (
    <div className="h-screen overflow-hidden">
          <img
            src={successful}
            alt="successful"
            className="absolute z-50 top-0"
          />
        </div>
  )
}

export default Successfull;