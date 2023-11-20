import React, { Fragment, useState } from "react";
import { InputNumber } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import "../../dot.css";

interface SizeProps {}

const Size: React.FC<SizeProps> = (props) => {
  const [value, setValue] = useState<any>();

  const handleChange = (e: any) => {
    console.log(e);
  };
  const Icon = () => {
    return (
      <div className={"icon-container"}>
        <div className={"icon-box"}>
          <PlusOutlined />
        </div>
        <div className={"icon-box"}>
          <MinusOutlined />
        </div>
      </div>
    );
  };
  return (
    <Fragment>
      <InputNumber
        className={"input-style"}
        controls={{ upIcon: <PlusOutlined />, downIcon: <MinusOutlined /> }}
        formatter={(value) => `${value}厘米`}
        parser={(value: any) => value!.replace("厘米", "")}
        // addonAfter={<Icon />}
        step={1}
        stringMode
        min={0}
        onChange={handleChange}
      />
    </Fragment>
  );
};
export default Size;
