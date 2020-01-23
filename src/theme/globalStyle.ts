import { createGlobalStyle  } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 
    html {
        height: 100%;
    }

    #__next {
        padding: 0;
        font-family: sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        @media (max-width: 414px) {
            align-items: flex-start;
            background-color: #222;
        }
    }

    a {
        color: white;
        text-decoration: none;
    }

    input {
        font-size: 24px;

    }

    button {
        font-size: 20px;
        color: white;
    }
`;
export default GlobalStyle;