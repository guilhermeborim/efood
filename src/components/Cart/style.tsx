import { Link } from 'react-router-dom'
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
export const TitleDelivery = styled.h2`
  color: ${cores.vermelhoClaro};
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
`
export const LabelForm = styled.label`
  display: block;
  color: ${cores.vermelhoClaro};
  font-size: 14px;
  font-weight: 700;
  margin: 8px 0;
`

export const InputForm = styled.input`
  background-color: ${cores.vermelhoClaro};
  color: #4b4b4b;
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  height: 32px;
`
export const ContainerCepAndNumber = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    width: 48%;
  }
`

export const ArticleButtonDelivery = styled.article`
  padding-top: 24px;
  button {
    width: 100%;
    height: 32px;
    background-color: ${cores.vermelhoClaro};
    color: ${cores.vermelho};
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
  }
`
export const LinkFinish = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 32px;
  background-color: ${cores.vermelhoClaro};
  color: ${cores.vermelho};
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`
export const ContainerNumberAndCvv = styled.div`
  display: flex;
  gap: 32px;
`
export const ContainerNumberPayment = styled.div`
  width: 228px;
`
export const CotnainerCvvPayment = styled.div`
  width: 87px;
`
export const ContainerMonthAndYear = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  div {
    width: 48%;
  }
`

export const ContainerP = styled.p`
  color: ${cores.vermelhoClaro};
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 8px;
`
