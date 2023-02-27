import { useContext, createContext, useState, useEffect } from 'react'
import { getAllProducts } from '../services/productServices'

const ProductContext = createContext()

const ProductProvider = (props) => {
  const [productList, setProductList] = useState([]) // data de la api
  const [loading, setLoading] = useState(true) // indica cuando los datos estan disponibles
  const [selectedProduct, setSelectedProduct] = useState({})

  useEffect(() => {
    const fetchProductListData = async () => {
      try {
        const result = await getAllProducts()
        console.log(result)
        if (result.status === 200) {
          setLoading(false)
          setProductList(result.data)
          console.log(result.data)
        }
      } catch (error) {
        console.log('Error ocurred while retrieving items: ', error.message)
      }
    }
    fetchProductListData()
  }, [])

  const valores = {
    productList,
    loading,
    selectedProduct,
    setSelectedProduct
  }

  return (
    <ProductContext.Provider value={valores} {...props} />
  )
}

const useProductContext = () => {
  const context = useContext(ProductContext)
  return context
}

export {
  useProductContext,
  ProductProvider
}
