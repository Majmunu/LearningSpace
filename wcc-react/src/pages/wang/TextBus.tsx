import { useRef, useEffect } from "react";
import { createEditor } from "@textbus/editor";
import "@textbus/editor/bundles/textbus.min.css";

export function Bus() {
  const editorContainer = useRef<any>();

  useEffect(() => {
    const editor = createEditor();
    // @ts-ignore
    editor.mount(editorContainer.current);
    editor.onChange.subscribe(() => {
      console.log(editor.getHTML());
    });
    return () => {
      editor.destroy();
    };
  }, []);

  return <div ref={editorContainer}></div>;
}
