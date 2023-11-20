import ImgLogo from '../../assets/logo.png'
import * as S from './styles'
const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Logo src={ImgLogo} alt="Logo" />
      <S.Title>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </S.Title>
    </S.HeaderContainer>
  )
}

export default Header
