/* eslint-disable react/prop-types */
import axios from "axios";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

// eslint-disable-next-line no-unused-vars
const PopUpForm = ({ setShowPopUp, setBioDataUpdate }) => {
  const inputRef = useRef();
  const [AddBg, setAddBg] = useState(false);
  const [contact, setContact] = useState("");

  const BiodataCheck = (e) => {
    e.preventDefault();
    console.log(contact);
    sendRequest(contact);
    // setShowPopUp(false);
    // +23408089649909
  };

  const sendRequest = async (contactInfo) => {
    try {
      if (contact === "" || contact === undefined || contact.startsWith(" ")) {
        return toast("Input field cannot be empty.");
      }
      const response = await axios.get(
        `https://clmwebsite.onrender.com/clmWebsite/api/v1/members-data/search?searchParam=${contactInfo}`
      );
      if (response.data) {
        if (response.data.data) {
          setBioDataUpdate(response.data.data);
        }else{
          setBioDataUpdate({
            "id": undefined,
            "firstname": "",
            "lastname": "",
            "phoneNumber": "",
            "emailAddress": "",
            "location": "",
            "gender": "",
            "dob": "",
            "picture": "",
            "maritalStatus": ""
        });
        }
        localStorage.setItem("userInfo", JSON.stringify(response.data.data));
        setShowPopUp(false);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="w-screen h-screen flex justify-center items-center rounded-md
       absolute
      "
    >
      <ToastContainer />
      <div
        className="bg-[#0D0A25] bg-opacity-70 h-[50%] w-[80%] rounded-lg p-5 
          flex justify-center items-center
          "
      >
        <div>
          <h1 className="mb-3 font-mono font-bold text-white">
            Enter email or phone number:
          </h1>
          <form>
            <input
              onFocus={() => setAddBg(true)}
              onBlur={() => setAddBg(false)}
              onChange={(e) => setContact(e.target.value)}
              ref={inputRef}
              type="text"
              required
              style={{
                outline: "none",
                borderBottomWidth: 4,
                borderBottomColor: "white",
                backgroundColor: `${AddBg ? "white" : "transparent"}`,
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                color: `${AddBg ? "black" : "white"}`,
              }}
              className={`w-[99%] h-[15%] font-medium mb-2 text-black
             outline-none p-3 ${
               AddBg ? "bg-white rounded-md shadow-sm" : null
             }`}
            />
            <button
              type="submit"
              className="px-5 py-2 mt-2  text-xl font-medium text-black bg-[#F26C0C] hover:bg-[#F26C0f] rounded-md"
              onClick={(e) => BiodataCheck(e)}
            >
              {" "}
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopUpForm;
