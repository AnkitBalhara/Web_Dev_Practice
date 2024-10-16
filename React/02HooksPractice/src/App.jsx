import { useState } from "react";
import './index.css'

function App() {
  let [counter, setCounter] = useState(0);

  const UpadateValue = () => {
    if (counter > 9) return alert("Reached to the Limit !!!");
    // counter = counter + 1;
    // setCounter(counter);

    // Interview Questions....

    // As according to the below code it will take only the value which is at the last...(counter+0.6) but,
    // Some other aspects of this Question is below...
    // setCounter(counter+1)
    // setCounter(counter+2)
    // setCounter(counter+0.6)

    // Other Aspects of this code is...
    // If we put setCounter(previousValue=>previousValue+1) then it update the state and then after move to 
    // next line and if in next line the code is same then this will update it first and then move further...
    setCounter(previousValue=>previousValue+1) // As (previousValue = Counter) and when it update counter value
    // then only it will move further to the next step.
    setCounter(previousValue=>previousValue+1)
    // This will 
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
