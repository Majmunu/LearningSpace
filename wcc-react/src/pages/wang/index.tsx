import React, { useState } from "react";
// import "./dot.css";
import Size from "./components/size";
import Spin from "./components/spin";
import TextFill from "./components/textfill";
import Diaphaneity from "./components/diaphaneity";
import { Carousel, Input } from "antd";
import Layout from "./components/Layout";
import MyEditor from "./Wang";
// import { Quill1 } from "./Quill";
import Wys from "./components/Wys";
import Example from "./Jodit";
import { Quill1 } from "./Test";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const MyE: React.FC = () => {
  const [number, setNumber] = useState(2048);
  const handleChange = (e: any) => {
    console.log(e.target.value);
    setNumber(e.target.value);
  };
  return (
    <div className={"root"}>
      <Input placeholder="Basic usage" onChange={handleChange} />
      <Quill1 />
      {/*<Example placeholder={`${number}`} />*/}
      {/*<Wys />*/}
      {/*<MyEditor number1={number}></MyEditor>*/}
      {/*<MyEditor number1={number}></MyEditor>*/}
      {/*<Bus />*/}
      {/*<Carousel*/}
      {/*  autoplay*/}
      {/*  arrows={true}*/}
      {/*  effect={"vertical"}*/}
      {/*  autoplaySpeed={8000}*/}
      {/*  prevArrow={<h1>123</h1>}*/}
      {/*  nextArrow={<h1>123</h1>}*/}
      {/*>*/}
      {/*  <div>*/}
      {/*    <h3 style={contentStyle}>21</h3>*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <h3 style={contentStyle}>2</h3>*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <h3 style={contentStyle}>3</h3>*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <h3 style={contentStyle}>4</h3>*/}
      {/*  </div>*/}
      {/*</Carousel>*/}
      {/*<Size />*/}
      {/*<Spin />*/}
      {/*<Layout />*/}
      {/*<Quill1 />*/}
      {/*<TextFill />*/}
      {/*<Diaphaneity />*/}
    </div>
  );
};

export default MyE;
