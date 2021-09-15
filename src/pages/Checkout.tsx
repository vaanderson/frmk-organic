import React from "react"
import { CheckoutForm } from "../components/Checkout/Index";
import { Footer } from "../components/Footer/Index";
import { Header } from "../components/Header/Index";

function Checkout(){

        return(

            <>
                <Header/>
                <CheckoutForm/>
                <Footer/>
            </>
        )
 
}


export default Checkout;