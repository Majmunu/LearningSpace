import React, { Fragment } from "react";
import { Select } from "antd";

interface TreeProps {}

const Tree: React.FC<TreeProps> = (props) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <Fragment>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        popupMatchSelectWidth={false}
        onChange={handleChange}
        options={[
          { value: "jack", label: "Jack1111122222222222222222211111111" },
          { value: "lucy", label: "Lucy" },
          { value: "Yiminghe", label: "yiminghe" },
          { value: "disabled", label: "Disabled", disabled: true },
        ]}
      />
    </Fragment>
  );
};
export default Tree;
