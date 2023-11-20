import { Fragment, useReducer } from "react";
import { Button } from "antd";

const initialState = {
  count: 0,
  draftCount: 0,
};
type Action = {
  type: "minus" | "add";
};

interface ActionWithPayload {
  type: "updateDraftCount";
  payload: number;
}

const reducer = (state = initialState, action: Action | ActionWithPayload) => {
  const { count, draftCount } = state;
  console.log(draftCount);
  if (action.type === "minus") {
    const newCount = count - 1;
    return { count: newCount, draftCount: newCount };
  }
  if (action.type === "add") {
    const newCount = count + 1;
    return { count: newCount, draftCount: newCount };
  }
};

//用于构造一个含有Type函数的返回值的类型。
// type ReducerState = ReturnType<typeof reducer>
export const TSCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Fragment>
      <h3>{state!.count}</h3>
      <h3>{state!.draftCount}</h3>
      <Button type="primary" block onClick={(e) => dispatch({ type: "add" })}>
        +1
      </Button>
      <Button type="primary" block onClick={(e) => dispatch({ type: "minus" })}>
        -1
      </Button>
    </Fragment>
  );
};