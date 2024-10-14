import { useState } from "react";
import './index.css'

function App() {
  let [counter, setCounter] = useState(0);

  const UpadateValue = () => {
    if (counter > 9) return alert("Reached to the Limit !!!");
    counter = counter + 1;
    setCounter(counter);
  };

  const RemoveValue = () => {
    if (counter < 1) return alert("Reached to the Limit !!!");
    counter = counter - 1;
    setCounter(counter);
  };
  return (
    <>
      <h1>Jai Shree Ram </h1>
      <h3>Practice UseState...</h3>
      <button onClick={UpadateValue}>Add Value</button>
      <button onClick={RemoveValue}>Remove Value</button>
      <h3> Value : {counter}</h3>
    </>
  );
}

export default App;
// import { useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
