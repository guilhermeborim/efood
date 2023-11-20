import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ContainerRestaurante = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 472px);
  justify-content: center;
  grid-column-gap: 80px;
  grid-row-gap: 48px;
  padding-top: 80px;
  padding-bottom: 120px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 400px);
    justify-content: center;
  }
`
export const ContainerImg = styled.article`
  position: relative;
  img {
    width: 100%;
    height: 272px;
  }
`

export const ContainerDestacado = styled.article`
  position: absolute;
  display: flex;
  top: 22px;
  right: 20px;
  gap: 8px;

  p {
    color: #ffebd9;
    background-color: #e66767;
    font-size: 12px;
    font-weight: 700;
    line-height: 14.06px;
    padding: 8px 4px;
  }
`

export const ContainerName = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;

  div {
    display: flex;
    gap: 8px;
  }
  h3,
  p {
    font-size: 18px;
    font-weight: 700;
    line-height: 21.09px;
    color: #e66767;
  }
`

export const ContainerDescription = styled.article`
  p {
    font-size: 14px;
    line-height: 22px;
    color: #e66767;
    font-weight: 400;
    padding-bottom: 16px;
  }
`

export const ContainerInfo = styled.section`
  border: 1px solid #e66767;
  border-top: none;
  padding: 8px;
`
export const ButtonSaibaMais = styled(Link)`
  color: #ffebd9;
  background-color: #e66767;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  padding: 4px 6px;
`
