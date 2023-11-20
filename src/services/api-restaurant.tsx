import { useEffect, useState } from 'react'
const url = 'https://fake-api-tau.vercel.app/api/efood/restaurantes'

export interface RestaurantesProps {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const ApiRestaurante = () => {
  const [data, setData] = useState<RestaurantesProps[]>([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url)
      const dados = await response.json()
      setData(dados)
    }
    fetchData()
  }, [])
  return data
}

export default ApiRestaurante
