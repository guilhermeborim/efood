import styled from 'styled-components'
import cores from '../../styles'

export const ProductsCart = styled.article`
  display: flex;
  background-color: ${cores.vermelhoClaro};
  padding: 8px;
  margin-bottom: 16px;
`
export const ImgProductCart = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 8px;
`
export const LixeiraImg = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  margin-top: auto;
  margin-left: auto;
`
export const ContentProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: ${cores.vermelho};
    font-size: 16px;
    font-weight: bold;
  }

  span {
    color: ${cores.vermelho};
    font-size: 14px;
    padding-top: 16px;
  }
`

export const TotalPrice = styled.article`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  margin-bottom: 16px;
  p {
    color: ${cores.vermelhoClaro};
    font-size: 16px;
    font-weight: bold;
  }

  span {
    color: ${cores.vermelhoClaro};
    font-size: 16px;
  }
`
export const ButtonCart = styled.button`
  width: 100%;
  height: 24px;
  background-color: ${cores.vermelhoClaro};
  color: ${cores.vermelho};
  font-size: 14px;
  font-weight: bold;
`
