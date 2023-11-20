import React, { Fragment } from "react";
import styles from "./styles.module.less";

interface TextContentProps {}

const Index: React.FC<TextContentProps> = (props) => {
  return (
    <Fragment>
      <div className={styles["bottom-content"]}>
        <span className={"text text-left"}>
          如果只添加一个情形的名称,则在原型中需要选择一个情形来执行相应的动作
        </span>
        <div className={"test"}>
          <div className={"button button-position-left"}>
            <span>按钮</span>
          </div>
          <div className={"situation-wrapper situation-wrapper-one"}>
            <span className={"situation"}>情形1</span>
          </div>
          <div className={"situation-wrapper situation-wrapper-two"}>
            <span className={"situation"}>情形2</span>
          </div>
        </div>
        <div className="text-with-lines">
          <div className="line "></div>
          <span>或者</span>
          <div className="line"></div>
        </div>
        <span className={"text text-right"}>
          开始为情形添加条件,构建在满足条件时自动触发的情形来执行相应的动作。
        </span>

        <div className={"mind"}>
          <div className={"button button-position-right"}>
            <span>按钮</span>
          </div>
          <div className={"horizontal-line"} />
          <div className={"vertical-line"} />
          <div className={"mind-rectangle"}>
            <div className={"situation-wrapper situation-color-up "}>
              <span className={"situation"}>情形1</span>
            </div>
            <div className={"situation-wrapper situation-color-down"}>
              <span className={"situation"}>情形2</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Index;
