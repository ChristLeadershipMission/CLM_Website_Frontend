// import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import clmLogo from "../../../src/assets/pictures/clmLogo.svg";
import { motion } from "framer-motion";

const SignUpDesktop = ({ viewSignIn }) => {
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
    setGoToSignUp(!goToSignUp);
    setTimeout(() => {
      viewSignIn(false);
    }, 800);
  };

  return (
    <>
      <div className="lg:flex lg:justify-center lg:pt-[3%] hidden md:hidden">
        <motion.div
          className="px-[1rem] bg-[#0D0A25] h-screen w-screen 
       md:px-[8rem] border-2 border-black lg:w-[30%] lg:h-[32rem] lg:my-5 
       lg:px-[3rem]  lg:rounded-2xl order-2"
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
            <h1 className="text-center font-['Arial'] text-2xl font-bold pt-10 tracking-wide lg:pt-7">
              Sign Up
            </h1>
            <p className="text-center py-2">Please sign up to get started.</p>
          </div>
          <div>
            <form action="/" method="post">
              <input
                type="text"
                placeholder="Username"
                required
                className="w-[100%] h-[3rem] mb-4 bg-white rounded-lg lg:w-[100%]
              pl-3 placeholder:text-black placeholder:font-medium text-black relative"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-[100%] h-[3rem] mb-4 bg-white rounded-lg lg:w-[100%]
              pl-3 placeholder:text-black placeholder:font-medium text-black relative"
              />
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  required
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
              <div className="py-4 lg:py-2">
                <input type="checkbox" className="pr-5 bg-white" />
                <span>
                  {" "}
                  I agree with{" "}
                  <span className="underline">Terms and Conditions</span>
                </span>
              </div>
              <button
                type="submit"
                className="w-[100%] h-[3rem] rounded-md bg-[#F26C0C] lg:w-[100%]
             text-xl font-semibold text-black mt-5 mb-3 hover:shadow-md hover:cursor-pointer relative hover:shadow-yellow-800"
              >
                {" "}
                Create Account
              </button>
              <div className=" text-center pt-3 md:pt-6 lg:mb-[1rem]">
                <a
                  href=""
                  className="text-white text-sm font-normal underline relative focus:text-red-30 hover:text-blue-200"
                  onClick={signInControl}
                >
                  {" "}
                  Don't have an account? Sign In.
                </a>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="hidden lg:block h-[32rem] w-[30%] bg-white 
         rounded-2xl order-1 lg:mt-[1.2%] z-50 relative"
          animate={{
            x: goToSignUp ? 408 : 0,
            opacity: goToSignUp ? 0 : [0.5, 1],
          }}
          initial={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={clmLogo}
            className="hidden lg:block h-[50%] w-[50%] lg:absolute lg:top-[6rem] lg:left-[6rem]"
          />
          <h3 className=" text-black ml-[7rem] z-40 font-['festive'] text-[2rem] lg:absolute bottom-[6rem]">
            Welcome Back!
          </h3>
        </motion.div>
        {/* Image */}
      </div>
    </>
  );
};

export default SignUpDesktop;
