import { createGlobalStyle } from "styled-components";
import img from "./images/tło.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    ::after ::before {
        box-sizing: inherit;
    }

    #root {
        min-height: 100vh;
        font-family: "Lato", sans-serif;
        background-color: #eee;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url(${img});
        background-position: center;
        background-size: cover;
    }
`;