import styled from "styled-components";


export const Banner = styled.section`

padding: 2rem 0;
 
`

export const Slide = styled.div`
     display: flex;
     align-items: center;
     @media screen and (max-width: 768px) {
         display: unset;
     }
`

export const ContentSlide = styled.div`
    width: 50%;
    @media screen and (max-width: 768px){
        width: 100%;
        text-align: center;
    }
`


export const Contrast = styled.h4`
    background-color: #8BB326;
    padding: .5rem 1rem;
    border-radius: .3rem;
    font-size: 1.2rem;
    color: #fff;
    font-weight: 400;
    max-width: 18.5rem;
    margin-bottom: 1.2rem;

    @media screen and (max-width: 768px){
        max-width: 100%;
    }

`

export const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 500;
    line-height: 1;
    color: #013330;
`

export const ActionButton = styled.button`
    border: 1px solid #013330;
    padding: 1rem 2rem;
    font-size: 1rem;
    background: none;
    border-radius: .5rem;
    margin-top: 2rem;
    cursor: pointer;
    transition:.3s ;


    &:hover{
        background-color: #013330;
        color: #fff;
    }
`

export const SlideImg = styled.img`
  width: 100%;
   
    
`