import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({username, password});
  };
  return (
    <>
      <h1>Jai Shree Ram</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        password="Username"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        password="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

export default Login;
