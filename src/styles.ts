import { createGlobalStyle} from "styled-components";

export const colors = {
  primary: '#E66767',
  secondary: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

`