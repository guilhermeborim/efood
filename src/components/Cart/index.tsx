import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Lixeira from '../../assets/lixeira-de-reciclagem 1.png'
import { remover } from '../../redux/reducers/carrinho'
import { RootReducer } from '../../redux/store'
import { usePurchaseMutation } from '../../services/api'
import cores from '../../styles'
import { CartSpanHeader } from '../HeaderPerfil/style'
import * as S from './style'

const Cart = () => {
  const [nameCard, setNameCard] = useState('')
  const [numberCard, setNumberCard] = useState('')
  const [cvv, setCvv] = useState(0)
  const [month, setMonth] = useState(0)
  const [year, setYear] = useState(0)
  const [person, setPerson] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [cep, setCep] = useState('')
  const [number, setNumber] = useState(0)
  const [complement, setComplement] = useState('')
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const itens = useSelector((state: RootReducer) => state.carrinho.products)
  const total = useSelector(
    (state: RootReducer) => state.carrinho.total,
  ).toFixed(2)
  const [showDelivery, setShowDelivery] = useState(false)
  const [showPayment, setShowPayment] = useState(false)

  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }
  const handleShowPayment = () => {
    setShowPayment(true)
    setShowDelivery(false)
  }
  const handleShowDelivery = () => {
    setShowDelivery(true)
  }
  const handleShowCart = () => {
    setShowDelivery(false)
    setShowPayment(false)
  }
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    purchase({
      products: {
        id: 1,
        price: Number(total),
      },
      payment: {
        card: {
          name: nameCard,
          number: numberCard,
          code: Number(cvv),
          expires: {
            month: Number(month),
            year: Number(year),
          },
        },
      },
      delivery: {
        receiver: person,
        address: {
          city,
          description: address,
          number: Number(number),
          complement,
          zipCode: cep,
        },
      },
    })
    setShowPayment(false)
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
            {showDelivery ? (
              <section>
                <S.TitleDelivery>Entrega</S.TitleDelivery>
                <article>
                  <form>
                    <div>
                      <S.LabelForm htmlFor="comprador">
                        Quem ira receber
                      </S.LabelForm>
                      <S.InputForm
                        name="comprador"
                        type="text"
                        onChange={(e) => setPerson(e.target.value)}
                      />
                    </div>
                    <div>
                      <S.LabelForm htmlFor="endereco">Endereco</S.LabelForm>
                      <S.InputForm
                        name="endereco"
                        type="text"
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div>
                      <S.LabelForm htmlFor="cidade">Cidade</S.LabelForm>
                      <S.InputForm
                        name="cidade"
                        type="text"
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                    <S.ContainerCepAndNumber>
                      <div>
                        <S.LabelForm htmlFor="cep">CEP</S.LabelForm>
                        <S.InputForm
                          name="cep"
                          type="text"
                          onChange={(e) => setCep(e.target.value)}
                        />
                      </div>
                      <div>
                        <S.LabelForm htmlFor="numero">Numero</S.LabelForm>
                        <S.InputForm
                          name="numero"
                          type="number"
                          onChange={(e) => setNumber(Number(e.target.value))}
                        />
                      </div>
                    </S.ContainerCepAndNumber>
                    <div>
                      <S.LabelForm htmlFor="complemento">
                        Complemento (opcional)
                      </S.LabelForm>
                      <S.InputForm
                        name="complemento"
                        type="text"
                        onChange={(e) => setComplement(e.target.value)}
                      />
                    </div>
                  </form>
                </article>
                <S.ArticleButtonDelivery>
                  {person && address && city && cep && number ? (
                    <button onClick={handleShowPayment}>
                      Continuar com o pagamento
                    </button>
                  ) : (
                    <button disabled>Continuar com o pagamento</button>
                  )}
                  <button onClick={handleShowCart}>
                    Voltar para o carrinho
                  </button>
                </S.ArticleButtonDelivery>
              </section>
            ) : showPayment ? (
              <form onSubmit={handleSubmit}>
                <S.TitleDelivery>
                  Pagamento - Valor a pagar {formatPrice(Number(total))}
                </S.TitleDelivery>
                <div>
                  <S.LabelForm htmlFor="nome_cartao">
                    Nome do cartao
                  </S.LabelForm>
                  <S.InputForm
                    name="nome_cartao"
                    type="text"
                    onChange={(e) => setNameCard(e.target.value)}
                  />
                </div>
                <S.ContainerNumberAndCvv>
                  <S.ContainerNumberPayment>
                    <S.LabelForm htmlFor="numero_cartao">
                      Numero do cartao
                    </S.LabelForm>
                    <S.InputForm
                      name="numero_cartao"
                      type="text"
                      onChange={(e) => setNumberCard(e.target.value)}
                    />
                  </S.ContainerNumberPayment>
                  <S.CotnainerCvvPayment>
                    <S.LabelForm htmlFor="cvv">cvv</S.LabelForm>
                    <S.InputForm
                      name="cvv"
                      type="number"
                      onChange={(e) => setCvv(Number(e.target.value))}
                    />
                  </S.CotnainerCvvPayment>
                </S.ContainerNumberAndCvv>
                <S.ContainerMonthAndYear>
                  <div>
                    <S.LabelForm htmlFor="month">mes do vencimento</S.LabelForm>
                    <S.InputForm
                      name="month"
                      type="number"
                      onChange={(e) => setMonth(Number(e.target.value))}
                    />
                  </div>
                  <div>
                    <S.LabelForm htmlFor="year">ano do vencimento</S.LabelForm>
                    <S.InputForm
                      name="year"
                      type="number"
                      onChange={(e) => setYear(Number(e.target.value))}
                    />
                  </div>
                </S.ContainerMonthAndYear>
                <S.ArticleButtonDelivery>
                  {nameCard && numberCard && cvv && month && year ? (
                    <button type="submit">Finalizar compra</button>
                  ) : (
                    <button disabled>Finalizar compra</button>
                  )}
                  <button onClick={handleShowDelivery}>
                    Voltar para a edição de endereço
                  </button>
                </S.ArticleButtonDelivery>
              </form>
            ) : isSuccess ? (
              <section>
                <S.TitleDelivery>
                  Pedido realizado - {data.orderId}
                </S.TitleDelivery>
                <article>
                  <S.ContainerP>
                    Estamos felizes em informar que seu pedido já está em
                    processo de preparação e, em breve, será entregue no
                    endereço fornecido.
                  </S.ContainerP>
                  <S.ContainerP>
                    Gostaríamos de ressaltar que nossos entregadores não estão
                    autorizados a realizar cobranças extras.
                  </S.ContainerP>
                  <S.ContainerP>
                    Lembre-se da importância de higienizar as mãos após o
                    recebimento do pedido, garantindo assim sua segurança e
                    bem-estar durante a refeição.
                  </S.ContainerP>
                  <S.ContainerP>
                    Esperamos que desfrute de uma deliciosa e agradável
                    experiência gastronômica. Bom apetite!
                  </S.ContainerP>
                </article>
                <S.ArticleButtonDelivery>
                  <S.LinkFinish to="/">Concluir</S.LinkFinish>
                </S.ArticleButtonDelivery>
              </section>
            ) : (
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
                    <span>{formatPrice(Number(total))}</span>
                  </S.TotalPrice>
                  {itens.length > 0 ? (
                    <S.ButtonCart onClick={handleShowDelivery}>
                      Continuar com a entrega
                    </S.ButtonCart>
                  ) : (
                    <S.ButtonCart>Carrinho vazio</S.ButtonCart>
                  )}
                </section>
              </section>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Cart
