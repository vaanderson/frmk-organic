import styled from "styled-components";

export const OrderBox = styled.div`
    background-color: #013330;
    max-width: 40rem;
    overflow: hidden;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 2.5rem;
    margin-top: 2.5rem;
    border-radius: .5rem;
    width: 100%;
`

export const Card = styled.div`
    background-color: #fff;
    width: 100%;
    float: left;
    margin-top: 2.5rem;
    border-radius: .5rem;
    box-sizing: border-box;
    padding: 5rem 1.8rem 1.5rem 1.8rem;
    text-align: center;
    position: relative;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`
export const IconBox = styled.div`
     position: absolute;
    top:-3rem;
    left: 15rem;
    width: 6.25rem;
    height: 6.25rem;
    border-radius: 100%;
    background-color: #8bb326;
    border: .5rem solid #fff;
`

export const Icon = styled.img`
    width: 75%;
    margin-top: .5rem;
`

export const CardTitle = styled.h1`
    text-transform: uppercase;
  color: #55585b;
  font-size:1rem;
  font-weight: 500;
  margin-bottom: .5rem;
`

export const CardSub = styled.h2`
    color: #959a9e;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 0px;
`

export const CardBody = styled.div`
     background-color: #f8f6f6;
  border-radius: .5rem;
  width: 100%;
  margin-top: 2rem;
  float: left;
  box-sizing: border-box;
  padding: 2rem;
`

export const ProductTable = styled.div`
   display: inline-block;
`

export const ProductBox = styled.div`
   text-align: left;
`

export const ProductImg = styled.img`
     width: 3.2rem;
  height: 3.2rem;
  border-radius: 100%;
  display: inline-block;
  margin-right: .8rem;
  position: relative;
  top:.7rem;
`

export const ProductInfo = styled.p`
     color: #232528;
    text-align: left;
    margin-bottom: .5rem;
    font-weight: 600;
`

export const ProductTotal = styled.h1`
     color: #232528;
  font-size: 4.3rem;
  margin-top: 1.5rem;
  margin-bottom: 1.8rem;
`

export const ProductFormat = styled.span`
    font-size: 60%;
`

export const TotalOrder = styled.h1``

export const Details = styled.p`
  color: #d3cece;
  text-transform: uppercase;
  text-align: left;
  font-size: .8rem;
  margin-bottom: .5rem;
  font-weight: bold;
`
export const BoxDetails = styled.div`
   background-color: #8bb326;
   color: #fff;
  border-radius: .4rem;
  width: 100%;
  height: 6.25rem;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  align-content: flex-start;
  padding: 2rem;
`

export const DetailsInfo = styled.p`
  font-size: 1rem;
`

export const Bold = styled.strong``