import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useContext, useState } from 'react'
// import './App.css'
import counterContext from './context/counterContext'

function App() {
const [count,setCount]= useState(0)
  return (
    <>
    <counterContext.Provider value={{count,setCount}}>
    <button onClick={()=>{setCount(count+1)}}>{count}</button>
    <Navbar/>
    <Outlet/>
    </counterContext.Provider>
    </>
  )
}

export default App
