import React, { useContext, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function ToggleThemed() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    background: theme === "light" ? "#ffffff" : "#333333",
    color: theme === "light" ? "#000000" : "#ffffff",
    padding: "20px",
    textAlign: "center",
  };
  return (
    <div style={styles}>
      <h2>{theme}</h2>
      <button onClick={toggleTheme}>Theme Change</button>
    </div>
  );
}
