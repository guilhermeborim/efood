import Header from '../../components/Header/index'
import RestauranteInfo from '../../components/ListaRestaurantes/index'
import { ContainerRestauranteInfo } from './style'
const HomePage = () => {
  return (
    <>
      <Header />
      <ContainerRestauranteInfo>
        <RestauranteInfo />
      </ContainerRestauranteInfo>
    </>
  )
}

export default HomePage
