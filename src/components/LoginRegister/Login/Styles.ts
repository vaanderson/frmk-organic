import styled from "styled-components";

export const LoginBox = styled.form`
    flex: 5;
    padding: 0 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
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