import React, { Fragment, useState } from "react";
import { Button, Modal } from "antd";
import styles from "./style.module.less";
import FieldItem from "./components/Field";
import App from "./components/Table";

interface ContractModalProps {}

const ContractModal: React.FC<ContractModalProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Fragment>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        width={1162}
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/*合约配置信息*/}
        <div className={styles["config-msg"]}>
          <div className={"title"}>
            <span>合约配置信息</span>
          </div>
          <div className={"button"}>
            <Button style={{ width: "88px" }}>查看代码</Button>
          </div>

          <div className={"content"}>
            <FieldItem label={"合约名称"} value={"LoginContract"} />
            <FieldItem label={"合约配置说明"} value={"请输入合约配置说明"} />
            <FieldItem label={"合约配置说明"} value={"请输入合约配置说明"} />
            <FieldItem label={"合约名称"} value={"LoginContract"} />
            <FieldItem label={"合约配置说明"} value={"请输入合约配置说明"} />
            <FieldItem label={"合约名称"} value={"LoginContract"} />
            <FieldItem label={"合约配置说明"} value={"请输入合约配置说明"} />
            <FieldItem label={"合约配置说明"} value={"请输入合约配置说明"} />
            <FieldItem label={"合约名称"} value={"LoginContract"} />
          </div>
        </div>
        {/*合约需要的输入*/}
        <div></div>
        {/*合约提供的输出*/}
        <div>
          <App />
        </div>
      </Modal>
    </Fragment>
  );
};
export default ContractModal;
