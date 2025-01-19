import React from 'react'
import {io} from "socket.io-client"

const App = () => {
  const socket = io("http://localhost:5000")
  return (
    <div>
      This is App JSX
    </div>
  )
}

export default App
