import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import Lixeira from '../../assets/lixeira-de-reciclagem 1.png'
import { remover } from '../../redux/reducers/carrinho'
import { RootReducer } from '../../redux/store'
import cores from '../../styles'
import { CartSpanHeader } from '../HeaderPerfil/style'
import * as S from './style'

const Cart = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.products)
  const total = useSelector((state: RootReducer) => state.carrinho.total)
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  return (
    <>
      <CartSpanHeader onClick={onOpen} style={{ cursor: 'pointer' }}>
        {itens.length} produto(s) no carrinho
      </CartSpanHeader>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody
            style={{
              backgroundColor: `${cores.vermelho}`,
              paddingTop: '32px',
              paddingRight: '8px',
              paddingLeft: '8px',
            }}
          >
            <section>
              {itens.map((item) => (
                <S.ProductsCart key={item.id}>
                  <S.ImgProductCart src={item.foto} alt="" />
                  <S.ContentProductInfo>
                    <p>{item.nome}</p>
                    <span>{formatPrice(item.preco)}</span>
                  </S.ContentProductInfo>
                  <S.LixeiraImg
                    src={Lixeira}
                    alt=""
                    onClick={() => dispatch(remover(item))}
                  />
                </S.ProductsCart>
              ))}
              <section>
                <S.TotalPrice>
                  <p>Valor total</p>
                  <span>{formatPrice(total)}</span>
                </S.TotalPrice>
                <S.ButtonCart>Continuar com a entrega</S.ButtonCart>
              </section>
            </section>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Cart
