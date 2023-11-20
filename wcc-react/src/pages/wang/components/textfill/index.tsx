import React, { Fragment } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import { useState } from "react";

interface TextFillProps {}

const TextFill: React.FC<TextFillProps> = (props) => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <Fragment>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>无填充</Radio>
        <Radio value={2}>纯色填充</Radio>
      </Radio.Group>
    </Fragment>
  );
};
export default TextFill;
