import { Button, Modal } from "antd";
import React, { useState } from "react";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import { Fragment } from "react";

interface DataType {
  key: string;
  cname: string;
  ename: string;
  type: string;
  isRequired: string;
  inputData?: string;
}

const Interaction: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShowList, setIsShowList] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSelectInput = (e: any) => {
    setIsShowList(true);
    console.log(222, e);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "字段名（CN）",
      dataIndex: "cname",
      key: "cname",
    },
    {
      title: "字段名（EN）",
      dataIndex: "ename",
      key: "ename",
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "是否必填",
      dataIndex: "isRequired",
      key: "isRequired",
    },
    {
      title: "请选择输入数据",
      key: "inputData",
      render: (_, record) => {
        console.log(111, _, 222, record);
        return (
          <Space size="middle">
            {/*<a>Invite {record.cname}</a>*/}
            {/*<a>Delete</a>*/}
            <Button onClick={handleSelectInput.bind(null, record.key)}>
              请选择
            </Button>
          </Space>
        );
      },
    },
  ];
  const RadioGroup = () => {
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
      console.log("radio checked", e.target.value);
      setValue(e.target.value);
    };
    return (
      <div>
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </Radio.Group>
      </div>
    );
  };

  const data: DataType[] = [
    {
      key: "1",
      cname: "名称",
      ename: "name",
      type: "字符串",
      isRequired: "是",
      inputData: "",
    },
    {
      key: "2",
      cname: "年龄",
      ename: "age",
      type: "数字",
      isRequired: "是",
      inputData: "",
    },
    {
      key: "3",
      cname: "性别",
      ename: "sex",
      type: "字符串",
      isRequired: "是",
      inputData: "",
    },
  ];

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="设置合约所需的输入"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1160}
      >
        <Table pagination={false} columns={columns} dataSource={data} />
        {isShowList ? <RadioGroup /> : <Fragment />}
      </Modal>
    </>
  );
};

export default Interaction;
