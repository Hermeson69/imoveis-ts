import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
        --primary: #ffff;
        --secundary: #15181c;
        --gray: #7a7a7a;
        --blue: #1da1f2;
        --white: #fff;
        --black: #0000;
        --blue_violet : #8a2be2;
    }
    body {
        background-color: var(--primary);
        font-family:"Poppins", sans-serif;
        color: var(--secundary);
        font-size: 1.2rem;
        font-weight: 400;
    }
        ul { list-style: none; }
        a { text-decoration: none; }
        
`