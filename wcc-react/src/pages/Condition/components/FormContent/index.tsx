import React, { Fragment, useEffect, useRef, useState } from "react";
import { Button, Form, FormInstance, Input, Select } from "antd";
import styles from "./styles.module.less";

interface ButtonsProps {
  handleForm: (value: any) => void;
  form: any;
  show: any;
}

const options = [
  { value: "text", label: "文本值" },
  { value: "variable", label: "变量值" },
  { value: "variableLength", label: "变量值长度" },
  { value: "elementText", label: "元件文本" },
];
const elementOptions = [
  { value: "currentElement", label: "当前组件" },
  { value: "other", label: "其他组件" },
];
const operatorOptions = [
  { value: "equality", label: "==" },
  { value: "unequal", label: "≠" },
  { value: "include", label: "包含" },
  { value: "exclusive", label: "不包含" },
];
const FormContent: React.FC<ButtonsProps> = (props) => {
  const [conditionItems, setConditionItems] = useState([{ id: 1 }]); // 初始一个条件项
  const [formValue, setFormValue] = useState<any>([]);
  const [valueMark, setValueMark] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const echoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<FormInstance<any> | null>(null);
  const handleFormValuesChange = (data: any) => {
    console.log("data", data);
    const resultArray = [];

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const subObject = data[key];
        const subArray = [];
        for (const prop in subObject) {
          if (subObject.hasOwnProperty(prop)) {
            const propValue = subObject[prop];
            if (propValue && typeof propValue === "object" && propValue.label) {
              subArray.push(propValue.label);
            } else if (typeof propValue === "string") {
              subArray.push(propValue);
            } else if (propValue === undefined) {
              subArray.push(propValue);
            }
          }
        }
        resultArray.push(subArray);
      }
    }
    console.log(resultArray);
    setFormValue(resultArray);
  };
  useEffect(() => {
    handleFormValuesChange(formRef.current?.getFieldsValue());
  }, [valueMark]);
  //表单区域滚动
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [conditionItems]);
  //回显区域滚动
  useEffect(() => {
    if (echoRef.current) {
      echoRef.current.scrollTop = echoRef.current.scrollHeight;
    }
  }, [formValue]);
  const handleFormFieldsChange = () => {
    setValueMark(!valueMark);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
    props.handleForm(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  // 处理添加条件按钮点击事件
  const handleAddCondition = (id?: any) => {
    setValueMark(!valueMark);
    const newCondition = {
      id: Date.now(), // 使用唯一标识符作为条件的ID
    };
    if (conditionItems.length) {
      const updatedItems = conditionItems.map((item) => {
        if (item.id === id) {
          return [item, newCondition];
        }
        return item;
      });
      setConditionItems(updatedItems.flat());
    } else {
      setConditionItems([newCondition]);
    }
  };
  console.log(1223, formRef.current?.getFieldsValue());

  // 处理删除条件按钮点击事件
  const handleDeleteCondition = (id: any) => {
    setValueMark(!valueMark);
    const updatedItems = conditionItems.filter((item) => item.id !== id);
    setConditionItems(updatedItems);
    if (conditionItems.length === 1) {
      props.show(true);
    }
  };
  return (
    <Fragment>
      <div className={styles["form-box"]}>
        <Form
          form={props.form}
          name="basic"
          style={{ maxWidth: 1162 }}
          // initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          ref={formRef}
          onFieldsChange={handleFormFieldsChange}
        >
          <div className={styles["form-wrapper"]} ref={scrollRef}>
            {conditionItems.map((item) => (
              <Fragment key={item.id}>
                <Form.Item key={item.id}>
                  <div className={styles["form-content"]}>
                    <Form.Item
                      initialValue={{ value: "text", label: "文本值" }}
                      name={[item.id, "leftCondition"]}
                    >
                      <Select
                        labelInValue={true}
                        style={{ width: 240 }}
                        options={options}
                      />
                    </Form.Item>
                    <Form.Item
                      initialValue={{
                        value: "currentElement",
                        label: "当前组件",
                      }}
                      name={[item.id, "leftConditionValue"]}
                    >
                      <Select
                        labelInValue={true}
                        style={{ width: 125 }}
                        options={elementOptions}
                      />
                    </Form.Item>
                    <Form.Item
                      initialValue={{ value: "equality", label: "==" }}
                      style={{ width: 240 }}
                      name={[item.id, "operatorValue"]}
                    >
                      <Select labelInValue={true} options={operatorOptions} />
                    </Form.Item>
                    <Form.Item name={[item.id, "rightCondition"]}>
                      <Select
                        labelInValue={true}
                        style={{ width: 240 }}
                        options={options}
                      />
                    </Form.Item>
                    <Form.Item name={[item.id, "rightConditionValue"]}>
                      <Input style={{ width: 125 }} />
                    </Form.Item>
                    <Button onClick={() => handleDeleteCondition(item.id)}>
                      删除
                    </Button>
                    <Button onClick={() => handleAddCondition(item.id)}>
                      添加
                    </Button>
                  </div>
                </Form.Item>
              </Fragment>
            ))}
            <Button
              type={"primary"}
              style={{ width: 268 }}
              onClick={() =>
                handleAddCondition(
                  conditionItems.length &&
                    conditionItems[conditionItems.length - 1].id,
                )
              }
            >
              添加条件
            </Button>
          </div>
        </Form>
      </div>
      <div className={styles.echo} ref={echoRef}>
        <span className={`${styles.title} ${styles["font-style-14"]}`}>
          条件
        </span>
        <div className={styles["text-wrapper"]}>
          {formValue.length ? (
            <div className={`${styles.title} ${styles["font-style-14"]}`}>
              <span>如果</span>
              <span>{formValue[0][0]}</span>
              <span>与</span>
              <span>{formValue[0][1]}</span>
              <span>{formValue[0][2]}</span>
              <span>{formValue[0][4]}</span>
            </div>
          ) : (
            <Fragment />
          )}

          {formValue.slice(1).map((item: any, index: number) => {
            console.log(item);
            return (
              <div
                key={index}
                className={`${styles["text-also"]} ${styles["font-style-14"]}`}
              >
                <span>并且</span>
                <span>{item[0]}</span>
                <span>与</span>
                <span>{item[1]}</span>
                <span>{item[2]}</span>
                <span>{item[4]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};
export default FormContent;
