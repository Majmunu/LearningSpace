import React, { Fragment } from "react";
import { Select } from "antd";
import ContractTable from "./Table";

interface ContractSelectProps {}

const ContractSelect: React.FC<ContractSelectProps> = (props) => {
  return (
    <Fragment>
      <Select style={{ width: 350 }} dropdownRender={() => <ContractTable />} />
    </Fragment>
  );
};
export default ContractSelect;
