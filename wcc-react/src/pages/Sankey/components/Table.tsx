import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useEffect, useMemo, useState } from "react";

interface SankeyTabProps {
  getSelected?: (e: any) => void | undefined;
}

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const TableSankey: React.FC<SankeyTabProps> = (props) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  // const [loading, setLoading] = useState(false);
  const { getSelected } = props;
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    columnTitle: " ", // 设置这行
  };
  const { length } = selectedRowKeys;
  useEffect(() => {
    if (length) {
      getSelected!(length);
    } else {
      getSelected!("");
    }
  }, [getSelected, length]);
  return (
    <div>
      <div style={{ marginBottom: 16 }}></div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};

export default TableSankey;
