import React from "react";
import { ConfigProvider, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "./styles.module.less";

interface DataType {
  key: React.Key;
  name: string;
  version: number;
  operation: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "配置方案名称",
    dataIndex: "name",
    // render: (text: string) => <a>{text}</a>,
  },
  {
    title: "配置方案版本号",
    dataIndex: "version",
  },
  {
    title: "operation",
    dataIndex: "operation",
    render: (a, b) => {
      console.log(13, a);
      console.log(14, b);
      return <div>123</div>;
    },
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "普通用户加入企业",
    version: 1.0,
    operation: "详情",
  },
  {
    key: "2",
    name: "个人开发票",
    version: 3.0,
    operation: "详情",
  },
  {
    key: "3",
    name: "普通用户加入企业",
    version: 3.1,
    operation: "详情",
  },
  {
    key: "4",
    name: "普通用户加入企业",
    version: 5.1,
    operation: "详情",
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows,
    );
  },
};

const ContractTable: React.FC = () => {
  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "rgba(191,9,9,0.8)",
              footerBg: "rgb(58,124,238)",
              borderColor: "rgb(209,71,68)",
              cellFontSizeMD: 12,
              headerSplitColor: "#69e9e4",
            },
          },
        }}
      >
        <Table
          className={styles.table}
          rowSelection={{
            type: "radio",
            ...rowSelection,
          }}
          pagination={{ size: "small" }}
          size={"middle"}
          columns={columns}
          dataSource={data}
        />
      </ConfigProvider>
    </div>
  );
};

export default ContractTable;
// :where(.css-dev-only-do-not-override-hv1300).ant-table-wrapper .ant-table-pagination-right
