// By Destructuring useContext items...
import React, { useContext } from 'react'
import counterContext from '../context/counterContext'

const Home = () => {
  const {count,setCount} = useContext(counterContext)
  return (
    <div>
      Home
      {count}

      <button onClick={()=>{setCount(count+1)}}>Update</button>
    </div>
  )
}

export default Home



// // By without Destructuring useContext items...

// import React, { useContext } from 'react'
// import counterContext from '../context/counterContext'

// const Home = () => {
//   const value = useContext(counterContext)
//   return (
//     <div>
//       Home
//       {value.count}

//       <button onClick={()=>{value.setCount(value.count+1)}}>Update</button>
//     </div>
//   )
// }

// export default Home
