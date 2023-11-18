// import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import clmLogo from "../../../src/assets/pictures/clmLogo.svg";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import baseUrl from "../utils/baseUrl";

const SignInDesktop = ({ viewSignUp }) => {
  const viewPassword = useRef();
  const [hideOrShowPassword, setHideOrShowPassword] = useState(true);
  const [goToSignUp, setGoToSignUp] = useState(false);
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const formButtonRef = useRef();


  const FormInputHandler = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
    console.log(formInput);
  };

  const pasteLoginDetail = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const outerWidth = window.outerWidth;

  console.log(outerWidth);

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

  const postRequest = async (e) => {
    e.preventDefault();
    if (formInput.email && formInput.password) {
      formButtonRef.current.disabled =  true;
      formButtonRef.current.style.backgroundColor = "#854c23"
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
        formButtonRef.current.disabled =  false;
       formButtonRef.current.style.backgroundColor = "#F26C0C"
       console.log
        if (error.response.status === 401) {
          return toast("Invalid Email or Password, Please try again");
        }
        if (error.response.status === 403) {
          return toast("Invalid Email or Password, Please try again");
        }
        toast("An error occurred, Please try again");
        console.log(error);
      }
    }else{
      toast("Please fill all fields");
    }
  };
  

  return (
    <>
      <ToastContainer />
      <div
        className="lg:flex lg:justify-center lg:pt-[5vh] hidden md:hidden
       overflow-hidden relative max-[1028px]:pt-[10vh]"
      >
        <motion.div
          className="px-[1rem] bg-[#0D0A25] h-screen w-screen 
          md:px-[8rem] border-2 border-black lg:w-[30%] lg:h-[35rem] lg:my-5 
          lg:px-[1.5rem] lg:rounded-2xl"
          animate={{ x: goToSignUp ? 75 : 0, opacity: goToSignUp ? 0 : 1 }}
          initial={{ x: 40, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div
            className="bg-[url('/src\assets\pictures\clmLogo.svg')] bg-cover 
          absolute top-[9rem] w-[80vw] h-[50%] -ml-4 rounded-lg opacity-[.04] 
          md:left-[15vw] md:h-[80vh] md:top-[1rem] overflow-hidden"
          ></div>
          <div>
            <h1
              className={`text-center font-['Arial'] text-2xl 
             font-bold pt-10 tracking-wide lg:pt-[12vh]
             ${outerWidth > 1000 ? "text-white" : "text-black"}
             `}
            >
              Sign In
            </h1>
            <p
              className={`
              text-center py-2 ${
                outerWidth > 1000 ? "text-white" : "text-black"
              }
             `}
            >
              Welcome back! Please sign in to your account
            </p>
          </div>
          <div>
            <form onSubmit={postRequest}>
              <input
                type="text"
                placeholder="Username or Email"
                required
                name="email"
                // value={formInput.email}
                onChange={FormInputHandler} onPaste={pasteLoginDetail}
                className="w-[100%] h-[3rem] mb-4 bg-white rounded-lg lg:w-[100%]
              pl-3 placeholder:text-black placeholder:font-medium text-black relative"
              />
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  name="password"
                  // value={formInput.password}
                  onChange={FormInputHandler} onPaste={pasteLoginDetail}
                  ref={viewPassword}
                  className="w-[100%] h-[3rem] mb-4 bg-white rounded-lg lg:w-[100%]
             pl-3 placeholder:text-black placeholder:font-medium text-black font-semibold"
                />
                {hideOrShowPassword ? (
                  <span
                    className="absolute right-6 top-3 text-black"
                    onClick={showPassword}
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </span>
                ) : (
                  <span
                    className="absolute right-6 top-3 text-black"
                    onClick={hidePassword}
                  >
                    <FontAwesomeIcon icon={faEyeSlash} />
                  </span>
                )}
              </div>
              <div
                className={`py-4 lg:py-2 ${
                  outerWidth > 1000 ? "text-white" : "text-black"
                }`}
              >
                <input type="checkbox" className="pr-5 bg-white" />
                <span> Forgot Password?</span>
              </div>
              <button
                type="submit"
                className="w-[100%] h-[3rem] rounded-md bg-[#F26C0C] lg:w-[100%]
                text-xl font-semibold text-black relative" ref={formButtonRef}
              >
                {/* #F26C0C */}
                {" "}
                Sign In
              </button>
              <div className=" text-center pt-3 md:pt-6 hidden">
                <a
                  href=""
                  className="text-white text-sm font-normal underline relative hover:text-blue-400"
                  onClick={signInControl}
                >
                  {" "}
                  Don  &apos; &lsquo; &#39; &rsquo; t have an account? Sign Up.
                </a>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="hidden lg:block h-[35rem] w-[30%] bg-white 
        rounded-2xl order-1 lg:mt-[1.2%] z-50 relative"
          animate={{ x: goToSignUp ? -75 : 0, opacity: goToSignUp ? 0 : 1 }}
          initial={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={clmLogo}
            className="hidden lg:block h-[50%] w-[50%] lg:absolute lg:top-[6rem] lg:right-[7rem]"
          />
          <h3 className="text-black  ml-[7rem] z-40 font-['festive'] text-[2rem] lg:absolute bottom-[8rem]">
            Welcome Back!
          </h3>
        </motion.div>
        {/* Image */}
      </div>
    </>
  );
};

SignInDesktop.propTypes = {
  viewSignUp: PropTypes.bool,
};

export default SignInDesktop;
