import styled from "styled-components";

export const LoginBox = styled.form`
    flex: 5;
    padding: 0 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    max-width: 50rem;
    margin: 0 auto;
    
`


export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    
`

export const Input = styled.input`
    padding: 1rem;
    border-radius:.3rem;
`

export const ButtonSubmit = styled.button`
    background-color: #8BB326;
    padding: 1rem;
    color: #fff;
    border-radius:.3rem;
    cursor: pointer;
    text-transform: uppercase;
    transition: .3s;
    &:hover{
        background-color: #526d10;
    }
`

export const Content = styled.div`
    width: 100%;
    text-align: center;
` 
export const LoggedBox = styled.div` 
    text-align: center;
`
export const ButtonLogout = styled.button `
    margin: 0 auto;
    padding: 1rem;
    background-color: #8bb326;
    color: #fff;
    border-radius: .3rem;
    cursor: pointer;
`