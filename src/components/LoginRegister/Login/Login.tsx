import { TitleSection } from "../../../styles/global";
import * as L from "./Styles";

export function Login(){
    return (

        <L.LoginBox>
            <TitleSection style={{fontSize: '2rem'}}>Entre com seus dados</TitleSection>

            <L.InputBox>
                <L.Input placeholder="E-mail" type="email"   />
                
            </L.InputBox>

            <L.InputBox>
                <L.Input placeholder="Senha"  type="password" />
            </L.InputBox>

            <L.InputBox>
                <L.ButtonSubmit type="submit">ENTRAR</L.ButtonSubmit>
            </L.InputBox>

        </L.LoginBox>
    )
}