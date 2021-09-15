import * as U from './Styles';
import userIconImg from '../../../../assets/img/icons/user.svg'

import { Link } from 'react-router-dom';


export function UserResume(){
    const isLogged = localStorage.getItem("isLogged");
    const userName = localStorage.getItem("nome");
    const logout = () =>{
        localStorage.clear();
        window.location.reload();
        return false;
    }
    return(
        <U.BoxAction>
            <U.UserIcon src={userIconImg} />

            {isLogged && 
                <U.TitleCall>
                    <U.GreenLetter>Olá {userName}!</U.GreenLetter>
                    <U.Space/>
                    <U.Bold onClick={logout} style={{cursor: 'pointer'}}>Clique aqui para sair</U.Bold>
                </U.TitleCall>
            }
            {!isLogged &&  
                <U.TitleCall>
                    <U.GreenLetter>Olá visitante,</U.GreenLetter>
                    <U.Space/>
                    <Link to="/login">  <U.Bold>Entre ou registre-se</U.Bold></Link>
                </U.TitleCall>
            
            }

            
        </U.BoxAction>
    )   
}
