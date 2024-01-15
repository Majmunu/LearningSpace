import React, { useState } from "react";
import { Radio, Select } from "antd";
import "./style.less";

const StepBar = () => {
  const [value, setValue] = useState<string | number | undefined>(undefined);

  const handleRadioClick = (clickedValue: any) => {
    // 如果点击的是当前已选中的项，则取消选中
    if (value === clickedValue) {
      setValue(undefined);
    } else {
      setValue(clickedValue);
    }
  };
  const test = 123;

  return (
    <div>
      <Radio.Group value={value} buttonStyle="solid">
        <Radio.Button
          style={{ border: 0 }}
          value={test}
          onClick={() => handleRadioClick(test)}
        >
          Option 1
        </Radio.Button>
      </Radio.Group>
      <Select
        defaultValue="lucy"
        open={true}
        style={{ width: 120, fontSize: 20 }}
        options={[
          { value: "jack", label: "Jack" },
          { value: "jack", label: "Jack" },
          { value: "Yiminghe", label: "yiminghe" },
          { value: "disabled", label: "Disabled", disabled: true },
        ]}
      />
      <div
        style={{
          width: 300,
          height: 300,
          backgroundColor: "red",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            width: 20,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          22222212322211123123123111111231231222222333
        </div>
      </div>
    </div>
  );
};

export default StepBar;
