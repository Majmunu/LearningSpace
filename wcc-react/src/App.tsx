import React, { useEffect } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import route from "./router/index";

function App() {
  const element = useRoutes(route);
  useEffect(() => {
    return () => {
      console.log("我被销毁啦test");
    };
  }, []);

  return (
    <div className="app">
      <h1>Fuck your fucking code</h1>
      {element}
    </div>
  );
}

export default App;
