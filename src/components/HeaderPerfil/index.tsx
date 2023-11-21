import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ImgLogo from '../../assets/logo.png'
import { RootReducer } from '../../redux/store'
import * as S from './style'
const HeaderPerfil = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.products)
  return (
    <S.HeaderPerfil>
      <S.HeaderContent className="container">
        <div>
          <h3>Restaurantes</h3>
          <Link to="/">
            <img src={ImgLogo} alt="" />
          </Link>
          <p>{itens.length} produto(s) no carrinho</p>
        </div>
      </S.HeaderContent>
    </S.HeaderPerfil>
  )
}

export default HeaderPerfil
