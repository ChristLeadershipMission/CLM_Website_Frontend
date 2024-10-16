import { useEffect, useState } from "react";
import PopUpForm from "./PopUpForm";
import "./Biodata.css";
// import axios from "axios";
import storage from "../AdminBoard/Firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import { statesInNigeria } from "./data";
import axios from "axios";
import Successfull from "./Successfull";
import { InputTypeLogic, InputValueLogic } from "./Logic";
import clmLogo from "../../assets/pictures/clmLogo.svg";

const Biodata = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [locationType, setLocationType] = useState("");
  const [bioDataUpdate, setBioDataUpdate] = useState({});
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [successfulBiodata, setSuccessfulBiodata] = useState(false);

  const uploadImage = async (file) => {
    setIsImageUploading(true);
    try {
      const storageRef = ref(storage, "BiodataImages/" + file.name); //This function allows you to create a reference to a specific location in Firebase Storage.
      await uploadBytes(storageRef, file); //This function is used to upload binary data (in this case, an image file) to a specific location in Firebase Storage.
      const downloadURL = await getDownloadURL(storageRef); //his function is used to get the download URL of a file stored in Firebase Storage.
      if (downloadURL) {
        setBioDataUpdate({ ...bioDataUpdate, picture: downloadURL });
        setImageUploaded(true);
        toast("Photo uploaded successfully");
        console.log(downloadURL);
      } else {
        setImageUploaded(false);
        toast("Failed to upload... Please try again later");
      }
    } catch (error) {
      setImageUploaded(false);
      console.log(`An error occurred while uploading: ${error.message}`);
      toast("Upload failed. Please try again.");
    } finally {
      setIsImageUploading(false); // Upload finished
    }
  };

  const selectImage = async (e) => {
    console.log(e.target.files[0]);
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      await uploadImage(file);
    }
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = () => {
    //   imageRef.current.src = reader.result;
    //   imageRef.current.style.width = "10vw";
    //   imageRef.current.style.height = "10vh";
    // };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if image is uploaded before submitting
    if (!imageUploaded || isImageUploading) {
      toast("Please upload an image before submitting.");
      return;
    }
    try {
      const response = await axios.patch(
        "https://clmwebsite.onrender.com/clmWebsite/api/v1/members-data",
        bioDataUpdate
      );
      if (response.status === 200) {
        setSuccessfulBiodata(true);
      }
      console.log(response);
    } catch (error) {
      // toast("An error occurred. Please ensure all fields are completed, and confirm that the image has been successfully uploaded with a confirmation notification.");
    }
    console.log("Submitting data: ", bioDataUpdate);

  };
  const name = [
    {
      name: "First Name",
      dbName: "firstname",
    },
    {
      name: "Last Name",
      dbName: "lastname",
    },
    {
      name: "Email Adress",
      dbName: "emailAddress",
    },
    {
      name: "Phone Number",
      dbName: "phoneNumber",
    },
    {
      name: "DOB (Date of birth)",
      dbName: "dob",
    },
    {
      name: "Profile Picture",
      dbName: "picture",
    },
    {
      name: "Marital Status",
      dbName: "maritalStatus",
    },
  ];
  useEffect(() => {
    setShowPopUp(true);
  }, []);

  return (
    <>
      {successfulBiodata ? (
        <Successfull />
      ) : (
        <div 
        className=" relative w-screen h-screen bg-[#0D0A25] overflow-y-scroll">
          <ToastContainer />
          <div
            className="bg-cover 
          absolute top-[0%] w-screen h-screen -ml-4 rounded-lg opacity-[.04] 
           overflow-hidden left-[0%]"
           style={{ backgroundImage: `url(${clmLogo})`}}
          ></div>
          {showPopUp && (
            <div
              className=" bg-black h-screen w-screen  rounded-md bg-clip-padding backdrop-filter
            backdrop-blur-sm bg-opacity-60 border border-gray-100 absolute z-50"
            >
              {showPopUp && (
                <PopUpForm
                  setShowPopUp={setShowPopUp}
                  setBioDataUpdate={setBioDataUpdate}
                />
              )}
            </div>
          )}

          <div className=" flex justify-center items-center h-screen relative">
            <form onSubmit={handleSubmit}>
              {name.map((labelName, index) => {
                console.log(labelName.dbName);
                const inputType = InputTypeLogic(labelName.name);

                const value = InputValueLogic(labelName.name, bioDataUpdate);

                return (
                  <>
                    <label key={index}>
                      <h1 className="mb-1 text-[#fff] font-medium">
                        {labelName.name}:
                      </h1>
                      {labelName.name === "Marital Status" ? (
                        <>
                          <select
                            className="w-[18rem] font-medium bg-transparent text-white border border-white py-1 rounded-md mb-2"
                            onChange={(e) =>
                              setBioDataUpdate({
                                ...bioDataUpdate,
                                maritalStatus: e.target.value,
                              })
                            }
                          >
                            <option
                              value="select an option"
                              disabled
                              selected
                              className=" mb-1 text-[#fff]"
                            >
                              Select an option
                            </option>
                            <option
                              value="Single"
                              className=" mb-1 text-[#fff]"
                            >
                              Single
                            </option>
                            <option
                              value="Engage"
                              className=" mb-1 text-[#fff]"
                            >
                              Engage
                            </option>
                            <option
                              value="Married"
                              className=" mb-1 text-[#fff]"
                            >
                              Married
                            </option>
                          </select>
                        </>
                      ) : labelName.name === "Profile Picture" ? (
                        <input
                          type="file"
                          required
                          name={labelName.dbName}
                          onChange={selectImage}
                          className="w-[18rem] font-medium bg-[#0D0A25] border border-white py-1 rounded-md mb-2 px-3 text-white"
                        />
                      ) : (
                        <input
                          type={inputType}
                          value={value}
                          name={labelName.dbName}
                          required
                          onChange={(e) =>
                            setBioDataUpdate({
                              ...bioDataUpdate,
                              [e.target.name]: e.target.value,
                            })
                          }
                          className="text-white w-[18rem] font-medium bg-[#0D0A25] border border-white py-1 rounded-md mb-2 px-3"
                        />
                      )}
                    </label>
                  </>
                );
              })}
              <div>
                <label className="mb-1">
                  <h1 className=" text-[#fff] font-medium">Gender:</h1>
                  <div className="flex gap-1 justify-between items-center">
                    <label className="flex gap-1">
                      <h1 className="text-white font-medium text-lg">Male</h1>
                      <input
                        type="radio"
                        required
                        name="gender"
                        value="male"
                        className="w-[100%] mt-2"
                        onChange={(e) =>
                          setBioDataUpdate({
                            ...bioDataUpdate,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </label>
                    <label className="flex gap-1">
                      <h1 className="text-white font-medium text-lg">Female</h1>
                      <input
                        type="radio"
                        required
                        name="gender"
                        value="female"
                        className="w-[100%]"
                        onChange={(e) =>
                          setBioDataUpdate({
                            ...bioDataUpdate,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </label>
                  </div>
                </label>

                <h1 className=" text-[#fff] font-medium mt-1">
                  Location(choose location type):
                </h1>
                <div className="flex gap-1 justify-between items-center">
                  <label className="flex gap-1">
                    <h1 className="text-white font-medium text-lg">State</h1>
                    <input
                      type="radio"
                      required
                      name="locationType"
                      value="state"
                      className="w-[100%] "
                      onChange={(e) => setLocationType(e.target.value)}
                    />
                  </label>
                  <label className="flex gap-1">
                    <h1 className="text-white font-medium text-lg">Campus</h1>
                    <input
                    required 
                      type="radio"
                      name="locationType"
                      value="campus"
                      className="w-[100%] mt-1"
                      onChange={(e) => setLocationType(e.target.value)}
                    />
                  </label>
                </div>
                {locationType === "state" ? (
                  <select
                  required
                    name="location"
                    id=""
                    className="w-[18rem] mt-2 font-medium mr-[1rem] bg-transparent text-white border border-white py-1 rounded-md mb-2"
                    onChange={(e) =>
                      setBioDataUpdate({
                        ...bioDataUpdate,
                        [e.target.name]: e.target.value,
                      })
                    }
                  >
                    <option
                      value="select an option"
                      disabled
                      selected
                      className="mb-1 text-[#fff]"
                    >
                      Select state
                    </option>
                    {statesInNigeria.map((state) => (
                      <option
                        key={state}
                        value={state}
                        className="mb-1 text-[#fff]"
                      >
                        {state}
                      </option>
                    ))}
                  </select>
                ) : locationType === "campus" ? (
                  <input
                    type="name"
                    required
                    // value={""}
                    name="location"
                    onChange={(e) =>
                      setBioDataUpdate({
                        ...bioDataUpdate,
                        [e.target.name]: e.target.value,
                      })
                    }
                    className="w-[18rem] font-medium bg-[#0D0A25] border border-white py-1 rounded-md mb-2 px-3 text-white"
                  />
                ) : null}
              </div>
              <div className="mt-3 flex justify-center items-center relative bottom-1">
            <button
              type="submit"
              className="w-[100%] h-[2rem] rounded-md bg-[#F26C0C] lg:w-[100%]
              text-xl font-semibold text-black relative"
              // onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Biodata;
