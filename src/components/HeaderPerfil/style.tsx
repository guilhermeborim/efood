import styled from 'styled-components'
import HeaderBg from '../../assets/fundo.png'
import cores from '../../styles'

export const HeaderPerfil = styled.header`
  background: url(${HeaderBg}) no-repeat center;
  background-size: 100%;
  padding: 70px 0;
`

export const HeaderContent = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      color: ${cores.vermelho};
      font-size: 18px;
      font-weight: 900;
      flex: 1;
    }
    p {
      color: ${cores.vermelho};
      font-size: 18px;
      font-weight: 900;
      flex: 1;
      text-align: right;
    }
    img {
      width: 125px;
    }
  }
`
