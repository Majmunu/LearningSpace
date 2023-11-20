import React from "react";

interface FieldItemProps {
  label?: string;
  value?: string;
}

const FieldItem: React.FC<FieldItemProps> = (props) => {
  return (
    <div style={{ display: "flex", columnGap: "8px", alignItems: "center" }}>
      <span>{props.label}:</span>
      <div
        style={{
          borderBottom: "1px solid #484848",
          width: "235px",
          paddingLeft: "8px",
        }}
      >
        <span>{props.value}</span>
      </div>
    </div>
  );
};
export default FieldItem;
