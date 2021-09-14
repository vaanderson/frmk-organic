import React from "react";
import { Container } from '../../styles/global';
import * as C from './Styles';

 export function CallToAction(){
     return(
        <C.SectionCall>
            <Container style={{justifyContent : 'space-between'}}>
                
                    <C.TextCall>Trabalhamos muito para aumentar ainda mais a qualidade de nossos produtos e atendimento.
                    <C.SpaceCall/>
                    Dúvidas, reclamações ou sugestões, entre em contato conosco.</C.TextCall>
                    <C.ButtonCall>Fale conosco</C.ButtonCall>
               
            </Container>
        </C.SectionCall>
     )
 }