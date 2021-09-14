import styled from "styled-components";

export const BoxResume = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    max-width: 25rem;
    @media screen and (max-width: 768px) {
        justify-content: center;
        max-width: 100%;
    }
`