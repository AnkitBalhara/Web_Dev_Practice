import { useState } from "react";
import "./App.css";

// const users = [
//   { Name: "Ram", Age: 24 },
//   { Name: "Lakshman", Age: 23 },
//   { Name: "Hanuman", Age: 22 },
//   { Name: "Bharat", Age: 21 },
//   { Name: "Shatrugan", Age: 20 },
// ];

function App() {
  const [users, setUsers] = useState([
    { Name: "Ram", Age: 24 },
    { Name: "Lakshman", Age: 23 },
    { Name: "Hanuman", Age: 22 },
    { Name: "Bharat", Age: 21 },
    { Name: "Shatrugan", Age: 20 },
  ]);
  return (
    <>
      <h1>Jai Shree Ram</h1>
      <div>
        {users.map((ele, index) => {
          return (
            <p key={index}>
              {ele.Name} - {ele.Age} years old.
            </p>
          );
        })}
      </div>
    </>
  );
}

export default App;
