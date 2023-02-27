import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const getSingleProduct = (id) => axios.get(`${BASE_URL}/items/${id}`)
const getAllProducts = () => axios.get(`${BASE_URL}/items`)

export {
  getSingleProduct,
  getAllProducts
}
