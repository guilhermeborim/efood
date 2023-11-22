import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardapioItem } from '../../components/RestaurantePerfil'

export type Product = {
  products: CardapioItem[]
  total: number
}
const initialState: Product = {
  products: [],
  total: 0,
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<CardapioItem>) => {
      const comida = action.payload

      if (state.products.find((food) => food.id === comida.id)) {
        alert('Este item já está no carrinho')
      } else {
        state.products.push(comida)
        state.total += comida.preco
      }
    },
    remover: (state, action: PayloadAction<CardapioItem>) => {
      const comida = action.payload
      state.products = state.products.filter((food) => food.id !== comida.id)
      state.total -= comida.preco
    },
  },
})

export const { adicionar, remover } = carrinhoSlice.actions
export default carrinhoSlice.reducer
