import styled from 'styled-components'
import ImgHome from '../../assets/fundo.png'
import cores from '../../styles'
export const HeaderContainer = styled.div`
  background-image: url(${ImgHome});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 384px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const Logo = styled.img`
  width: 125px;
  height: auto;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${cores.vermelho};
  line-height: 42.19px;
  text-align: center;
`
