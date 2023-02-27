import { useProductContext } from '@/context/ProductContext'

const ProductSelected = () => {
  const context = useProductContext()

  console.log(context.selectedProduct)

  return (
    <div> DETALLES DEL PRODUCTO SELECCIONADO </div>
  )
}
export default ProductSelected
