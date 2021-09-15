import styled from "styled-components";
export const Title = styled.h1`
    padding-top: 2rem;
    font-weight: 500;
    color: #013330;
`
export const TitleForm = styled.h2`
    margin-top: 2rem;
    margin-bottom: 1rem;
`
export const CheckoutForm = styled.form`
    width: 1000%;
  
`

export const FormRow = styled.div`
    
    display: flex;
    width: 100%;

`
export const InputGroup = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    padding-bottom: 1rem;

    padding-right: 1rem;

`
export const Label = styled.label`
    
   font-weight: 500;
    font-size:1rem;
    padding-bottom: .4rem;


`
export const Input = styled.input`
    
    padding: 1rem;
    border-radius: .5rem;
    width: 100%;

`
export const ButtonCheckout = styled.button`
    width: 97.5%;
    background-color: #8BB326;
    padding: 1rem;
    border-radius: .3rem;
    cursor: pointer;
    color: #fff;

`

export const ButtonAction = styled.button`
    background-color: #8bb326;
    max-width: 40rem;
    width: 100%;
    padding:1rem;

    color: #fff;
    font-weight: 400;

    border-radius: .5rem;
    cursor: pointer;
`

export const ButtonBox = styled.div`
    width: 100%;
`

export const ButtonContent = styled.div`
    width: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    align-items: center;
    a{
        width: 100%;
        max-width: 40rem;
    }

`