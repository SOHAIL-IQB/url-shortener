import { useEffect, useState, useContext } from "react"
import OutlinedButton from "./OutlinedButton"
import FilledButton from "./FilledButton"

import AppContext from "../context"

import { useNavigate, Link } from "react-router-dom"

import './Navbar.css'

const Navbar = (props) => {

    const {isLoginedUser, setIsLoginedUser} = useContext(AppContext)


    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token){
            setIsLoginedUser(true)
        }else{
            setIsLoginedUser(false)
        }
    },[])
  
    return (
        <div className="navbar-container">
            <div><Link to={isLoginedUser ? "/dashboard/links" : "/"}><h2>SHORTIFY</h2></Link></div>
            <div>
                {isLoginedUser ? <LoginedUserNavbarComponent/> : <LogoutUserNavbarComponet/>}
            </div>
        </div>
    )

}

const LoginedUserNavbarComponent = ()=>{

    const navigate = useNavigate()

    const {isLoginedUser, setIsLoginedUser} = useContext(AppContext)

    return (
        <>
            <OutlinedButton onClick={()=>{navigate("/dashboard/links")}}>Links</OutlinedButton>
            <OutlinedButton onClick={()=>{navigate("/dashboard/organization")}}>Organization</OutlinedButton>
            <FilledButton 
                onClick={()=>{
                    // remove the token
                    localStorage.removeItem("token")
                    // update the isLogedInUser state of the APP
                    setIsLoginedUser(false)
                    // redirect to the /auth/signin
                    navigate("/auth/signin")
                }}
                color="danger"
            >Logout</FilledButton>
        </>
    )
}

const LogoutUserNavbarComponet = ()=>{

    const navigate = useNavigate()

    return(
        <>
            <FilledButton onClick={()=>{ navigate("/auth/signin") }}>Signin</FilledButton>
            <FilledButton  onClick={()=>{ navigate("/auth/signup") }} color="secondary">Signup</FilledButton>
        </>
    )
}

export default Navbar