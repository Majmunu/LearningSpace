import React, { useState, useRef } from "react";

const Parent = () => {
  const [hoveredChild, setHoveredChild] = useState(null);
  const parentRef = useRef(null);

  const handleMouseEnterChild = (id) => {
    setHoveredChild(id);
  };

  const handleMouseLeaveChild = () => {
    setHoveredChild(null);
  };

  const handleMouseEnterParent = (event: any) => {
    // @ts-ignore
    if (!parentRef.current.contains(event.relatedTarget)) {
      console.log("鼠标移入父组件");
    }
  };

  const handleMouseLeaveParent = (event: any) => {
    // @ts-ignore
    if (!parentRef.current.contains(event.relatedTarget)) {
      console.log("鼠标移出父组件");
    }
  };

  return (
    <div
      ref={parentRef}
      onMouseEnter={handleMouseEnterParent}
      onMouseLeave={handleMouseLeaveParent}
      style={{ padding: "20px", border: "2px solid red" }}
    >
      <div>
        父组件{" "}
        {hoveredChild !== null
          ? `（子组件 ${hoveredChild} 鼠标移入）`
          : "（没有子组件被移入）"}
      </div>
      <div
        data-id="1"
        onMouseEnter={() => handleMouseEnterChild(1)}
        onMouseLeave={handleMouseLeaveChild}
        style={{ padding: "20px", border: "1px solid black", margin: "10px" }}
      >
        子组件 1
      </div>
      <div
        data-id="2"
        onMouseEnter={() => handleMouseEnterChild(2)}
        onMouseLeave={handleMouseLeaveChild}
        style={{ padding: "20px", border: "1px solid black", margin: "10px" }}
      >
        子组件 2
      </div>
      <div
        data-id="3"
        onMouseEnter={() => handleMouseEnterChild(3)}
        onMouseLeave={handleMouseLeaveChild}
        style={{ padding: "20px", border: "1px solid black", margin: "10px" }}
      >
        子组件 3
      </div>
    </div>
  );
};

export default Parent;
