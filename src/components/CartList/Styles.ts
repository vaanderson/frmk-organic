import styled from "styled-components";

export const CartBox = styled.div`

  justify-content: center;
  align-items: center;

`

export const ListContainer = styled.div`
display: flex;
  flex-flow: column nowrap;
  background-color: white;
  width: 100%;
  margin: 0 auto;
  border-radius: .3rem;
  border: 1px solid #DADADA;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, .08);
`

export const ListRow = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    border-bottom: .2rem solid #dadada;
`

export const ListItem = styled.div`

    display: flex;
  flex: 1;
  font-size: 1rem;
  padding: 8px 0;
  justify-content: center;
  align-items: center;
  transition: all 0.15s ease-in-out;
`
export const ProductImg = styled.img`
    width: 25%;
    margin-left: 2rem;
    margin-right: 1rem;
`


export const CartInfoProd = styled.div`
    display: flex;
    flex-direction: column;
`
export const CartProductName = styled.span``



export const CartProductPrice = styled.strong``

export const CartActionButton = styled.button`
    padding: .5rem 1rem;
    border-radius:.3rem;
    background-color: transparent;
    border: 1px solid red;
    color: red;
    cursor: pointer;
    transition: .3s;
    &:hover{
        background-color: red;
        color: #fff;
    }
`

export const QuantityBox = styled.div`
    	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	text-align: center;
`

export const QuantityMinus = styled.button`
    padding: 0;
	margin: 0;
	border-style: none;
	touch-action: manipulation;
	display: inline-block;
	border: none;
	background: none;
	cursor: pointer;

    width: 2rem; 
    height: 2rem;
	color: #fff;
	font-size: 1rem;
	background: #8bb326;
`
export const CartQuantity = styled.input`
    width: 3rem; 
    height: 2rem;	
	font-size: 1.3rem;
	text-align: center;
	border: 1px solid #000;
    
`
export const QuantityPlus = styled.button`
    padding: 0;
	margin: 0;
	border-style: none;
	touch-action: manipulation;
	display: inline-block;
	border: none;
	background: none;
	cursor: pointer;

    width: 2rem; 
    height: 2rem;
	color: #fff;
	font-size: 1rem;
	background: #8bb326;
`

export const ButtonCheckout = styled.button`
      margin: 0 auto;
    padding: 1rem;
    background-color: #8bb326;
    color: #fff;
    border-radius: .3rem;
    cursor: pointer;
`

export const CartFooter = styled.div`
    width: 100%;
    padding-top: 2rem;

`

export const CartContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`

export const CarTotal = styled.div`
    font-size: 1.5rem;
    padding-bottom: 1rem;
    color: #013330;

`
export const TotalSpan = styled.span`
    font-weight: bold;
`