import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    }

    body, input, textarea, button {
        font: 400 1.5rem "Inter", sans-serif;
        border: none;
    }
    a {
        text-decoration: none;
        color: ${props => props.theme.colors.text}
    }
    button {
        cursor: pointer;
    }

    h2 {
        font-size: 2.3rem;
    }

    @media(max-width: 450px){
        html {
        font-size: 87.5%;
    }

    }
`;