import React, { Fragment } from "react";
import { Collapse } from "antd";
import { RightOutlined } from "@ant-design/icons";

interface LayoutProps {}

const CustomHeader: React.FC = () => {
  return (
    <div>
      <div>
        <span>对齐</span>
        <RightOutlined />
      </div>
      <div></div>
    </div>
  );
};
const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <Fragment>
      <Collapse
        collapsible="header"
        expandIconPosition={"end"}
        defaultActiveKey={["1"]}
        items={[
          {
            key: "1",
            label: <CustomHeader />,
            children: <p>1111111</p>,
          },
        ]}
      >
        <span>22222</span>
      </Collapse>
    </Fragment>
  );
};
export default Layout;
