import { Container } from "../../styles/global";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";


export function LoginRegister(){
    return(

        <Container>
                <Login/>
                <Register/>
        </Container>


        
    )
}