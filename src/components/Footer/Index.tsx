
import { Container } from '../../styles/global';
import LogoImg from '../../assets/img/logo.svg'
import * as F from './Style';


export function Footer(){
    return (
        <>
            <F.FooterContent>
                <Container>
                <F.FooterLogo src={LogoImg}/>
                </Container>
            </F.FooterContent>
            <F.FooterCopy>
                <F.CopyText>Todos os direitos reservados. Site desenvolvido como proposta para o teste ofertado pela empresa Framework Systems.</F.CopyText>
            </F.FooterCopy>

        </>
    )
}