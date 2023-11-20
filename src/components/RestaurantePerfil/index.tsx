import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as S from './style'
interface RestaurantePerfilProps {
  id: number
  titulo: string
  tipo: string
  capa: string
  cardapio: {
    id: string
    nome: string
    descricao: string
    foto: string
  }[]
}
const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<RestaurantePerfilProps>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((data) => setRestaurante(data))
  }, [id])

  return (
    <>
      {restaurante && (
        <>
          <S.ContainerPerfilHeader
            style={{
              background: `url(${restaurante.capa})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <S.PerfilTitle className="container">
              <p>{restaurante.tipo}</p>
              <h1>{restaurante.titulo}</h1>
            </S.PerfilTitle>
          </S.ContainerPerfilHeader>
          <S.ContainerPerfilRestaurante className="container">
            <main>
              {restaurante.cardapio.map((item) => (
                <article key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h4>{item.nome}</h4>
                    {item.descricao.length > 179 ? (
                      <p>{item.descricao.slice(0, 176) + '...'}</p>
                    ) : (
                      <p>{item.descricao}</p>
                    )}
                  </div>
                  <button>Adicionar ao carrinho</button>
                </article>
              ))}
            </main>
          </S.ContainerPerfilRestaurante>
        </>
      )}
    </>
  )
}

export default Perfil
