import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@100;200;300;400;500;600;800;900&display=swap);

body {
  font-family: 'Nunito', sans-serif;
}

* { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #3b3b3b;
    padding: 10vh 50px;
    display: flex;
    justify-content: center;
}


`;

export default GlobalStyle