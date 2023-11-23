import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import carrinhoReducer from './reducers/carrinho'
const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
