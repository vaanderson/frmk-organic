import { Container } from "../../styles/global";
import * as B from './Styles'

import BannerImg from '../../assets/img/banner.png';

export function Banner(){
    return(

        <Container>
            <B.Banner>
                <B.Slide>

                        <B.ContentSlide>
                     
                              <B.Contrast>Produtos livres de agrotóxicos</B.Contrast>
                     
                            <B.Title>O frescor da natureza para sua mesa.</B.Title>
                            <B.ActionButton>Visitar feira</B.ActionButton>
                        </B.ContentSlide>
                        <B.ContentSlide>
                            <B.SlideImg src={BannerImg}/>
                        </B.ContentSlide>

                </B.Slide>
            </B.Banner>
          

        </Container>
    )
}