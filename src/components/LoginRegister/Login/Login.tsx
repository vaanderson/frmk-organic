import { toast } from "react-toastify";
import { api } from "../../../services/api";
import { TitleSection } from "../../../styles/global";
import * as L from "./Styles";
import 'react-toastify/dist/ReactToastify.css';

export function Login() {
    const userName = localStorage.getItem("nome");
    const isLogged = localStorage.getItem("isLogged");
    function handleSubmit(event: any) {
        event.preventDefault();

        api.get('users')
            .then(response => {
                console.log(response.data)

                const users = response.data;

                const email = event.target.elements.email.value;
                const senha = event.target.elements.senha.value;

                const validate = users.filter(function (user: any) {
                    return user.email === email && user.senha === senha;
                });

                if (email === '' || senha === '') {
                    toast.warning("Os campos de email e senha não podem ficar vazios.")
                } else if (validate.length > 0) {

                    localStorage.setItem("isLogged", 'trueLogged');

                    localStorage.setItem("email", email);
                    localStorage.setItem("nome", validate[0].nome);
                    localStorage.setItem("sobrenome", validate[0].sobrenome);

                    toast.success("Bem-vindo(a), " + validate[0].nome)

                    window.location.reload();

                } else {
                    toast.error("Dados incorretos! Por favor, tente novamente.")
                }

            })
    }

    const logout = () => {
        localStorage.clear();
        window.location.reload();
        return false;
    }

    return (

        <L.Content>
            {!isLogged &&
                <L.LoginBox onSubmit={handleSubmit}>
                    <TitleSection style={{ fontSize: '2rem', textAlign: 'center' }}>Entre com seus dados</TitleSection>

                    <L.InputBox>
                        <L.Input placeholder="E-mail" name="email" type="email" />

                    </L.InputBox>

                    <L.InputBox>
                        <L.Input placeholder="Senha" name="senha" type="password" />
                    </L.InputBox>

                    <L.InputBox>
                        <L.ButtonSubmit type="submit">ENTRAR</L.ButtonSubmit>
                    </L.InputBox>

                </L.LoginBox>
            }

            {isLogged &&
                <L.LoggedBox>
                    <TitleSection style={{ textAlign: 'center' }}>{'Olá ' + userName}</TitleSection>
                    <L.ButtonLogout onClick={logout}>Clique aqui para sair</L.ButtonLogout>
                </L.LoggedBox>
            }
        </L.Content>
    )
}