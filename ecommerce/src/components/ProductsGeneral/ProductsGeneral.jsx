import './ProductsGeneral.scss'

import { useProductContext } from '../../context/ProductContext'
import { useNavigate } from 'react-router-dom'

const ProductsGeneral = () => {
  const context = useProductContext()

  const navigate = useNavigate()
  return (
    <div className='container'>
      <h1>Browse all available products</h1>
      <div className='grid grow'>
        {context.productList.map((product) => {
          return (
            <div
              className='card'
              key={product.id}
              onClick={() => {
                context.setSelectedProduct(product)
                navigate('/product')
              }}
            >
              <div className='card__image'>
                <img src={product.image} alt='' />
              </div>
              <div className='card__bottom'>
                <h4 className='card__title'>{product.product_name}</h4>
                <p className='card__text'>${product.price}.00</p>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}
export default ProductsGeneral
