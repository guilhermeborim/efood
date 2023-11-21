import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardapioItem } from '../../components/RestaurantePerfil'

export type Product = {
  products: CardapioItem[]
}
const initialState: Product = {
  products: [],
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
      }
    },
  },
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
