import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Context from "./context/Context";

function App() {
  const [name, setName] = useState("");
  const [age,setAge] = useState(0);
  const [bmi,setBmi] = useState(0);

  // useEffect(() => {
  //   const promptName = prompt("Enter Your Name");
  //   if (promptName) {
  //     setName(promptName);
  //   }
  // }, []);

  return (
    <Context.Provider value={{ name, setName,age,setAge,bmi,setBmi }}>
      <Navbar />
      <Outlet />
      <Footer />
    </Context.Provider>
  );
}

export default App;
