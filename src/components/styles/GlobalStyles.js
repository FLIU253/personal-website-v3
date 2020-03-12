import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Heebo&display=swap");

    *,
    *:before,
    *:after {
    box-sizing: inherit;
    }

    html {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-size: 15px;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    box-sizing: border-box;
    }

    body {
    font-family: "Heebo", sans-serif;
    font-size: 1em;
    line-height: 1.25;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    img {
    max-width: 100%;
    }

    p {
    color: ${({ theme }) => theme.pTag};
    font-size: 18px;
    line-height: 1.5;
    margin: 0 0 30px;
    }

`;
