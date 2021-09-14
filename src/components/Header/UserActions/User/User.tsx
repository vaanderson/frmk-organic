import * as U from './Styles';
import userIconImg from '../../../../assets/img/icons/user.svg'

import { Link } from 'react-router-dom';


export function UserResume(){

    return(
        <U.BoxAction>
            <U.UserIcon src={userIconImg} />
            <U.TitleCall>
                <U.GreenLetter>Olá visitante,</U.GreenLetter>
                <U.Space/>
              <Link to="/login">  <U.Bold>Entre ou registre-se</U.Bold></Link>
            </U.TitleCall>
        </U.BoxAction>
    )   
}