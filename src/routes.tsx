import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/Home'
import PerfilRestaurante from './pages/Perfil'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/restaurante/:id" element={<PerfilRestaurante />} />
    </Routes>
  )
}

export default Rotas
