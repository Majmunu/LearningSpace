import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./quill.css";
import { Axios } from "axios";

export const Quill1 = (props) => {
  const [value, setValue] = useState("");
  const ref = useRef();

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.setAttribute("multiple", "multiple");
    input.click();
    const that = this;
    input.onchange = async () => {
      Array.from(input.files).forEach((item) => {
        console.log(input.files);
        let quill = that.reactQuillRef.getEditor(); //获取到编辑器本身
        const cursorPosition = quill.getSelection().index; //获取当前光标位置
        const link = "https://img-home.csdnimg.cn/images/20230911022058.png";
        quill.insertEmbed(cursorPosition, "image", link); //插入图片
        quill.setSelection(cursorPosition + 1); //光标位置加1
        // 业务需求安装了压缩图片的插件，可忽略
        // new Compressor(item, {
        //   quality: 0.8,
        //   convertSize: 1024 * 1024 * 8,
        //   success(result) {
        //     //很很很很重要的一步
        //     const formData = new FormData();
        //     formData.append("file", result, result.name);
        //     Axios({
        //       method: "post",
        //       data: formData,
        //       // url: config.RES_URL + "123", //图片上传的接口
        //     }).then((res) => {
        //       if (res.data.success) {
        //         let quill = that.reactQuillRef.getEditor(); //获取到编辑器本身
        //         const cursorPosition = quill.getSelection().index; //获取当前光标位置
        //         const link = 'https://img-home.csdnimg.cn/images/20230911022058.png';
        //         quill.insertEmbed(cursorPosition, "image", link); //插入图片
        //         quill.setSelection(cursorPosition + 1); //光标位置加1
        //       }
        //     });
        //   },
        // });
      });
    };
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
        // lineheight: (value) => {
        //   // 自定义行高
        //   if (value) {
        //     let quill = ref.current.getEditor();
        //     quill.format("lineHeight", value);
        //   }
        // },
      },
    },
  };
  const handleChangeValue = (value) => {
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
