import { InputNumber, Radio, RadioChangeEvent, Select } from "antd";
import React, { Fragment, useCallback, useRef, useState } from "react";
import styles from "./styles.module.less";

interface CustomSelectProps {}

interface Periodic {
  day: number | null;
  hour: number | null;
  minute: number | null;
  sec: number | null;
  frequency: number | null;
}

interface RenderProps {
  periodic: Periodic;
  setPeriodic: (value: Periodic) => void;
  setIsOpen: (value: boolean) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = (props) => {
  const [selectValue, setSelectValue] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [periodic, setPeriodic] = useState<Periodic>({
    day: 0,
    hour: 0,
    minute: 0,
    sec: 0,
    frequency: 0,
  });
    console.log(111,periodic)

  return (
    <Fragment>
      <Select
        onDropdownVisibleChange={(visible) => setIsOpen(visible)}
        value={selectValue}
        open={isOpen}
        style={{ width: 287 }}
        dropdownRender={() => (
          <Render
            setIsOpen={setIsOpen}
            periodic={periodic}
            setPeriodic={setPeriodic}
          />
        )}
        // onClick={onSelectClick}
      />
    </Fragment>
  );
};
export default CustomSelect;

const Render = React.memo((props: RenderProps) => {
  const [radioValue, setRadioValue] = useState(true);
  const { periodic, setPeriodic } = props;
  console.log(111, periodic);
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setRadioValue(e.target.value);
  };
  return (
    <div
      className={styles.box}
    >
      <Radio.Group
        className={styles["radio-group"]}
        onChange={onChange}
        value={radioValue}
      >
        <Radio value={false}>无需设置</Radio>
        <Radio value={true}>设定执行周期</Radio>
      </Radio.Group>
      {radioValue && (
        <div className={styles["execution-cycle"]}>
          <div className={styles["contract-time"]}>
            <span>间隔多久调用合约</span>
            <div className={styles["interval-time"]}>
              <InputNumber
                controls={false}
                style={{ width: 40, color: "black!important" }}
                min={1}
                max={365}
                onChange={(value) => setPeriodic({ ...periodic, day: value })}
              />
              <span>天</span>
              <InputNumber
                controls={false}
                style={{ width: 40 }}
                min={1}
                max={24}
                onChange={(value) => setPeriodic({ ...periodic, hour: value })}
              />
              <span>时</span>
              <InputNumber
                controls={false}
                style={{ width: 40 }}
                min={1}
                max={59}
                onChange={(value) =>
                  setPeriodic({ ...periodic, minute: value })
                }
              />
              <span>分</span>
              <InputNumber
                controls={false}
                style={{ width: 40 }}
                min={1}
                max={59}
                onChange={(value) => setPeriodic({ ...periodic, sec: value })}
              />
              <span>秒</span>
            </div>
          </div>
          <div className={styles["contract-time"]}>
            <span>调用合约多少次</span>
            <div className={styles["interval-time"]}>
              <InputNumber
                controls={false}
                style={{ width: 40 }}
                min={1}
                max={99}
                onChange={(value) =>
                  setPeriodic({ ...periodic, frequency: value })
                }
              />
              <span>次</span>
            </div>
          </div>
        </div>
      )}

      <div className={styles["bottom-button"]}>
        <span onClick={() => props.setIsOpen(false)}>关闭</span>
        <span>确定</span>
      </div>
    </div>
  );
});
