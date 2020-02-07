import { createGlobalStyle  } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 
    html {
        height: 100%;
        
    }
    body{
        height: inherit;
        width:100%;
        margin: 0;
    }
    #__next {
        background-size: cover;
        padding: 0;
        font-family: sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: inherit;
        @media (min-width: 414px) {
            background-image: url('/background.jpg');
        }
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