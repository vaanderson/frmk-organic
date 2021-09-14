import styled from 'styled-components';

export const Header = styled.header`
    background-color: #013330;
    padding: 2rem 0 ;
    width: 100%;

`

export const Brand = styled.div`
    flex: 0.2;
    &::after{
        content: "";
        background-color: #8BB326;
        width: .1rem;
        height: 100%;
        max-height: 2.5rem;
        position: absolute;
        margin-left: 2rem;
        margin-top: 0.8rem;
        @media screen and (max-width: 768px) {
           background-color: transparent;
        }
    
    }
    @media screen and (max-width: 768px) {
        text-align: center;
        margin-bottom: 1rem;;
    }
`
export const Logo = styled.img`

`

