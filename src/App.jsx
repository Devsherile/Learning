import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Mission from './components/Mission'
import Product from './components/Product'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

     <Header/>
     <Hero/>
     <About/>
     <Mission/>
     <Product/>

    </div>
  )
}

export default App
