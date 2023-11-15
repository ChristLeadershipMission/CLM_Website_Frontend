// import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import baseUrl from "../utils/baseUrl";
import axios from "axios";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";

const SignInMobile = ({ viewSignUp }) => {
  const viewPassword = useRef();
  const [hideOrShowPassword, setHideOrShowPassword] = useState(true);
  const [goToSignUp, setGoToSignUp] = useState(false);
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const FormInputHandler = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
    console.log(formInput);
  };

  const postRequest = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/login`;
      const data = {
        email: formInput.email,
        password: formInput.password,
      };
      const response = await axios.post(url, data);
      if (response.status === 200) {
        const userData = JSON.stringify(response.data);
        console.log(userData);
        sessionStorage.setItem("userData", userData);
        console.log(200);
        if (response.data) {
          navigate('/admin');
        }
      }
      console.log(response);
    } catch (error) {
      toast("An error occurred, Please try again");
      console.log(error);
    }
  };

  const pasteLoginDetail = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const showPassword = () => {
    setHideOrShowPassword(!hideOrShowPassword);
    viewPassword.current.type = "text";
  };

  const hidePassword = () => {
    setHideOrShowPassword(!hideOrShowPassword);
    viewPassword.current.type = "password";
  };

  const signInControl = (e) => {
    e.preventDefault();
    console.log("success");
    setGoToSignUp(!goToSignUp);
    setTimeout(() => {
      viewSignUp(true);
    }, 800);
  };

  return (
    <>
      <div 
       className="lg:hidden lg:justify-center lg:pt-[1%] bg-[#0D0A25] 
       h-screen w-screen overflow-hidden relativ">
        <motion.div
          className="px-[1rem] bg-[#0D0A25] h-screen w-screen 
          md:mx-[5rem] border-2 border-black md:w-[80%] 
          md:h-[85vh] order-2 md:bg-gray-300 md:relative 
          md:top-[6rem] md:rounded-2xl"
          animate={{ x: goToSignUp ? 75 : 0, opacity: goToSignUp ? 0 : 1 }}
          initial={{ x: 40, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <ToastContainer />
          <div
            className="bg-[url('/src\assets\pictures\clmLogo.svg')] bg-cover 
          absolute top-[9rem] w-[100%] h-[50%] -ml-4 rounded-lg opacity-[.04] 
          md:-ml-[8rem] md:h-[80%] md:top-[5rem]"
          ></div>
          <div>
            <h1
              className="text-center font-['Arial'] text-2xl 
              min-[764px]:text-[#0D0A25] text-white
               md:text-[2.5rem] pt-[5vh]
               font-bold tracking-wide lg:pt-7"
            >
              Sign In
            </h1>
            <p
              className="text-center py-5 md:py-5 md:text-[1.4rem] min-[764px]:text-[#0D0A25]
               text-white md:font-semibold"
            >
              Welcome back! Please sign in to your account
            </p>
          </div>
          <div>
            <form onSubmit={postRequest} className="py-[6vh] md:py-0">
              <input
                type="text"
                placeholder="Username or Email" onPaste={pasteLoginDetail}
                required
                name="email"
                onChange={FormInputHandler}
                className="w-[85vw] h-[3rem] mb-10 bg-white rounded-lg 
                md:bg-transparent ml-[3vw]
                md:border-b-2 md:border-blue-800 md:rounded-none md:placeholder:text-2xl
                md:mt-[2rem] md:w-[80%] md:ml-[3vw] md:outline-none md:text-2xl md:font-semibold
              pl-3 placeholder:text-black placeholder:font-medium text-black relative"
              />
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  onChange={FormInputHandler} onPaste={pasteLoginDetail}
                  ref={viewPassword}
                  name="password"
                  className="w-[85vw] h-[3rem] mb-10 bg-white rounded-lg md:bg-transparent
                  md:border-b-2 md:border-blue-800 md:rounded-none md:placeholder:text-2xl ml-[3vw] 
                  md:mt-[2rem] md:w-[80%] md:ml-[3vw] md:outline-none md:text-2xl md:font-semibold
                  pl-3 placeholder:text-black placeholder:font-medium text-black font-semibold"
                />
                {hideOrShowPassword ? (
                  <span
                    className="absolute right-10 top-3 md:top-[2rem] md:right-[6rem] text-black"
                    onClick={showPassword}
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </span>
                ) : (
                  <span
                    className="absolute right-10 top-3 md:top-[2rem] md:right-[6rem] text-black"
                    onClick={hidePassword}
                  >
                    <FontAwesomeIcon icon={faEyeSlash} />
                  </span>
                )}
              </div>
              <div className="py-4 lg:py-2 md:ml-[3rem]">
                <input type="checkbox" className="pr-5 bg-white" />
                <span className="md:text-2xl min-[764px]:text-[#0D0A25] text-white">
                  {" "}
                  Forgot Password?
                </span>
              </div>
              <button
                type="submit"
                className="w-[100%] h-[3rem] rounded-md bg-[#F26C0C] md:w-[90%]
                 md:h-[4rem] md:ml-[1.5rem] md:text-2xl md:font-bold md:mt-[2rem]
                text-xl font-semibold text-black relative"
              >
                {" "}
                Sign In
              </button>
              {/* <div className="relative md:mt-[3rem]">
                <hr className="my-5 md:bg-black h-[0.2rem]" />
                <span
                  className="absolute -top-4 left-[8rem] text-lg bg-[#0D0A25]
                  md:bg-gray-300 text-black md:font-bold md:left-[17rem]
                 rounded-2xl w-[2rem] h-[2rem] text-center font-bold"
                >
                  or
                </span>
              </div>
              <button
                className="relative w-[100%] h-[3rem] rounded-md bg-[#D6D6D7] 
                md:bg-[#F26C0C] md:w-[90%]
                md:h-[4rem] md:ml-[1.5rem] md:text-2xl md:font-bold md:mt-[2rem]
             text-md font-bold text-black px-10 my-5 lg:my-4 text-center"
              >
                <span className="absolute left-8 top-5">
                  {" "}
                  <FontAwesomeIcon icon={faGoogle} />{" "}
                </span>
                <span>Continue With Google</span>
              </button>{" "}
              <br />
              <button
                className="relative w-[100%] h-[3rem] rounded-md bg-[#D6D6D7] 
                md:bg-[#F26C0C] md:w-[90%]
                md:h-[4rem] md:ml-[1.5rem] md:text-2xl md:font-bold md:mt-[2rem]
             text-md font-bold text-black px-10 text-center"
              >
                <span className="top-5">
                  {" "}
                  <FontAwesomeIcon icon={faFacebook} />{" "}
                </span>
                <span>Continue With Facebook</span>
                </button> */}
              <div className=" text-center pt-3 md:pt-6 hidden">
                <a
                  href=""
                  className="text-white text-sm font-normal md:text-black
                  md:text-xl md:font-semibold md:hover:text-blue-800
                  underline relative hover:text-blue-400"
                  onClick={signInControl}
                >
                  {" "}
                  Don &apos; &lsquo; &#39; &rsquo; t have an account? Sign Up.
                </a>
              </div> 
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
};

SignInMobile.propTypes = {
  viewSignUp: PropTypes.bool,
}
export default SignInMobile;
