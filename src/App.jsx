import { useState } from 'react'
import Header from './components/header/Header'
import Home from './pages/Home';
import ProductTemplate from './components/productTemplate/ProductTemplate';
import Footer from './components/footer/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <ProductTemplate/>
    <Footer/>
    </>
  )
}

export default App
