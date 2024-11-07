// @ts-nocheck
import { DndContext } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

export default function SingleTest() {
  const [items, setItems] = useState({
    A: ["A1", "A2", "A3"],
    B: ["B1", "B2", "B3"],
  });

  // 找到容器
  function findContaniner(id: string) {
    if (id in items) {
      return id;
    }
    return Object.keys(items).find((key) =>
      // @ts-ignore
      items[key].find((item: string) => item === id),
    );
  }

  // 设置从一个容器到另一个容器时候的变化
  function dragMoveEvent(props: any) {
    const { active, over } = props;
    const overId = over?.id;
    if (!overId) return;
    const activeContainer = findContaniner(active?.id) || "";
    const overContainer = findContaniner(over?.id) || "";
    const dragItem = active.id;

    if (!overContainer || !activeContainer) {
      return;
    }

    // 将activeContainer里删除拖拽元素，在overContainer中添加拖拽元素
    if (activeContainer !== overContainer) {
      const overIndex = items[overContainer].indexOf(over.id);
      const newIndex =
        overIndex >= 0 ? overIndex : items[overContainer].length + 1;
      const data = {
        ...items,
        [activeContainer]: items[activeContainer].filter((item: string) => {
          return item !== active.id;
        }),
        [overContainer]: [
          ...items[overContainer].slice(0, newIndex),
          dragItem,
          ...items[overContainer].slice(newIndex, items[overContainer].length),
        ],
      };
      setItems(data);
    }
  }

  // 设置移动结束后时候的改变
  const dragEndFn = (props: any) => {
    const { over, active } = props;
    const overId = over?.id;
    const activeId = active?.id;
    const activeContainer = findContaniner(activeId) || "";
    const overContainer = findContaniner(overId) || "";
    const activeItems = items[activeContainer];
    const overItems = items[overContainer];

    if (!activeContainer) return;
    if (!overId) return;

    if (overContainer) {
      const overIndex = overItems.findIndex((item: string) => item === overId);
      const activeIndex = activeItems.findIndex(
        (item: string) => item === activeId,
      );

      if (activeIndex !== overIndex) {
        setItems((items) => ({
          ...items,
          [overContainer]: arrayMove(overItems, activeIndex, overIndex),
        }));
      }
    }
  };

  return (
    <DndContext onDragMove={dragMoveEvent} onDragEnd={dragEndFn}>
      <SortableContext items={items["A"]}>
        {items["A"].map((val) => (
          <Item id={val} key={val} />
        ))}
      </SortableContext>
      <div>--------------------------------------------</div>
      <SortableContext items={items["B"]}>
        {items["B"].map((val) => (
          <Item id={val} key={val} />
        ))}
      </SortableContext>
    </DndContext>
  );
}

function Item(props: any) {
  const { id } = props;
  const { setNodeRef, listeners, transform, transition } = useSortable({ id });
  const styles = {
    transform: CSS.Transform.toString(transform),
    border: "1px solid red",
    marginTop: "10px",
  };

  return (
    <div ref={setNodeRef} {...listeners} style={styles}>
      {id}
    </div>
  );
}
