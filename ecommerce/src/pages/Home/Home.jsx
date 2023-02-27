
import './Home.scss'
import ProductsGeneral from '@/components/ProductsGeneral'
import { ProductProvider } from '@/context/ProductContext'

const Home = () => {
  return (
    <ProductProvider>
      <ProductsGeneral />
    </ProductProvider>
  )
}
export default Home
