// import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const SignUpMobile = ({ viewSignIn }) => {
  const viewPassword = useRef();
  const [hideOrShowPassword, setHideOrShowPassword] = useState(true);
  const [goToSignUp, setGoToSignUp] = useState(false);

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
      <div className="lg:hidden lg:justify-center lg:pt-[3%] bg-[#0D0A25] h-screen">
        <motion.div
          className="px-[1rem]  h-screen w-screen 
          md:mx-[5rem] border-2 border-black md:w-[80%] 
          md:h-[70vh] order-2 md:bg-gray-300 md:relative 
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
            font-bold pt-10 tracking-wide lg:pt-7 md:text-[#0D0A25]
            md:text-[2.5rem]
            ">
              Sign Up
            </h1>
            <p className="text-center py-2 md:text-[1.5rem] md:text-[#0D0A25]
            md:font-semibold
            ">Please sign up to get started.</p>
          </div>
          <div>
            <form action="/" method="post">
              <input
                type="text"
                placeholder="Username"
                required
                className="w-[100%] h-[3rem] mb-4 bg-white md:bg-transparent
                md:border-b-2 md:border-blue-800 md:rounded-none md:placeholder:text-2xl
                md:mt-[2rem] md:w-[80%] md:ml-[3rem] md:outline-none md:text-2xl md:font-semibold
              pl-3 placeholder:text-black placeholder:font-medium text-black relative"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-[100%] h-[3rem] mb-4 bg-white md:bg-transparent
                md:border-b-2 md:border-blue-800 md:rounded-none md:placeholder:text-2xl
                md:mt-[2rem] md:w-[80%] md:ml-[3rem] md:outline-none md:text-2xl md:font-semibold
              pl-3 placeholder:text-black placeholder:font-medium text-black relative"
              />
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  ref={viewPassword}
                  className="w-[100%] h-[3rem] mb-4 bg-white md:bg-transparent
                  md:border-b-2 md:border-blue-800 md:rounded-none md:placeholder:text-2xl
                  md:mt-[2rem] md:w-[80%] md:ml-[3rem] md:outline-none md:text-2xl md:font-semibold
             pl-3 placeholder:text-black placeholder:font-medium text-black font-semibold"
                />
                {hideOrShowPassword ? (
                  <span
                    className="absolute right-6 top-3 md:top-[2rem] md:right-[6rem] text-black"
                    onClick={showPassword}
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </span>
                ) : (
                  <span
                    className="absolute right-6 top-3 md:top-[2rem] md:right-[6rem] text-black"
                    onClick={hidePassword}
                  >
                    <FontAwesomeIcon icon={faEyeSlash} />
                  </span>
                )}
              </div>
              <div className="py-4 md:ml-[3rem]">
                <input type="checkbox" 
                className="pr-5 bg-white" 
                />
                <span className="md:text-2xl md:text-black">
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
              >
                {" "}
                Create Account
              </button>
              <div className=" text-center pt-3 md:pt-6 lg:mb-[1rem]">
                <a
                  href=""
                  className="text-white text-sm font-normal underline 
                  md:text-xl md:font-semibold md:text-black md:hover:text-blue-800
                  relative focus:text-red-30 hover:text-blue-200 md:text-black"
                  onClick={signInControl}
                >
                  {" "}
                  Don't have an account? Sign In.
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
