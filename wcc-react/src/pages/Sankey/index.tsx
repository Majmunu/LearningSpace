import React, { Fragment, useState } from "react";
import { Button, Collapse, Modal } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import TableSankey from "./components/Table";

interface SankeyProps {}

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const Sankey: React.FC<SankeyProps> = (props) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [selectedLength, setSelectedLength] = useState("");

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const HeaderText = () => {
    return (
      <div>
        <span>1.流程 合约规划</span>
        <span>已选择{selectedLength}项</span>
      </div>
    );
  };

  const { Panel } = Collapse;

  const text = `A dog`;
  //获取选中的数据的长度
  const getSelected = (e: any) => {
    console.log(e);
    setSelectedLength(e);
  };
  return (
    <Fragment>
      <div>
        <Button type="primary" onClick={showModal}>
          Open Modal with async logic
        </Button>
        <Modal
          title="Title"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          width={680}
        >
          <div>
            <Collapse
              bordered={false}
              defaultActiveKey={["1"]}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              // className="site-collapse-custom-collapse"
            >
              <Panel
                header={<HeaderText />}
                key="1"
                // className="site-collapse-custom-panel"
              >
                <TableSankey getSelected={getSelected} />
              </Panel>
              <Panel
                header="This is panel header 2"
                key="2"
                className="site-collapse-custom-panel"
              >
                <TableSankey getSelected={getSelected} />
              </Panel>
              <Panel
                header="This is panel header 3"
                key="3"
                className="site-collapse-custom-panel"
              >
                <TableSankey getSelected={getSelected} />
              </Panel>
            </Collapse>
          </div>
        </Modal>
      </div>
    </Fragment>
  );
};
export default Sankey;
