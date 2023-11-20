// componentsSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ActionInfo {
  action: string;
}

interface EventInfo {
  event: string;
}

interface ComponentInfo {
  id: string;
  selectedEvent: EventInfo | [];
}

interface ComponentsState {
  selectedComponents: ComponentInfo[];
}

const initialState: ComponentsState = {
  selectedComponents: [],
};

const componentsSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    setSelectedComponent: (state, action: PayloadAction<string>) => {
      const componentId = action.payload;
      if (!state.selectedComponents.some((c) => c.id === componentId)) {
        state.selectedComponents.push({
          id: componentId,
          selectedEvent: [],
        });
      }
    },
    setSelectedEvent: (
      state,
      action: PayloadAction<{
        componentId: string;
        event: string;
      }>,
    ) => {
      const { componentId, event } = action.payload;
      const component = state.selectedComponents.find(
        (c) => c.id === componentId,
      );
      if (component) {
        // @ts-ignore
        component.selectedEvent.push({ event });
      }
    },
    setActionToEvent: (
      state,
      action: PayloadAction<{
        componentId: string;
        eventName: string;
        actionName: string;
        args: [];
      }>,
    ) => {
      const { componentId, eventName, actionName, args } = action.payload;

      const targetComponent = state.selectedComponents.find(
        (component) =>
          component.id === componentId &&
          // @ts-ignore
          component.selectedEvent.some((event) => event.event === eventName),
      );
      // 如果找到了目标对象
      if (targetComponent) {
        // 在 selectedEvent 中找到目标 event 对象
        // @ts-ignore
        const targetEventObject = targetComponent.selectedEvent.find(
          // @ts-ignore
          (event) => event.event === eventName,
        );

        // 向 event 对象中的 actions 数组添加新的 action
        if (targetEventObject) {
          if (!targetEventObject.actions) {
            targetEventObject.actions = [];
          }

          targetEventObject.actions.push(actionName, args);
        }
      }
    },

    // removeEventAction: (
    //   state,
    //   action: PayloadAction<{
    //     componentId: string;
    //     event: string;
    //     actionIndex: number;
    //   }>,
    // ) => {
    //   const { componentId, event, actionIndex } = action.payload;
    //   const component = state.selectedComponents.find(
    //     (c) => c.id === componentId,
    //   );
    //   if (component && component.selectedEvent) {
    //     const existingEvent = component.selectedEvent;
    //     const updatedActions = [...existingEvent.actions];
    //     updatedActions.splice(actionIndex, 1);
    //     component.selectedEvent = { ...existingEvent, actions: updatedActions };
    //   }
    // },
    // resetSelection: (state, action: PayloadAction<string>) => {
    //   const componentId = action.payload;
    //   const componentIndex = state.selectedComponents.findIndex(
    //     (c) => c.id === componentId,
    //   );
    //   if (componentIndex !== -1) {
    //     state.selectedComponents.splice(componentIndex, 1);
    //   }
    // },
  },
});

export const {
  setSelectedComponent,
  setSelectedEvent,
  // addEventAction,
  // removeEventAction,
  // resetSelection,
} = componentsSlice.actions;

export default componentsSlice.reducer;
