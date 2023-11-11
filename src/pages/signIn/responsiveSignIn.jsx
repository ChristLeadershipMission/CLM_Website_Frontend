import SignInDesktop from './SignInDesktop';
import SignInMobile from './SignInMobile';
import PropTypes from "prop-types";

const SignIn = ({viewSignUp}) => {
  return (
    <>
    <div className='overflow-hidden'>
      <SignInDesktop viewSignUp={viewSignUp}/>
      <SignInMobile viewSignUp={viewSignUp}/>
    </div>
    </>
  )
};

SignIn.propTypes = {
  viewSignUp: PropTypes.func.isRequired
}

export default SignIn