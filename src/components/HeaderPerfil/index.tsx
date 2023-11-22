import { Link } from 'react-router-dom'
import ImgLogo from '../../assets/logo.png'
import Cart from '../Cart'
import * as S from './style'
const HeaderPerfil = () => {
  return (
    <S.HeaderPerfil>
      <S.HeaderContent className="container">
        <div>
          <h3>Restaurantes</h3>
          <Link to="/">
            <img src={ImgLogo} alt="" />
          </Link>
          <Cart />
        </div>
      </S.HeaderContent>
    </S.HeaderPerfil>
  )
}

export default HeaderPerfil
