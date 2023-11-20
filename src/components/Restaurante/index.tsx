import Estrela from '../../assets/estrela.png'
import ApiRestaurante from '../../services/api-restaurant'
import * as S from '../ListaRestaurantes/style'
const Restaurante = () => {
  return (
    <>
      {ApiRestaurante().map((restaurante) => (
        <section key={restaurante.id}>
          <S.ContainerImg>
            <img src={restaurante.capa} alt={restaurante.titulo} />
            <S.ContainerDestacado>
              {restaurante.destacado && <p>Destaque da semana</p>}
              <p>{restaurante.tipo}</p>
            </S.ContainerDestacado>
          </S.ContainerImg>
          <S.ContainerInfo>
            <S.ContainerName>
              <h3>{restaurante.titulo}</h3>
              <div>
                <p>{restaurante.avaliacao}</p>
                <img src={Estrela} alt="" />
              </div>
            </S.ContainerName>
            <S.ContainerDescription>
              {restaurante.descricao.length > 248 ? (
                <p>{restaurante.descricao.slice(0, 245) + '...'}</p>
              ) : (
                <p>{restaurante.descricao}</p>
              )}
              <S.ButtonSaibaMais to={`/restaurante/${restaurante.id}`}>
                Saiba mais
              </S.ButtonSaibaMais>
            </S.ContainerDescription>
          </S.ContainerInfo>
        </section>
      ))}
    </>
  )
}

export default Restaurante
