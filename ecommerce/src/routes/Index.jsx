import { Route, Routes } from 'react-router-dom'
import { Home, ProductSelected } from '@/pages'

const Paths = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<ProductSelected />} />
    </Routes>
  )
}
export default Paths
