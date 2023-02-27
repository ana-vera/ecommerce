import Header from './components/Header'
import Paths from './routes'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './context/ProductContext'

function App () {
  return (
    <div className='App'>
      <ProductProvider>
        <BrowserRouter>
          <Header />
          <Paths />
        </BrowserRouter>
      </ProductProvider>
    </div>
  )
}

export default App
