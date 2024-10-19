import { useState, useEffect } from "react";
import "./index.css";

function App() {
  let [bgColor, setBgColor] = useState("bg-black");

  let color = [
    "bg-black",
    "bg-white",
    "bg-blue-500",
    "bg-green-500",
    "bg-red-500",
    "bg-gray-500",
    "bg-yellow-500",
    "bg-pink-500",
    "bg-purple-500",
    "bg-orange-500",
  ];

  useEffect(() => {
    document.body.className = ""; // Reset previous classes
    document.body.classList.add(bgColor); // Add the new background color class
  }, [bgColor]);

  return (
    <>
      {color.map((element, index) => {
        return (
          <button
            className={`${element} ${
              element != "bg-white" ? "text-white" : "text-black"
            } px-4 py-2 rounded mt-5`}
            key={index}
            onClick={() => {
              setBgColor(element);
            }}
          >
            {element.replace("bg-", "")}
          </button>
        );
      })}
    </>
  );
}

export default App;
