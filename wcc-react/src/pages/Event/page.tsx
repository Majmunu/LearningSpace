import { Fragment, useEffect, useId } from "react";
import React from "react";

import { Button, Select } from "antd";

import { useAppDispatch, useAppSelector } from "../../store/hook";
import {
  setSelectedComponent,
  setSelectedEvent,
} from "../../features/componentSlice";

interface ComponentEventProps {}

const ComponentEvent: React.FC<ComponentEventProps> = (props) => {
  const componentId = useId();
  const componentEvent = useAppSelector((state) => state.component);
  console.log("componentEvent", componentEvent);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setSelectedComponent(componentId));
  }, []);
  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    console.log(value);
    dispatch(
      setSelectedEvent({ componentId: componentId, event: value.value }),
    );
  };
  return (
    <Fragment>
      <Select
        labelInValue
        defaultValue={{ value: "lucy", label: "Lucy (101)" }}
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          {
            value: "click",
            label: "点击事件",
          },
          {
            value: "change",
            label: "改变事件",
          },
        ]}
      />
      <Button type={'primary'} onClick={}>测试添加事件</Button>
    </Fragment>
  );
};
export default ComponentEvent;
