import React, { Fragment } from "react";
import { Button, InputNumber } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

interface TestProps {
  value: number;
  mark: string;
  handle: (e: any, mark?: string) => void;
}

const Test: React.FC<TestProps> = (props) => {
  const minus = (
    <Button
      onClick={(e) => {
        props.handle(props.value - 5);
      }}
      type="text"
      className={"addon"}
      style={{ borderRadius: 0, width: 20, height: 20 }}
    >
      -
    </Button>
  );
  const add = (
    <Button
      onClick={(e) => {
        props.handle(props.value + 5);
      }}
      type="text"
      className={"addon"}
      style={{ borderRadius: 0, width: 20, height: 20 }}
    >
      +
    </Button>
  );
  const handleInputBlur = (e: any) => {
    props.handle(parseInt(e.target.value));
  };
  return (
    <Fragment>
      <InputNumber
        onBlur={handleInputBlur}
        value={props.value}
        className={"spin"}
        formatter={(value: any) => `${value} °`}
        parser={(value: any) => value!.replace(" °", "")}
        controls={false}
        addonBefore={add}
        addonAfter={minus}
        max={360}
        min={-360}
      />
      <LeftOutlined
        onClick={(e) => {
          props.handle(props.value + 5, props.mark);
        }}
      />
      <RightOutlined
        onClick={(e) => {
          props.handle(props.value - 5, props.mark);
        }}
      />
    </Fragment>
  );
};
export default Test;
