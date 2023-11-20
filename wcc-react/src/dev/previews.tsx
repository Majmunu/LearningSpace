import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import Practice from "../TypeScript/practice";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Practice">
                <Practice/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;