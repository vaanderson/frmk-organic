import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        border: 0;
    }
    html{
        -webkit-font-smoothing: antialiased;

        @media (max-width: 1080px){
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px){
            font-size: 87.5%; // 14px
        }
    }
    body{
        background-color: #EBEBEB;
        -webkit-font-smoothing: antialiased;
    }
    body, input, button{
        font-family: 'Barlow', sans-serif;
        font-weight: 400;
    }
    a {
        color: inherit; 
        text-decoration: inherit;  
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
  `

export const Container = styled.div`
        margin-right: auto;
        margin-left: auto;
        padding-right: 15px;
        padding-left: 15px;
        

        width: 100%;
        max-width: 100%;

        display: flex;
        flex-wrap: wrap;

        flex-direction: row;

        @media screen and (max-width: 768px) {
            flex-direction: column;
        }
        
        @media (min-width: 768px) {
            width: 750px;
          
        }
        @media (min-width: 992px) {
            width: 970px;
        }
        @media (min-width: 1200px) {
            width: 1190px;
        }
`

export const TitleSection = styled.h1`
    margin-top: 5rem;
    padding-bottom: 2rem;
    font-weight: 400;
    font-size: 2.5rem;
    color:#013330;

`

export const ContainerGrid= styled.div`
    margin: 0 auto;
    width: 100%;
    @media (min-width: 768px) {
        width: 750px;
          
    }
    @media (min-width: 992px) {
        width: 970px;
    }
    @media (min-width: 1200px) {
        width: 1190px;
    }
    @media screen and (max-width: 768px) {
      
    }
`

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const Column = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 1;
    
    margin: 10px;
    padding: 10px;

    @media screen and (max-width: 768px) {
       min-width: 100%;
       width: 100%;
       margin: 10px 0;
    }
`
export const Space = styled.br``

//   .col-1 {
//     max-width: calc(100% / 12);
//   }
//   .col-2 {
//     max-width: calc(100% / 12 * 2);
//   }
//   .col-3 {
//     max-width: calc(100% / 12 * 3);
//   }
//   .col-4 {
//     max-width: calc(100% / 12 * 4);
//   }
//   .col-5 {
//     max-width: calc(100% / 12 * 5);
//   }
//   .col-6 {
//     max-width: calc(100% / 2);
//   }