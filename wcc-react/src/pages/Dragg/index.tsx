import { NavLink } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { Row, Col, Select, ConfigProvider, Input } from "antd";
import "./style.less";
import styles from "./styles.module.less";

const DragAndDropList: React.FunctionComponent = () => {
  /* 随机生成应用列表 */
  const getAppList = () => {
    const tempArr: any[] = [];
    for (let index = 1; index < 10; index++) {
      tempArr.push({
        id: index,
        name: `应用${index}`,
        backgroundColor: getRandomColor(),
      });
    }
    return tempArr;
  };

  /* 随机生成背景颜色 */
  const getRandomColor = () => {
    let letter = `0123456789ABCDEF`;
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // 应用列表
  const [list, setList] = useState<any[]>([]);

  // 当前拖拽对象
  const [oldDragItem, setOldDrageItem] = useState<any>();

  // 拖拽交换对象
  const [newDragItem, setNewDragItem] = useState<any>();

  // 是否拖拽进行
  const [isEnter, setIsEnter] = useState<any>();

  // 是否拖拽
  const [isActive, setIsActive] = useState<any>();

  /* 拖拽开始 */
  const onDragStart = (value: any) => {
    setOldDrageItem(value);
    setIsActive(value.id);
  };

  /* 拖拽进行 */
  const onDragEnter = (value: any) => {
    setIsEnter(value.id);
    setNewDragItem(value);
  };

  /* 拖拽结束 */
  const onDragEnd = () => {
    if (oldDragItem != newDragItem) {
      const oldIndex = list.indexOf(oldDragItem); //获取当前对象所在数组坐标
      const newIndex = list.indexOf(newDragItem); //获取当前目标对象所在数组坐标
      const newArray = [...list];
      newArray.splice(oldIndex, 1); //删除老节点
      newArray.splice(newIndex, 0, oldDragItem); //增加新节点
      setList(newArray); //保存拖拽后的数组
      setIsActive(-1); //重置状态
      setIsEnter(-1);
    }
  };
  console.log(111, oldDragItem, 222, newDragItem);
  useEffect(() => {
    document.addEventListener("dragover", function (event) {
      //阻止事件的默认行为
      event.preventDefault();
      //设置拖拽时鼠标样式
      event.dataTransfer!.dropEffect = "move";
    });
    // 赋值列表
    setList(getAppList());
  }, []);

  return (
    <div>
      <Row className="list">
        {list?.map((item: any) => (
          <Col
            style={{
              backgroundColor: item.backgroundColor,
            }}
            className={
              oldDragItem == item && isActive == item.id
                ? "active item"
                : newDragItem == item && isEnter == item.id
                ? "enter item"
                : "item"
            }
            key={item.id}
            draggable={true}
            onDragStart={() => {
              onDragStart(item);
            }}
            onDragEnter={() => {
              onDragEnter(item);
            }}
            onDragEnd={() => {
              onDragEnd();
            }}
          >
            {item.name}
          </Col>
        ))}
      </Row>

      <ConfigProvider
        theme={{
          components: {
            Select: {
              /* 这里是你的组件 token */
              // optionSelectedBg: "#142b9e",
              // optionActiveBg: "#d41b5f",
            },
          },
        }}
      >
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          open={true}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />
        <Input placeholder="Borderless" />
      </ConfigProvider>
    </div>
  );
};

export default DragAndDropList;
