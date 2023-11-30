// // const data = {
// //   1: {
// //     leftCondition: {
// //       label: "变量值",
// //       value: "variable",
// //       key: "variable",
// //     },
// //     leftConditionValue: {
// //       label: "其他组件",
// //       value: "other",
// //       key: "other",
// //     },
// //     operatorValue: undefined,
// //     rightCondition: undefined,
// //     rightConditionValue: 123,
// //   },
// //   1698832135621: {
// //     leftCondition: {
// //       label: "元件文本",
// //       value: "elementText",
// //       key: "elementText",
// //     },
// //     leftConditionValue: {
// //       label: "当前组件",
// //       value: "currentElement",
// //       key: "currentElement",
// //     },
// //     operatorValue: {
// //       label: "≠",
// //       value: "unequal",
// //       key: "unequal",
// //     },
// //     rightCondition: undefined,
// //     rightConditionValue: 2,
// //   },
// // };
// //
// // // const labelRightConditionArrays = [];
// // // for (const key in data) {
// // //   if (data.hasOwnProperty(key)) {
// // //     const subObject = data[key];
// // //     const subArray = [];
// // //     for (const prop in subObject) {
// // //       if (subObject.hasOwnProperty(prop)) {
// // //         const propValue = subObject[prop];
// // //         if (propValue && propValue.label) {
// // //           subArray.push(propValue.label);
// // //         }
// // //         if (propValue && propValue.rightConditionValue) {
// // //           subArray.push(propValue.rightConditionValue);
// // //         }
// // //       }
// // //     }
// // //     labelRightConditionArrays.push(subArray);
// // //   }
// // // }
// // // console.log(labelRightConditionArrays);
// // const labelRightConditionArrays = [];
// // for (const key in data) {
// //   if (data.hasOwnProperty(key)) {
// //     const subObject = data[key];
// //     const subArray = [];
// //     for (const prop in subObject) {
// //       if (subObject.hasOwnProperty(prop)) {
// //         const propValue = subObject[prop];
// //         console.log(propValue);
// //         if (propValue && propValue.label) {
// //           subArray.push(propValue.label);
// //         }
// //         if (propValue && propValue.rightConditionValue) {
// //           subArray.push(propValue.rightConditionValue);
// //         }
// //       }
// //     }
// //     labelRightConditionArrays.push(subArray);
// //   }
// // }
// // console.log(labelRightConditionArrays);
// // const test = { 1: { value: 123 }, 2: { value: 222 } };
// // console.log(Object.values(test));
//
// const myArr = [
//   { id: 1, name: "vue" },
//   { id: 2, name: "react" },
// ];
// const item1 = { id: 2, name: "react" };
// const findIndex = (item1) => {
//   return myArr.findIndex((item) => item.id === item1.id);
// };
//
// console.log(findIndex(item1));
//
// // const test = {
// //   name: 123,
// //   children: 322,
// //   from: "123",
// // };
// // const { children, ...test123 } = test;
// // console.log(test123);
// const test = [{ name: 123, children: 322, from: "123" }];
// const a = [{ name: 2223, children: 3322, from: "1213" }];
// const test123 = test.concat(...a);
// console.log(123, test123);
//
// const test1 = [
//   {
//     children: [
//       { id: 123, name: 1 },
//       { id: 1223, name: 2 },
//     ],
//     name: "first",
//   },
//   {
//     children: [
//       { id: 123, name: 1 },
//       { id: 1223, name: 2 },
//     ],
//     name: "first1",
//   },
//   {
//     children: [
//       { id: 123, name: 1 },
//       { id: 1223, name: 2 },
//     ],
//     name: "first2",
//   },
// ];
// const new1 = test1.map((item) => {
//   const test2 = item.children.map((item) => {
//     return { value: item.id, label: item.name };
//   });
//   return { label: item.name, options: test2 };
// });
// console.log(new1[0].options);

// function createEventMap(id, events, actions, args) {
//   const eventMapItem = {
//     id,
//     events,
//   };
//   const event = {
//     actions,
//   };
//   const action = {
//     args,
//   };
//   event.actions.push(action);
//   eventMapItem.events.push(event);
//   return [eventMapItem];
// }
//
// // Example usage:
// const id = "1";
// const events = [{ name: "click" }];
// const actions = [{ name: "setPos" }];
// const args = [1, 2, [3, 4]];
// const result = createEventMap(id, events, actions, args);
// console.log(result);
// const test = {
//   id: {
//     click: [
//       {
//         actionName: "setTest",
//         actionsArgs: [{ text: "hello word" }, { time: 200 }],
//       },
//       {
//         actionName: "setImage",
//         actionsArgs: [{ image: "123" }, { time: 500 }],
//       },
//     ],
//     doubleClick: {},
//   },
// };

// const test = [
//   { name: "onClick", label: "点击" },
//   { name: "onDoubleClick", label: "双击" },
//   { name: "onChange", label: "改变" },
// ];
// const log = test.some((obj) => obj.name === "onClick");
// console.log(log);

// const test = { 1: [{ name: 123 }] };
// const log = test[1][0];
// console.log(log);

// const test = [{ name: 123 }, { name: 456 }];
// test[0].push("123");
// console.log(...test);

const test = {
  1: [
    {
      name: "click",
      labelL: "单机",
      actions: [{ name: "openLink", label: "打开链接" }],
    },
  ],
};
const addObjectToActions = (id, name, actionName, args) => {
  if (test[id]) {
    const foundObject = test[id].find((obj) => obj.name === name);
    if (foundObject) {
      const foundAction = foundObject.actions.find(
        (action) => action.name === actionName,
      );
      if (foundAction) {
        foundAction.args = args;
      }
    }
  }
};

// 例子：给 id 为 1，name 为 "click"，actions 中 name 为 "openLink" 的对象添加 args
addObjectToActions(1, "click", "openLink", { arg1: "value1", arg2: "value2" });

// 输出修改后的 test 对象
console.log(test);
