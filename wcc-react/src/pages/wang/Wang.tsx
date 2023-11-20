import "@wangeditor/editor/dist/css/style.css"; // 引入 css

import React, { useState, useEffect } from "react";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import { IDomEditor, IEditorConfig, IToolbarConfig } from "@wangeditor/editor";
import { useUpdateEffect } from "ahooks";
import "./wang.css";

interface MyEditorProps {
  number1: number;
}

type InsertFnType = (url: string, alt: string, href: string) => void;
const MyEditor = (props: MyEditorProps) => {
  // editor 实例
  console.log("props.number1", props.number1);
  const [editor, setEditor] = useState<IDomEditor | null>(null); // TS 语法
  // const [editor, setEditor] = useState(null)                   // JS 语法
  const [temp, setTemp] = useState(2048);
  // 编辑器内容
  const [html, setHtml] = useState("<p>hello</p>");
  const [key, setKey] = useState(1);

  useEffect(() => {
    setTemp(props.number1);
  }, [props.number1]);
  // 模拟 ajax 请求，异步设置 html
  useEffect(() => {
    setKey(key + 1);
  }, [props.number1]);

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {}; // TS 语法
  // const toolbarConfig = { }                        // JS 语法

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    MENU_CONF: {},
    placeholder: "请输入内容...",
  };
  editorConfig.onCreated = (editor: IDomEditor) => {
    // TS 语法
    console.log(111, props);
    console.log(333, temp);
  };
  editorConfig.onBlur = (editor: IDomEditor) => {
    // TS 语法
    // editorConfig.onBlur = (editor) => {            // JS 语法
    // editor blur
    console.log(222, props);
    console.log(333, temp);
  };
  editorConfig.onChange = (editor: IDomEditor) => {
    // TS 语法
    // editorConfig.onChange = (editor) => {            // JS 语法
    // editor changed
    console.log(222, props);
    console.log(333, temp);
  };
  // @ts-ignore
  editorConfig.MENU_CONF["uploadImage"] = {
    // form-data fieldName ，默认值 'wangeditor-uploaded-image'
    fieldName: "your-custom-name",
    server: "/api/upload",

    // 单个文件的最大体积限制，默认为 2M
    maxFileSize: temp * 1024, // 1M

    // 最多可上传几个文件，默认为 100
    maxNumberOfFiles: 10,

    // 选择文件时的类型限制，默认为 ['image/*'] 。如不想限制，则设置为 []
    allowedFileTypes: ["image/*"],

    // 自定义上传参数，例如传递验证的 token 等。参数会被添加到 formData 中，一起上传到服务端。
    meta: {
      token: "xxx",
      otherKey: "yyy",
    },

    // 将 meta 拼接到 url 参数中，默认 false
    metaWithUrl: false,

    // 自定义增加 http  header
    headers: {
      Accept: "text/x-json",
      otherKey: "xxx",
    },

    // 跨域是否传递 cookie ，默认为 false
    withCredentials: true,

    // 超时时间，默认为 10 秒
    timeout: 5 * 1000, // 5 秒

    // 上传之前触发
    onBeforeUpload(file: File) {
      // TS 语法
      // onBeforeUpload(file) {    // JS 语法
      // file 选中的文件，格式如 { key: file }
      console.log(111, file);
      console.log(222, props.number1);
      return file;

      // 可以 return
      // 1. return file 或者 new 一个 file ，接下来将上传
      // 2. return false ，不上传这个 file
    },

    // 上传进度的回调函数
    onProgress(progress: number) {
      // TS 语法
      // onProgress(progress) {       // JS 语法
      // progress 是 0-100 的数字
      console.log("progress", progress);
    },

    // 单个文件上传成功之后
    onSuccess(file: File, res: any) {
      // TS 语法
      // onSuccess(file, res) {          // JS 语法
      console.log(`${file.name} 上传成功`, res);
    },

    // 单个文件上传失败
    onFailed(file: File, res: any) {
      // TS 语法
      // onFailed(file, res) {           // JS 语法
      console.log(`${file.name} 上传失败`, res);
    },

    // 上传错误，或者触发 timeout 超时
    onError(file: File, err: any, res: any) {
      // TS 语法
      // onError(file, err, res) {               // JS 语法
      console.log(`${file.name} 上传出错`, err, res);
    },
  };

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor, props.number1]);

  return (
    <>
      <div style={{ border: "1px solid #ccc", zIndex: 100 }}>
        <Toolbar
          className={"bar"}
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          style={{
            borderBottom: "1px solid #ccc",
            backgroundColor: "#572424",
          }}
        />
        <Editor
          className={"test"}
          key={key}
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={(editor) => setHtml(editor.getHtml())}
          mode="default"
          style={{
            height: "500px",
            overflowY: "hidden",
            // backgroundColor: "#800000",
          }}
        />
      </div>
      <div style={{ marginTop: "15px" }}>{html}</div>
    </>
  );
};

export default MyEditor;
