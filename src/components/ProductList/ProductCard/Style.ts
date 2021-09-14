import styled from "styled-components";



export const ProductBox = styled.div`
    border: 1px solid #013330;
    background-color:#fff;
    border-radius: .5rem;
    text-align: center;
`
export const ProductImage = styled.img`
    border-radius: .5rem;
    max-width: 11.438rem;
    padding: 1rem;
    width: 100%;
    margin: 0 auto;
`
export const ProductInfo = styled.div``

export const ProductName = styled.h4`
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: .5rem;
    color: #013330;
`

export const ProductPrice = styled.span`
    color: #8BB326;
    font-size: 1rem;
    font-weight: 400;

`

export const ProductCartBtn = styled.button`
    width: 100%;
    background-color: #013330;
    padding: 1rem;
    border-radius: 0 0 .5rem .5rem;
    color: #fff;
    margin-top: 1rem;
    cursor: pointer;
    transition: .3s;

    &:hover{
        background-color: #8BB326;
    }
`