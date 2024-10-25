import { useState } from 'react'
// import Header from "../src/components/Header/Header.jsx"
// import Home from "../src/components/Home/Home.jsx"
import Footer from "../src/components/Footer/Footer.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header/> */}
      {/* <Home /> */}
      <Footer/>
    </>
  )
}

export default App
