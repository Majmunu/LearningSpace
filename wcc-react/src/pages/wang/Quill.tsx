import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./quill.css";

export const Quill1 = (props: any) => {
  const [value, setValue] = useState("");
  const ref = useRef<any>();

  const imageHandler = () => {
    console.log(123);
    // console.log(props.number);
  };
  // 富文本编辑配置
  const modules = {
    toolbar: {
      container: [
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image", "video"],
        ["clean"],
        [{ size: ["small", false, "large", "huge"] }],
        [{ color: [] }, { background: [] }],
        [{ lineheight: ["1", "1.5", "1.75", "2", "3", "4", "5"] }], // 自定义行高
        ["blockquote", "code-block"],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ direction: "rtl" }], // text direction
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],

        ["clean"], // remove formatting button
      ],
      handlers: {
        image: imageHandler,
        lineheight: (value: any) => {
          // 自定义行高
          if (value) {
            let quill = ref.current.getEditor();
            quill.format("lineHeight", value);
          }
        },
      },
    },
  };
  const handleChangeValue = (value: string) => {
    console.log("富文本的值：", value);
    setValue(value);
  };

  return (
    <div>
      <ReactQuill
        ref={ref}
        modules={modules}
        theme="snow"
        value={value}
        onChange={handleChangeValue}
      />
      {/*<div className="editor-area"></div>*/}
      {/*</ReactQuill>*/}
    </div>
  );
};
// import React, { useState, useRef } from "react";
// // @ts-ignore
// import ReactQuill, { Quill } from "react-quill";
// import "react-quill/dist/quill.snow.css";
//
// interface ImageUploadProps {
//   // @ts-ignore
//   quill?: any;
// }
//
// // @ts-ignore
// const Quill1: any = ({ quill }) => {
//   const [editorHtml, setEditorHtml] = useState<string>("");
//   const modules = {
//     toolbar: {
//       container: [
//         ["bold", "italic", "underline", "strike"],
//         ["link"],
//         [{ header: "1" }, { header: "2" }],
//         [{ list: "ordered" }, { list: "bullet" }],
//         ["image"],
//       ],
//       handlers: {
//         image: handleImageUpload,
//       },
//     },
//   };
//   const formats = [
//     "bold",
//     "italic",
//     "underline",
//     "strike",
//     "link",
//     "header",
//     "list",
//     "image",
//   ];
//
//   function handleImageUpload() {
//     const input = document.createElement("input");
//     input.setAttribute("type", "file");
//     input.setAttribute("accept", "image/*");
//     input.click();
//     input.onchange = async () => {
//       const file = input.files?.[0];
//       if (file) {
//         const formData = new FormData();
//         formData.append("image", file);
//         // 替换成您的图片上传后端服务的URL
//         const response = await fetch("/your-image-upload-endpoint", {
//           method: "POST",
//           body: formData,
//         });
//         if (response.ok) {
//           const imageURL = await response.text();
//           if (quill) {
//             const range = quill.getSelection();
//             if (range) {
//               quill.insertEmbed(range.index, "image", imageURL);
//             }
//           }
//         } else {
//           console.error("上传图片失败");
//         }
//       }
//     };
//   }
//
//   return (
//     <div>
//       <ReactQuill
//         value={editorHtml}
//         onChange={setEditorHtml}
//         modules={modules}
//         formats={formats}
//       />
//     </div>
//   );
// };
// export default Quill1;

// import { observer, useLocalObservable } from "mobx-react";
