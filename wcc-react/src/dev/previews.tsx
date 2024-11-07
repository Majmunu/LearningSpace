import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import Practice from "../TypeScript/practice";
import Condition from "../pages/Condition";
import App from "../App";

const ComponentPreviews = () => {
    return (
      <Previews palette={<PaletteTree />}>
        <ComponentPreview path="/Practice">
          <Practice />
        </ComponentPreview>
        <ComponentPreview path="/Condition">
          <Condition />
        </ComponentPreview>
        <ComponentPreview path="/App">
          <App />
        </ComponentPreview>
      </Previews>
    );
};

export default ComponentPreviews;