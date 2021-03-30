import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Rubik', sans-serif;
        background-color: ${props => props.theme.colors.bgColor};
    }

    input, select, textarea {
        padding: 1rem;
        border-radius: 4px;
        outline: 0;
        font-family: inherit;
        font-size: 1rem;
        font-weight: 400;
    }

    button {
        border: 0;
        padding: .7rem 2rem;
        border-radius: 4px;
        font-size: 1rem;
        font-weight: 500;
        display: block;
        font-family: inherit;

    }
`;