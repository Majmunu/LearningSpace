import React, { useEffect } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import route from "./router/index";
import ResizableDiv from "./pages/Test";

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
      <ResizableDiv />
      {element}
    </div>
  );
}

export default App;
