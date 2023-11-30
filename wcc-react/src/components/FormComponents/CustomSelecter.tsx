import { InputNumber, Radio, RadioChangeEvent, Select } from "antd";
import React, { Fragment, useRef, useState } from "react";
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
  ref: React.MutableRefObject<undefined>;
}

const CustomSelect: React.FC<CustomSelectProps> = (props) => {
  const [selectValue, setSelectValue] = useState();
  // const renderRef = useRef();
  console.log(123, renderRef);
  const Render = ({ ref }: RenderProps) => {
    const [radioValue, setRadioValue] = useState(false);
    const [periodic, setPeriodic] = useState<Periodic>({
      day: 0,
      hour: 0,
      minute: 0,
      sec: 0,
      frequency: 0,
    });
    console.log(periodic);
    const onChange = (e: RadioChangeEvent) => {
      console.log("radio checked", e.target.value);
      setRadioValue(e.target.value);
    };
    return (
      <div className={styles.box}>
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
                  style={{ width: 32, color: "black!important" }}
                  min={1}
                  max={10}
                  onChange={(value) => setPeriodic({ ...periodic, day: value })}
                />
                <span>天</span>
                <InputNumber
                  controls={false}
                  style={{ width: 32 }}
                  min={1}
                  max={10}
                  onChange={(value) =>
                    setPeriodic({ ...periodic, hour: value })
                  }
                />
                <span>时</span>
                <InputNumber
                  controls={false}
                  style={{ width: 32 }}
                  min={1}
                  max={10}
                  onChange={(value) =>
                    setPeriodic({ ...periodic, minute: value })
                  }
                />
                <span>分</span>
                <InputNumber
                  controls={false}
                  style={{ width: 32 }}
                  min={1}
                  max={10}
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
                  style={{ width: 32 }}
                  min={1}
                  max={10}
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
          <span>关闭</span>
          <span>确定</span>
        </div>
      </div>
    );
  };
  return (
    <Fragment>
      <Select
        value={selectValue}
        open={true}
        style={{ width: 287 }}
        dropdownRender={() => <Render ref={renderRef} />}
      />
    </Fragment>
  );
};
export default CustomSelect;
