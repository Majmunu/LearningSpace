import React, { Fragment, useCallback, useState } from "react";
import {
  Select,
  ConfigProvider,
  InputNumber,
  Radio,
  RadioChangeEvent,
  Checkbox,
  Button,
  Input,
  UploadFile,
  Upload,
} from "antd";
import "./index2.css";
import {
  DownOutlined,
  EyeOutlined,
  ShrinkOutlined,
  TwitterOutlined,
  UploadOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { DefaultOptionType } from "rc-select/lib/Select";

const options = [
  { value: "none", label: "无" },
  { value: "bai", label: "摆动" },
  { value: "xian", label: "线性" },
];
const plainOptions = ["Apple", "Pear", "Orange"];
const test = false;
const initFile: UploadFile = {
  uid: "-1",
  name: "yyy.png",
  status: "done",
  url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  thumbUrl:
    "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
};
const positions = [
  { name: "左上", english: "Top Left" },
  { name: "顶部", english: "Top" },
  { name: "右上", english: "Top Right" },
  { name: "左侧", english: "Left" },
  { name: "中央", english: "Center" },
  { name: "右侧", english: "Right" },
  { name: "左下", english: "Bottom Left" },
  { name: "底部", english: "Bottom" },
  { name: "右下", english: "Bottom Right" },
];
const TestPage: React.FC = (props) => {
  const [value1, setValue1] = useState(["Pear", "Apple"]);
  const [file, setFile] = useState<any>(initFile);
  const onChange1 = ({ target: { value } }: RadioChangeEvent) => {
    console.log("radio1 checked", value);
    setValue1(value);
  };

  const [selected, setSelected] = useState(-1);
  const handleClick = (index: number) => {
    setSelected(index);
    console.log(positions[index]);
  };
  const createSquare = (index: number) => (
    <div
      key={index}
      className={`square ${selected === index ? "blue" : ""}`}
      onClick={() => handleClick(index)}
    ></div>
  );
  // setPreviewImage(file.url || (file.preview as string));
  //多选按钮
  const [selectedValues, setSelectedValues] = useState<any>([]);
  const onSelectChange = useCallback(
    (value: any, option: DefaultOptionType[] | DefaultOptionType) => {
      console.log(111, value);
      console.log(222, option);
    },
    [],
  );

  const handleCheckboxChange = (value: any) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((val: any) => val !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  const Test1 = () => {
    return (
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1447"
        width="200"
        height="200"
      >
        <path
          d="M511.999488 847.882863c-28.734592 0-56.729303-2.604314-83.969807-7.099698L231.232673 960.185602 231.232673 761.40735C128.618486 689.355337 62.772174 578.889433 62.772174 454.825836c0-217.07906 201.129864-393.058051 449.228338-393.058051 248.084146 0 449.228338 175.980014 449.228338 393.058051C961.227826 671.917176 760.083635 847.882863 511.999488 847.882863zM511.999488 117.91762c-217.086932 0-393.074156 150.851707-393.074156 336.907193 0 114.166179 66.421434 214.898395 167.761552 275.820929l-1.768346 130.234133 132.171551-79.455633c30.4487 6.497994 62.117231 10.308787 94.910422 10.308787 217.101258 0 393.073132-150.825101 393.073132-336.907193C905.073644 268.769326 729.10177 117.91762 511.999488 117.91762zM736.614169 510.976694c-31.011542 0-56.154182-25.128307-56.154182-56.150858 0-31.010271 25.14264-56.151881 56.154182-56.151881s56.154182 25.14161 56.154182 56.151881C792.768351 485.848387 767.624687 510.976694 736.614169 510.976694zM511.999488 510.976694c-31.010518 0-56.153158-25.128307-56.153158-56.150858 0-31.010271 25.14264-56.151881 56.153158-56.151881 31.011542 0 56.154182 25.14161 56.154182 56.151881C568.15367 485.848387 543.01103 510.976694 511.999488 510.976694zM287.385831 510.976694c-31.010518 0-56.153158-25.128307-56.153158-56.150858 0-31.010271 25.14264-56.151881 56.153158-56.151881s56.153158 25.14161 56.153158 56.151881C343.53899 485.848387 318.39635 510.976694 287.385831 510.976694z"
          p-id="1448"
        ></path>
      </svg>
    );
  };
  return (
    <div>
      <Test1 />
      <div className="grid">
        {Array.from({ length: 9 }, (_, index) => createSquare(index))}
      </div>
      <ConfigProvider
        prefixCls={"antd"}
        theme={{
          components: {
            Select: {
              selectorBg: "#191919",
              optionSelectedBg: "#484848",
            },
            InputNumber: {
              handleHoverColor: "rgb(255 255 255 / 60%)",
              handleFontSize: 8,
            },
          },
        }}
      >
        <Select
          placeholder={"请选择"}
          style={{ width: 211 }}
          options={options}
          className={"input2"}
          bordered={false}
          suffixIcon={
            test ? (
              <DownOutlined style={{ fontSize: "14px" }} />
            ) : (
              <div className={"icon"}>
                <UpOutlined
                  color={"#fff"}
                  style={{ fontSize: "8px", color: "#red" }}
                />
                <DownOutlined style={{ fontSize: "8px" }} />
              </div>
            )
          }
          onChange={onSelectChange}
        />
        <div className={"previewImage"}>
          <TwitterOutlined className={"icon1"} />
          {file.url ? (
            <img alt="example" style={{ width: "100%" }} src={file.url} />
          ) : (
            <Fragment />
          )}
        </div>
        <Upload
          maxCount={1}
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        >
          <Button type={"primary"}>选择</Button>
        </Upload>

        <Input placeholder="Basic usage" suffix={"y"} />
        <span></span>
        <InputNumber className={"input1"} style={{ width: 125 }} />
        {/*<Input className={"input2"} placeholder="Borderless" bordered={false} />*/}
        {/*;*/}
        {/*<Radio.Group*/}
        {/*  options={plainOptions}*/}
        {/*  onChange={onChange1}*/}
        {/*  value={value1}*/}
        {/*/>*/}
        {/*<span>毫秒</span>*/}
        {/*<div className={"icon"}>*/}
        {/*  <UpOutlined color={"#fff"} style={{ fontSize: "6px" }} />*/}
        {/*  <DownOutlined style={{ fontSize: "6px" }} />*/}
        {/*</div>*/}
      </ConfigProvider>
      <div>
        <Checkbox
          value="italic"
          checked={selectedValues.includes("italic")}
          onChange={() => handleCheckboxChange("italic")}
          style={{ display: "none" }}
        />
        <Button
          type={selectedValues.includes("italic") ? "primary" : "default"}
          onClick={() => handleCheckboxChange("italic")}
        >
          斜体
        </Button>
        <Checkbox
          value="bold"
          checked={selectedValues.includes("bold")}
          onChange={() => handleCheckboxChange("bold")}
          style={{ display: "none" }}
        />
        <Button
          type={selectedValues.includes("bold") ? "primary" : "default"}
          onClick={() => handleCheckboxChange("bold")}
        >
          粗体
        </Button>
        <Checkbox
          value="underline"
          // checked={"text"}
          onChange={() => handleCheckboxChange("underline")}
          style={{ display: "none" }}
        />
        <Button
          type={selectedValues.includes("underline") ? "primary" : "default"}
          onClick={() => handleCheckboxChange("underline")}
        >
          <div>
            <EyeOutlined />
            <span>下划线</span>
          </div>
        </Button>
        <Radio.Group defaultValue="a" buttonStyle="solid">
          <Radio.Button value="a">Hangzhou</Radio.Button>
          <Radio.Button value="b">Shanghai</Radio.Button>
          <Radio.Button value="c">Beijing</Radio.Button>
          <Radio.Button value="d">
            <div>
              <EyeOutlined />
              <span>下划线</span>
            </div>
          </Radio.Button>
        </Radio.Group>
      </div>
    </div>
  );
};

export default TestPage;
