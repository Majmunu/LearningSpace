import React, { Fragment } from "react";
import { InputNumber, Progress, Space } from "antd";

interface DiaphanousProps {}

const Diaphanous: React.FC<DiaphanousProps> = (props) => {
  return (
    <Fragment>
      <Space>
        <Progress percent={30} showInfo={false} />
        <InputNumber
          defaultValue={100}
          min={0}
          max={100}
          formatter={(value) => `${value}%`}
          parser={(value: any) => value!.replace("%", "")}
        />
      </Space>
    </Fragment>
  );
};
export default Diaphanous;
