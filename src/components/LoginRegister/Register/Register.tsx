import { Space, TitleSection } from "../../../styles/global";
import * as R from "./Styles";

export function Register(){
    return (
        <R.RegisterBox>
            <TitleSection style={{fontSize: '2rem'}}>Ainda não possui conta? <Space/> Registre-se</TitleSection>
            <R.InputBox style={{display: 'unset'}}>
                <R.Input style={{width: '45%', marginRight: '10%'}} placeholder="Nome" type="email"   />
                <R.Input style={{width: '45%' }} placeholder="Sobrenome" type="email"   />
            </R.InputBox>

            <R.InputBox>
                <R.Input placeholder="E-mail" type="email"   />
            </R.InputBox>

            <R.InputBox>
                <R.Input placeholder="Senha"  type="password" />
            </R.InputBox>

            <R.InputBox>
                <R.ButtonSubmit type="submit">Registrar</R.ButtonSubmit>
            </R.InputBox>

        </R.RegisterBox>
    )
}