import React, { Fragment, useState } from "react";
import { Button } from "antd";
import OutsideClickHandler from "./wrappercontrol";

interface ControlDivProps {}

const ControlDiv: React.FC<ControlDivProps> = (props) => {
  const [state, setState] = useState(false);
  const handleOutsideClick = () => {
    setState(false);
  };

  return (
    <Fragment>
      <div>
        <img src={`data:image/svg+xml;base64,`} />
        <Button onClick={() => setState(!state)}>control</Button>
        {state && (
          <OutsideClickHandler onOutsideClick={handleOutsideClick}>
            <div
              style={{ width: 200, height: 100, backgroundColor: "red" }}
            ></div>
          </OutsideClickHandler>
        )}
      </div>
    </Fragment>
  );
};
export default ControlDiv;
