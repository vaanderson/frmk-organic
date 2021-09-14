import { Container } from '../../styles/global';
import * as H from './Styles';
import LogoImg from '../../assets/img/logo.svg'
import { Search } from './Search/Search';
import { UserActions } from './UserActions/UserActions';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export function Header(){

    const [keywords, setkeywords] = useState<string>('');

    return(
        <H.Header> 
            <Container>
                <H.Brand>
                   <Link to="/"><H.Logo src={LogoImg} alt="Logo Frmk. Organic"/></Link>
                </H.Brand>

                <Search callback={(keywords) => { setkeywords(keywords) }} />
                <UserActions/>

            </Container>
        </H.Header>
         
    )
}

