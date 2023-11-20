import Restaurante from '../Restaurante'
import * as S from './style'

// Tentar fazer o botão saiba mais funcionar
// Tentar dividir o código em componentes menores, para facilitar a manutenção, da para dividir em 1 componente apenas do restaurante e outro da lista de restaurantes

const RestauranteInfo = () => {
  return (
    <S.ContainerRestaurante className="container">
      <Restaurante />
    </S.ContainerRestaurante>
  )
}

export default RestauranteInfo
