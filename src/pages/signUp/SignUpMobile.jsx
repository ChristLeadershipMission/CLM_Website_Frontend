// import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./signup.css";
import { useNavigate } from "react-router-dom";

const SignUpMobile = ({ viewSignIn }) => {
  const viewPassword = useRef();
  const [hideOrShowPassword, setHideOrShowPassword] = useState(true);
  const [goToSignUp, setGoToSignUp] = useState(false);
  const [username, SetUsername] = useState();
  const [password, SetPassword] = useState();
  const [email, SetEmail] = useState();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const navigate = useNavigate();
  const usernameValidationRef = useRef();
  const emailValidationRef = useRef();
  const passwordValidationRef = useRef();
  let trimusername;
  let trimPassword;

  const submitReg = (e) => {
    e.preventDefault();
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email) {
      setIsValidEmail(emailRegex.test(email));
      console.log(isValidEmail);
      if (isValidEmail) {
        emailValidationRef.current.style.display = "none";
      } else {
        emailValidationRef.current.style.display = "block";
      }
    } else {
      emailValidationRef.current.style.display = "block";
    }

    if (username) {
      trimusername = username.trim();
      if (trimusername !== "") {
        usernameValidationRef.current.style.display = "none";
      } else {
        usernameValidationRef.current.style.display = "block";
        SetUsername("");
      }
    } else {
      usernameValidationRef.current.style.display = "block";
    }

    if (password) {
      trimPassword = password.trim();
      if (trimPassword !== "") {
        passwordValidationRef.current.style.display = "none";
      } else {
        passwordValidationRef.current.style.display = "block";
      }
    } else {
      passwordValidationRef.current.style.display = "block";
    }
    console.log(
      username === undefined &&
        trimusername !== "" &&
        trimusername === undefined
    );

    

    // navigate("/confirmation");
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
      viewSignIn(false);
    }, 800);
  };

  return (
    <>
      <div className="lg:hidden lg:justify-center lg:pt-[3%] bg-[#0D0A25] h-screen w-screen overflow-hidden  relative">
        <motion.div
          className="px-[1rem]  h-screen w-screen 
          md:mx-[5rem] border-2 border-black md:w-[80%] 
          md:h-[80vh] order-2 md:bg-gray-300 md:relative 
          md:top-[6rem] md:rounded-2xl"
          animate={{ x: goToSignUp ? -75 : 0, opacity: goToSignUp ? 0 : 1 }}
          transition={{ duration: 1 }}
          initial={{ x: -40, opacity: 0 }}
        >
          <div
            className="bg-[url('/src\assets\pictures\clmLogo.svg')] bg-cover 
          absolute top-[9rem] w-[100%] h-[50%] -ml-4 rounded-lg opacity-[.04] 
          md:-ml-[8rem] md:h-[80%] md:top-[5rem]"
          ></div>
          <div>
            <h1
              className="text-center font-['Arial'] text-2xl 
            font-bold pt-[10vh] tracking-wide lg:pt-7 text-white
            md:text-[2.5rem] min-[764px]:text-[#0D0A25]
            "
            >
              Sign Up
            </h1>
            <p
              className="text-center py-5 md:text-[1.5rem] min-[764px]:text-[#0D0A25]
            md:font-semibold text-white
            "
            >
              Please sign up to get started.
            </p>
          </div>
          <div>
            <form action="" method="post" className="py-[6vh] md:py-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Username"
                  required
                  className={`w-[85vw] h-[3rem] mb-10 bg-white md:bg-transparent ml-[3vw] 
                md:border-b-2 md:border-blue-800 md:rounded-none md:placeholder:text-2xl
                md:mt-[2rem] md:w-[80%] md:ml-[3rem] md:outline-none md:text-2xl md:font-semibold
                pl-3 placeholder:text-black placeholder:font-medium text-black relative rounded-md`}
                  onChange={(e) => SetUsername(e.target.value)}
                  onFocus={() =>
                    (usernameValidationRef.current.style.display = "none")
                  }
                />
                <p
                  className="mb-9 ml-[5vw] text-red-600 font-bold hidden absolute top-[8vh]"
                  ref={usernameValidationRef}
                >
                  This field is required
                </p>
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className={`w-[85vw] h-[3rem] ${
                    !isValidEmail ? "mb-1" : "mb-10"
                  } bg-white md:bg-transparent ml-[3vw] 
                md:border-b-2 md:border-blue-800 md:rounded-none md:placeholder:text-2xl
                md:mt-[2rem] md:w-[80%] md:ml-[3rem] md:outline-none md:text-2xl md:font-semibold
                 pl-3 placeholder:text-black placeholder:font-medium text-black relative rounded-md`}
                  onChange={(e) => SetEmail(e.target.value)}
                  onFocus={() =>
                    (emailValidationRef.current.style.display = "none")
                  }
                />
                <p
                  className="mb-9 ml-[5vw] text-red-600 font-bold hidden absolute top-[8vh]"
                  ref={emailValidationRef}
                >
                  This field is required
                </p>
              </div>

              <div className="relative">
                <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  ref={viewPassword}
                  className={`w-[85vw] h-[3rem] mb-10 bg-white md:bg-transparent ml-[3vw] 
                  md:border-b-2 md:border-blue-800 md:rounded-none md:placeholder:text-2xl
                  md:mt-[2rem] md:w-[80%] md:ml-[3rem] md:outline-none md:text-2xl md:font-semibold
                  pl-3 placeholder:text-black placeholder:font-medium text-black font-semibold rounded-md`}
                  onChange={(e) => SetPassword(e.target.value)} onFocus={() =>
                    (passwordValidationRef.current.style.display = "none")
                  }
                />
                <p
                  className="mb-9 ml-[5vw] text-red-600 font-bold hidden absolute top-[8vh]"
                  ref={passwordValidationRef}
                >
                  This field is required
                </p>
                </div>
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
              <div className="py-4 md:ml-[3rem]">
                <input type="checkbox" className="pr-5 bg-white" />
                <span className="md:text-2xl min-[764px]:text-black text-white">
                  {" "}
                  I agree with{" "}
                  <span className="underline">Terms and Conditions</span>
                </span>
              </div>
              <button
                type="submit"
                className="w-[100%] h-[3rem] rounded-md bg-[#F26C0C] 
             text-xl font-semibold text-black mt-5 mb-3 hover:shadow-md 
             md:w-[90%] md:h-[4rem] md:ml-[1.5rem] md:text-2xl md:font-bold
             hover:cursor-pointer relative hover:shadow-yellow-800 md:mt-14"
                onClick={submitReg}
              >
                {" "}
                Create Account
              </button>
              <div className="md:absolute bottom-5 text-center pt-3 md:pt-6 lg:mb-[1rem] ">
                <a
                  href=""
                  className="text-white text-sm font-normal pb-10 pd:mb-0
                  md:text-2xl md:font-semibold md:hover:text-blue-800
                  relative focus:text-red-30 hover:text-blue-200
                   min-[764px]:text-black md:pl-[15vw] lg:pl-0 no-underline"
                  onClick={signInControl}
                >
                  {" "}
                  Do you have an account? Sign In.
                </a>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SignUpMobile;
