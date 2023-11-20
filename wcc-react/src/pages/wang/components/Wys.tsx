import React, { Fragment, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";

interface WysProps {}

const Wys: React.FC<WysProps> = (props) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
  const onEditorStateChange = (value: any) => {
    console.log(value);
    setEditorState(value);
  };
  return (
    <Fragment>
      <Editor
        editorState={editorState}
        // readOnly={readOnly}
        // mention={mentionWithDefault}
        toolbarClassName="toolbarClassName"
        wrapperClassName="rtEditor__wrapper"
        editorClassName="editorClassName"
        localization={{ locale: "zh" }}
        onEditorStateChange={onEditorStateChange}
      />
    </Fragment>
  );
};
export default Wys;
