import { useState } from 'react'
import Header from './comnents/Header'
import Hero from './comnents/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <Hero/>
    </>
  )
}

export default App
