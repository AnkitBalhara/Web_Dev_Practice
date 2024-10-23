import { useState, useCallback, useEffect } from "react";
import "./index.css";

function App() {
  const [length, setLength] = useState(8);
  const [nummberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [buttonCopy, setButtonCopy] = useState("Copy");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (nummberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()+_";

    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  }, [length, nummberAllowed, charAllowed]);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setButtonCopy("Copied");
    setTimeout(() => {
      setButtonCopy("Copy");
    }, 2000);
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, nummberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      {/* <div className="container bg-slate-800 text-center text-4xl text-white">
        Jai Shree Ram
      </div> */}
      <div className="bg-gray-500 text-center text-2xl text-gray-200 w-full max-w-fit min-w-fit mx-auto m-10 rounded px-4 shadow-md">
        <h1 className="text-white text-4xl m-4">Password Generator</h1>
        <div className="flex  shadow-md overflow-hidden rounded-lg mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3 text-gray-500"
            value={password}
            readOnly
          />
          <button
            className="bg-blue-600 text-white px-3 py-1 "
            onClick={handleCopy}
          >
            {buttonCopy}
          </button>
        </div>
        <div className="flex flex-wrap text-md gap-x-2 ">
          <div className="flex items-center gap-x-1 mb-4">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              onChange={(event) => {
                setLength(event.target.value);
              }}
              className="cursor-pointer "
              id="length"
            />
            <label htmlFor="length">Length :{length}</label>
          </div>
          <div className="flex items-center gap-x-1 mb-4">
            <input
              type="checkbox"
              id="inputNumber"
              defaultChecked={nummberAllowed}
              onChange={() => {
                setNumberAllowed((previous) => !previous);
              }}
            />
            <label htmlFor="inputNumber">Number</label>
          </div>
          <div className="flex items-center gap-x-1 mb-4">
            <input
              type="checkbox"
              id="inputChar"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((previous) => !previous);
              }}
            />
            <label htmlFor="inputChar">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
