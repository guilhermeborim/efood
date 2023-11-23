import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type CheckoutProps = {
  products: {
    id: number
    price: number
  }
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood',
  }),
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    purchase: builder.mutation<any, CheckoutProps>({
      query: (body) => ({
        url: '/checkout',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { usePurchaseMutation } = api

export default api
