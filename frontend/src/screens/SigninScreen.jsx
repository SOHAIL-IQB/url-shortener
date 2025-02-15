import EmailInput from "../components/EmailInput"
import PasswordInput from "../components/PasswordInput"
import FilledButton from "../components/FilledButton"
import { FaSignInAlt } from "react-icons/fa";
import { useState, useContext } from "react";
import axios from "axios";

import AppContext from "../context";

const {VITE_APP_BACKEND_API_BASE_URL} = import.meta.env

import { Link, useNavigate } from "react-router-dom"

import './SigninScreen.css'

import SignInImage from './../assets/images/arranging-files.png'

const SigninScreen = (props) => {

    const {isLoginedUser, setIsLoginedUser} = useContext(AppContext)

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const navigation = useNavigate()

    const LoginHandler = async ()=>{
    
        try{

            // Call API

            const API_URL = VITE_APP_BACKEND_API_BASE_URL + "/auth/signin"
            const data = {
                email : email,
                password : password
            }

            const signinApiResponse = await axios.post(API_URL, data)

            const {success, token, message} = signinApiResponse.data
    
            if(!success){
                alert(message)
            }else{
                // set token inside localstorage of the browser
                localStorage.setItem("token", token)
                // redirect user to the dashboard
                setIsLoginedUser(true)
                navigation("/dashboard/links")
            }

        }catch(err){
            alert(err.message)
        }

    }

    return (
        <div className="signin-screen"> 
            {/* Form */}
            <div className="signin-form-container">
                <div>
                    <h1>Welcome to Shortify!</h1>
                    <h2>Login and start sharing</h2>
                    <p>Don't have any account? {<Link to="/auth/signup">Register</Link>}</p>
                </div>
                <EmailInput setEmail={setEmail} />
                <PasswordInput setPassword={setPassword}/>
                <div>
                    <Link to="/auth/forgot-password"><span>Forgot your password?</span></Link>
                </div>
                <FilledButton onClick={LoginHandler} size="large"><FaSignInAlt/> Login</FilledButton>
                <div>
                    <p>By logging in with an account, you agree to Shortify's {<Link to="/terms-and-conditions">Terms of Service</Link>}, {<Link to="/privacy-policy">Privacy Policy</Link>} and Acceptable Use Policy.</p>
                </div>
            </div>
            {/* Image */}
            <div>
                <img src={SignInImage} alt="Signin Image"/>
            </div>
        </div>
    )

}

export default SigninScreen