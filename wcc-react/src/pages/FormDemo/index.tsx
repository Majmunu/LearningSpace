import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import CustomSelect from "../../components/FormComponents/CustomSelecter";

const FormDemo: React.FC = () => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "This is panel header 1",
      children: <CustomSelect />,
    },
  ];

  return (
    <div>
      <Collapse
        style={{ width: 300 }}
        defaultActiveKey={["1"]}
        ghost
        items={items}
      />
    </div>
  );
};

export default FormDemo;
