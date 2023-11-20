import styled from 'styled-components'
import cores from '../../styles'

export const ContainerPerfilHeader = styled.section`
  height: 280px;
`
export const PerfilTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  p {
    color: #fff;
    font-size: 32px;
    font-weight: 100;
  }
  h1 {
    font-size: 32px;
    font-weight: 900;
    color: #fff;
  }
`
export const ContainerPerfilRestaurante = styled.section`
  main {
    display: grid;
    grid-template-columns: repeat(3, max-content);
    justify-content: space-between;
    row-gap: 32px;
    padding-top: 60px;
    padding-bottom: 120px;
    article {
      width: 320px;
      background-color: ${cores.vermelho};
      padding: 8px;

      img {
        height: 168px;
        width: 100%;
      }
    }
  }

  button {
    background-color: ${cores.vermelhoClaro};
    width: 100%;
    color: ${cores.vermelho};
    font-size: 14px;
    font-weight: 700;
    padding: 4px 0;
  }

  div {
    h4 {
      font-size: 16px;
      font-weight: 900;
      color: ${cores.vermelhoClaro};
      padding: 8px 0;
    }
    p {
      font-size: 14px;
      font-weight: 400;
      color: ${cores.vermelhoClaro};
      padding-bottom: 8px;
    }
  }
`
