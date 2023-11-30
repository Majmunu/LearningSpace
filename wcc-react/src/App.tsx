import React from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import route from "./router/index";

function App() {
  const element = useRoutes(route);

  return (
    <div className="app">
      <h1>Fuck your fucking code</h1>
      <text>123</text>
      {element}
    </div>
  );
}

export default App;
