import React, { Fragment, useCallback, useReducer, useState } from "react";
import { Button, Input, InputNumber, Select } from "antd";
import "./style.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Test from "./Test";

interface SpinProps {}

type StateType = {
  x: number;
  y: number;
  z: number;
};
type ActionType = {
  type: string;
  payload: any;
};
//判断是否为整数
const formNumber = (number: any) => {
  if (Number.isInteger(number)) {
    return number;
  } else {
    //保留一位小数
    const roundedNum = Math.round(number * 10) / 10;
    const formattedNum = parseFloat(roundedNum.toFixed(1));
    return formattedNum;
  }
};
//计算旋转后的坐标
const calculateNewCoordinates = (
  initialX: number,
  initialY: number,
  initialZ: number,
  deltaAngle: number,
  axis: string,
) => {
  let angleRadians = (deltaAngle * Math.PI) / 180;
  let newX = initialX;
  let newY = initialY;
  let newZ = initialZ;

  if (axis === "x" || axis === "X") {
    newY =
      initialY * Math.cos(angleRadians) - initialZ * Math.sin(angleRadians);
    newZ =
      initialY * Math.sin(angleRadians) + initialZ * Math.cos(angleRadians);
  } else if (axis === "y" || axis === "Y") {
    newX =
      initialX * Math.cos(angleRadians) + initialZ * Math.sin(angleRadians);
    newZ =
      -initialX * Math.sin(angleRadians) + initialZ * Math.cos(angleRadians);
  } else if (axis === "z" || axis === "Z") {
    newX =
      initialX * Math.cos(angleRadians) - initialY * Math.sin(angleRadians);
    newY =
      initialX * Math.sin(angleRadians) + initialY * Math.cos(angleRadians);
  }
  console.log(444, newX, newY, newZ);

  return [formNumber(newX), formNumber(newY), formNumber(newZ)];
};
// calculateNewCoordinates(1, 20, 30, 4.5, "x");
const Spin: React.FC<SpinProps> = (props) => {
  //处理旋转
  function reducer(state: StateType, action: ActionType) {
    console.log(111, state, 222, action);
    switch (action.type) {
      case "x-single-change": {
        return {
          ...state,
          x: action.payload,
        };
      }
      case "y-single-change": {
        return {
          ...state,
          y: action.payload,
        };
      }
      case "z-single-change": {
        return {
          ...state,
          z: action.payload,
        };
      }
      case "xyz-ganged-change": {
        return {
          x: action.payload[0],
          y: action.payload[1],
          z: action.payload[2],
        };
      }
    }

    throw Error("Unknown action: " + action.type);
  }

  //旋转初始值
  const initialState: StateType = { x: 10, y: 0, z: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  //处理X轴旋转
  const handleXChange = (e: any, mark?: string) => {
    console.log("X轴旋转", e);
    if (mark === "x") {
      const update = calculateNewCoordinates(e, state.y, state.z, 5, "x");
      console.log(333, update);
      dispatch({ type: "xyz-ganged-change", payload: update });
    } else {
      dispatch({ type: "x-single-change", payload: e });
    }
  };
  //处理Y轴旋转
  const handleYChange = (e: any, mark?: string) => {
    console.log("Y轴旋转", e, mark);
    if (mark === "y") {
      const update = calculateNewCoordinates(state.x, e, state.y, 5, "y");
      console.log(333, update);
      dispatch({ type: "xyz-ganged-change", payload: update });
    } else {
      dispatch({ type: "y-single-change", payload: e });
    }
  };
  //处理Z轴旋转
  const handleZChange = (e: any, mark?: string) => {
    console.log("Z轴旋转", e);
    dispatch({ type: "z-single-change", payload: e });
    if (mark === "z") {
      const update = calculateNewCoordinates(state.x, state.y, e, 5, "z");
      console.log(333, update);
      dispatch({ type: "xyz-ganged-change", payload: update });
    }
  };

  return (
    <Fragment>
      <div className={"spin-root"}>
        <span className={"text-spin"}>
          test hshasdjhgasdghjasdghashgdasjhdhgja
        </span>
        <div className={"box"}>
          <span className={"guang"}>
            富文本编辑领域和常规的前端开发相比，有个非常微妙的区别：在这个领域里，最流行的解决方案往往是相当【重】的。为什么在一贯推崇【越轻越好】的前端社区，轻量级的编辑器没有成为主流呢？这要从编辑器的实现原理说起。
          </span>
        </div>
        <div className={"box"}>
          <span className={"guang1"}>
            富文本编辑领域和常规的前端开发相比，有个非常微妙的区别：在这个领域里，最流行的解决方案往往是相当【重】的。为什么在一贯推崇【越轻越好】的前端社区，轻量级的编辑器没有成为主流呢？这要从编辑器的实现原理说起。
          </span>
        </div>
        <Test value={state.x} mark={"x"} handle={handleXChange} />
        <Test value={state.y} mark={"y"} handle={handleYChange} />
        <Test value={state.z} mark={"z"} handle={handleZChange} />
      </div>
    </Fragment>
  );
};
export default Spin;
