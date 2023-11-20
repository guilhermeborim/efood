import { createGlobalStyle } from 'styled-components'

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none;
  }
  img {
    display: block;
    max-width: 100%;
  }
  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

const cores = {
  vermelho: '#E66767',
  vermelhoClaro: '#FFEBD9',
  fundo: '#FFF8F2',
}

export default cores
