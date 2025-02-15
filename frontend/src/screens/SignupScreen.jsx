import EmailInput from "../components/EmailInput"
import PasswordInput from "../components/PasswordInput"
import FilledButton from "../components/FilledButton"
import { MdOutlineAccountCircle } from "react-icons/md";

import { Link } from "react-router-dom"

import './SignupScreen.css'

import signupImage from './../assets/images/arranging-files.png'

const SignupScreen = () => {
  return (
    <div className="signup-screen"> 
        {/* Form */}
        <div className="signup-form-container">
            <div>
                <h1>Welcome to Shortify!</h1>
                <h2>Register and start sharing</h2>
                <p>Already having account? {<Link to="/auth/signin">Signin</Link>}</p>
            </div>
            <EmailInput/>
            <PasswordInput/>
            <FilledButton size="large"><MdOutlineAccountCircle/> Register</FilledButton>
            <div className="tnc-container">
                <p>By Registering in with an account, you agree to Shortify's {<Link to="/terms-and-conditions">Terms of Service</Link>}, {<Link to="/privacy-policy">Privacy Policy</Link>} and Acceptable Use Policy.</p>
            </div>
        </div>
        {/* Image */}
        <div>
            <img src={signupImage} alt="signup Image"/>
        </div>
    </div>
  )
}

export default SignupScreen