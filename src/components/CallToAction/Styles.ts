import styled from "styled-components";

export const SectionCall = styled.section`
    background-color: #013330;
    padding: 2rem 0;
`
export const TextCall  = styled.p`
    color: #F0E5D9;
    font-size: 1.3rem;
    font-weight: 400;
    @media screen and (max-width: 768px) {
       text-align: center;
    }
    
`
export const ButtonCall = styled.button`
    background-color: #8BB326;
    padding: 1rem 2rem;
    border-radius: .4rem;
    color: #FFF;
    cursor: pointer;
    transition:.3s ;

    &:hover{
        background-color: #698917;
    }

    @media screen and (max-width: 768px) {
        margin-top: 1rem;
    }

`
export const SpaceCall = styled.br``