//@ts-nocheck
import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Test from "./components/Test";
import MySortableCollapse from "./Test";
import SingleTest from "./Test";

function SortableItem({ id }) {
  const {
    isDragging,
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });
  console.log("[page]>>SortableItem>>attributes:", attributes);
  const style = isDragging
    ? {
        transform: `translate3d(0px, ${transform?.y}px, 0) scaleX(1) scaleY(1)`,
        border: "1px solid red",
        marginTop: "10px",
      }
    : undefined;

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {id}
    </div>
  );
}

function SortableList({ items, setItems }) {
  return (
    <SortableContext items={items} strategy={verticalListSortingStrategy}>
      {items.map((id) => (
        <SortableItem key={id} id={id} />
      ))}
    </SortableContext>
  );
}

export default function App() {
  const [items1, setItems1] = useState(["1", "2", "3"]);
  const [items2, setItems2] = useState(["4", "5", "6"]);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) {
      return;
    }

    if (active.id !== over.id) {
      // Find which list contains the active item
      const activeList = items1.includes(active.id) ? items1 : items2;
      const overList = items1.includes(over.id) ? items1 : items2;
      const setActiveItems = activeList === items1 ? setItems1 : setItems2;
      const setOverItems = overList === items1 ? setItems1 : setItems2;

      // Find the indexes
      const activeIndex = activeList.indexOf(active.id);
      const overIndex = overList.indexOf(over.id);

      // Remove the item from its original list and insert it into the new list
      let newActiveList = [...activeList];
      newActiveList.splice(activeIndex, 1);
      let newOverList = overList === activeList ? newActiveList : [...overList];
      newOverList.splice(overIndex, 0, active.id);

      setActiveItems(newActiveList);
      setOverItems(newOverList);
    }
  };

  return (
    <div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <SortableList items={items1} setItems={setItems1} />
          <SortableList items={items2} setItems={setItems2} />
        </div>
        <MySortableCollapse />
      </DndContext>
      <SingleTest />
    </div>
  );
}
