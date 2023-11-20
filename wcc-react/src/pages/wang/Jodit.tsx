import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

interface ExampleProps {
  placeholder?: string;
}

const Example: React.FC<ExampleProps> = ({ placeholder }) => {
  const editor = useRef<any | null>(null);
  const [content, setContent] = useState<string>("");

  const config = useMemo(
    () => ({
      readonly: false,
      language: "zh_cn",
      placeholder: placeholder || "Start typing...",

      uploader: {
        url: "/articlesLife/admin/uploadAboutMePic",
        insertImageAsBase64URI: true,
        imagesExtensions: ["jpg", "png", "jpeg", "gif"],
        //headers: {"token":`${db.token}`},
        filesVariableName: "files",
        withCredentials: false,
        pathVariableName: "path",
        format: "json",
        method: "POST",
        prepareData: function (formdata: any) {
          let file = formdata.getAll("files[0]")[0];
          console.log(file);
          //formdata.append("createTime", (Date.now() / 1000) | 0);
          formdata.append("aboutMePic", file);
          return formdata;
        },
        isSuccess: function (e: any) {
          console.log(e);
          //console.log("shuju"+e.length);
          return e.data;
        },
        getMessage: function (e: any) {
          return void 0 !== e.data.messages && Array.isArray(e.data.messages)
            ? e.data.messages.join("")
            : "";
        },
        process: function (resp: any) {
          var ss = this;
          console.log(resp);
          var arrfile = [];
          //arrfile.push(resp.data);
          arrfile.unshift(resp.data);
          console.log(arrfile.length + "" + arrfile[0]);
          //this.selection.insertImage(arrfile[0]);
          return {
            files: arrfile, //[this.options.uploader.filesVariableName] || [],
            path: "",
            baseurl: "",
            error: resp.msg,
            msg: resp.msg,
          };
          //return resp.data;
        },
        error: function (e: any) {
          // @ts-ignore
          this.jodit.events.fire("errorMessage", e.message, "error", 4e3);
        },
        defaultHandlerSuccess: function (resp: any) {},
        defaultHandlerError: function (e: any) {
          // @ts-ignore
          this.jodit.events.fire("errorMessage", e.message);
        },
        // @ts-ignore
        contentType: function (e) {
          // @ts-ignore
          return (
            // @ts-ignore
            (void 0 === this.jodit.ownerWindow.FormData ||
              "string" == typeof e) &&
            "application/x-www-form-urlencoded; charset=UTF-8"
          );
        },
      },
    }),
    [placeholder],
  );

  return (
    <JoditEditor
      ref={editor}
      value={content}
      // @ts-ignore
      config={config}
      // @ts-ignore
      tabIndex={1}
      onBlur={(newContent: string) => setContent(newContent)}
      onChange={(newContent: string) => {}}
    />
  );
};
export default Example;
