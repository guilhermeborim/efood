import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import cores from '../../styles'
import * as S from './style'
interface CardapioItem {
  id: string
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}
interface RestaurantePerfilProps {
  id: number
  titulo: string
  tipo: string
  capa: string
  cardapio: CardapioItem[]
}

const Perfil = () => {
  const { onOpen, isOpen, onClose } = useDisclosure()
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<RestaurantePerfilProps>()
  const [selectedItem, setSelectedItem] = useState<CardapioItem | null>(null)
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((data) => setRestaurante(data))
  }, [id])

  const handleMenuItemClick = (item: CardapioItem) => {
    setSelectedItem(item)
    onOpen()
  }

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
                  <button onClick={() => handleMenuItemClick(item)}>
                    Mais detalhes
                  </button>
                </article>
              ))}
              {selectedItem && (
                <Modal isOpen={isOpen} onClose={onClose} isCentered>
                  <ModalOverlay />
                  <ModalContent
                    backgroundColor={cores.vermelho}
                    maxWidth="1024px"
                    right="8px"
                  >
                    <ModalHeader>
                      <ModalCloseButton />
                    </ModalHeader>
                    <S.ModalBodyFood>
                      <img src={selectedItem.foto} alt="" />
                      <div>
                        <h3>{selectedItem.nome}</h3>
                        <p>{selectedItem.descricao}</p>
                        <span>{selectedItem.porcao}</span>
                        <button>
                          Adicionar ao carrinho - R${selectedItem.preco}
                        </button>
                      </div>
                    </S.ModalBodyFood>
                  </ModalContent>
                </Modal>
              )}
            </main>
          </S.ContainerPerfilRestaurante>
        </>
      )}
    </>
  )
}

export default Perfil
