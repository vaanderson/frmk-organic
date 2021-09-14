import React from "react"
import { Footer } from "../components/Footer/Index";
import { LoginRegister } from "../components/LoginRegister/Index";
import { Header } from "../components/Header/Index"


function Login(){
    return(
        <>
            <Header/>
            <LoginRegister/>
            <Footer/>
       </>
    )
}


export default Login;