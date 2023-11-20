import { Fragment } from "react";
import React, { useState } from "react";
import { Button, Form, Input, Modal, Select } from "antd";
import styles from "./styles.module.less";
import Index from "./components/TextContext";
import FormContent from "./components/FormContent";

interface ConditionProps {}

const options = [
  { value: "all", label: "匹配以下全部条件" },
  { value: "anyone", label: "匹配以下任意条件" },
];
export const Condition: React.FC<ConditionProps> = React.memo((props) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [switchComponent, setSwitchComponent] = useState(true);
  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setSwitchComponent(!switchComponent);
  };

  const [form] = Form.useForm();
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (value1: any) => {
    setConfirmLoading(true);
    !switchComponent &&
      form
        .validateFields()
        .then((values) => {
          // form.resetFields();
          console.log("我是condition", values);
        })
        .catch((info) => {
          console.log("Validate Failed:", info);
        });
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    !switchComponent && form.resetFields();
    setSwitchComponent(true);
    setOpen(false);
  };
  return (
    <Fragment>
      <h1>123</h1>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={1162}
        cancelText={"取消"}
        okText={"确认"}
      >
        <div className={styles.modal}>
          <div className={"left"}>
            <div className={"pillar"} />
            <span className={"span"}>情形名称</span>
            <Input className={"input"} />
          </div>
          <div className={"right"}>
            <Select className={"select"} options={options} />
          </div>
          <div className={"bottom"}>
            {switchComponent ? (
              <Fragment>
                <Button
                  style={{ width: 268 }}
                  type={"primary"}
                  onClick={handleButtonClick}
                >
                  添加条件
                </Button>
                <Index />
              </Fragment>
            ) : (
              <FormContent
                show={setSwitchComponent}
                handleForm={handleOk}
                form={form}
              />
            )}
          </div>
        </div>
      </Modal>
    </Fragment>
  );
});
export default Condition;
