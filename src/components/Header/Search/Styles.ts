import styled from "styled-components";

export const SearchBox = styled.form`
    flex: 0.8;
    margin-left: 3rem;
    @media screen and (max-width: 768px) {
        margin-left: 0;
        margin-bottom: 2rem;
    }

`

export const SearchInput = styled.input`
    width: 100%;
    padding: 1rem 2rem;
    border-radius: 10rem;
    background-color: #F0E5D9;
`

export const SearchButton = styled.button`
    position: absolute;
    margin-left: -3rem;
    margin-top: .5rem;
    padding: .5rem 0.6rem;
    border-radius: 10rem;
    background-color: #8BB326;
    cursor: pointer;
    transition: .3s;

    &:hover{
        background-color: #698917; 
    }
`

export const SearchIcon = styled.img`

`