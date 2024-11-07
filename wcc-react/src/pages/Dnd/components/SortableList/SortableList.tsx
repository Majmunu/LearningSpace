import React, { useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import type { Active, UniqueIdentifier } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";

import "./SortableList.css";

import { DragHandle, SortableItem, SortableOverlay } from "./components";
import { createRange } from "../../util";

interface BaseItem {
  id: UniqueIdentifier;
}

interface Props<T extends BaseItem> {
  renderItem(item: any): ReactNode;
}

function getMockItems() {
  return createRange(10, (index) => ({ id: index + 1 }));
}

export function SortableList() {
  const [items, setItems] = useState(getMockItems);
  const [active, setActive] = useState<Active | null>(null);
  const activeItem = useMemo(
    () => items.find((item) => item.id === active?.id),
    [active, items],
  );
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );
  const renderItem = (item: any) => (
    <SortableItem id={item.id}>{item.id}</SortableItem>
  );
  return (
    <DndContext
      sensors={sensors}
      onDragStart={({ active }) => {
        setActive(active);
      }}
      onDragEnd={({ active, over }) => {
        console.log("[SortableList]>>>>getMockItems:", active, 111, over);
        if (over && active.id !== over?.id) {
          const activeIndex = items.findIndex(({ id }) => id === active.id);
          const overIndex = items.findIndex(({ id }) => id === over.id);
          setItems(arrayMove(items, activeIndex, overIndex));
        }
        setActive(null);
      }}
      onDragCancel={() => {
        setActive(null);
      }}
    >
      <SortableContext items={items}>
        <ul className="SortableList" role="application">
          {items.map((item) => (
            <React.Fragment key={item.id}>
              <SortableItem id={item.id}>{item.id}</SortableItem>
            </React.Fragment>
          ))}
        </ul>
      </SortableContext>
      {/*<SortableOverlay>*/}
      {/*  {activeItem ? renderItem(activeItem) : null}*/}
      {/*</SortableOverlay>*/}
    </DndContext>
  );
}
