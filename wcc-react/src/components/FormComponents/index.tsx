import React, { Fragment, useEffect, useState } from "react";
import { Input, Radio, RadioChangeEvent } from "antd";

interface FormComponentProps {
  onChange: (value: any) => void;
}

const FormComponent: React.FC<FormComponentProps> = (props) => {
  const [value, setValue] = useState({ input: "", radio: 1 });
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue({ ...value, radio: e.target.value });
  };
  const handleInputChange = (e: any) => {
    setValue({ ...value, input: e.target.value });
  };
  useEffect(() => {
    props.onChange(value);
  }, [value]);
  return (
    <Fragment>
      <Input onChange={handleInputChange} placeholder="Basic usage" />;
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>
    </Fragment>
  );
};
export default FormComponent;
