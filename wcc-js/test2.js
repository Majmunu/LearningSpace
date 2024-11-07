// // const current = [
// //   { fnName: "setSelected", aid: "123", cid: 222 },
// //   {
// //     condition: [
// //       { cid: 222, event: "click", name: "情形1" },
// //       { cid: 13132, event: "click", name: "情形2" },
// //     ],
// //   },
// // ];
// // const target = [
// //   { fnName: "setSelected", aid: "123", cid: 123 },
// //   { fnName: "setText", aid: "123", cid: 231 },
// //   {
// //     condition: [
// //       { cid: 123, event: "click", name: "情形1" },
// //       { cid: 231, event: "click", name: "情形2" },
// //     ],
// //   },
// // ];
// //
// // function mergeArraysAndUpdateIds(current, target) {
// //   let result = [];
// //   let cidMap = new Map(); // 用于存储原cid到新cid的映射
// //
// //   // 生成基于时间戳和随机数的唯一cid或aid
// //   const generateUniqueId = () => {
// //     return `${Date.now()}${Math.random().toString(36).slice(2, 9)}`;
// //   };
// //
// //   // 更新cid和aid，返回新对象
// //   const updateIds = (item) => {
// //     const newCidValue = generateUniqueId();
// //     const newAidValue = generateUniqueId();
// //     cidMap.set(item.cid, newCidValue);
// //     return { ...item, cid: newCidValue, aid: newAidValue };
// //   };
// //
// //   // 处理非condition对象
// //   current.concat(target).forEach((item) => {
// //     if (!item.condition) {
// //       result.push(updateIds(item));
// //     }
// //   });
// //
// //   // 更新condition中的cid
// //   const updateConditionCids = (condition) =>
// //     condition.map((condItem) => ({
// //       ...condItem,
// //       // 使用映射更新cid，如果未映射则生成新的cid，这里主要是为了处理condition数组
// //       cid: cidMap.get(condItem.cid) || generateUniqueId(),
// //     }));
// //
// //   // 合并condition数组，如果存在
// //   const currentCondition = current.find((item) => item.condition);
// //   const targetCondition = target.find((item) => item.condition);
// //
// //   if (currentCondition && targetCondition) {
// //     // 如果两个数组都有condition，合并并更新cid
// //     result.push({
// //       condition: updateConditionCids([
// //         ...currentCondition.condition,
// //         ...targetCondition.condition,
// //       ]),
// //     });
// //   } else if (currentCondition) {
// //     result.push({ condition: updateConditionCids(currentCondition.condition) });
// //   } else if (targetCondition) {
// //     result.push({ condition: updateConditionCids(targetCondition.condition) });
// //   }
// //
// //   return result;
// // }
// //
// // // 使用更新后的函数合并current和target数组，并为cid和aid生成唯一值
// // const mergedArrayWithUniqueIds = mergeArraysAndUpdateIds(current, target);
// // console.log(mergedArrayWithUniqueIds);
//
// // const moonlightObjects = [
// //   { name: "Luna", detail: "Something about Luna." },
// //   { name: "Phoebe", detail: "Something about Phoebe." },
// //   { name: "Luna", detail: "Another thing about Luna." },
// //   { name: "Artemis", detail: "Something about Artemis." },
// // ];
// //
// // const uniqueNames = [...new Set(moonlightObjects.map((obj) => obj.name))];
// //
// // console.log(uniqueNames);
// //
// // const test = { a: 1 };
// // console.log(Object.keys(test).length);
//
// // function removeDuplicatesWithCondition(arr) {
// //   const seen = new Map();
// //   const result = [];
// //   arr.forEach((item) => {
// //     if (item.cid && "condition" in item) {
// //       if (!seen.has(item.cid)) {
// //         seen.set(item.cid, item);
// //         result.push(item);
// //       }
// //     } else {
// //       result.push(item);
// //     }
// //   });
// //   return result;
// // }
// //
// // const array = [
// //   { cid: 1, condition: true, name: "A" },
// //   { cid: 1, condition: true, name: "B" },
// //   { cid: 2, condition: false, name: "C" },
// //   { cid: 2, name: "D" },
// //   { cid: 3, name: "E" },
// // ];
// // console.log(removeDuplicatesWithCondition(array));
// //
// // const test = [{ a: 333 }];
// // console.log(test.at(-1).a);
// //
// // const test = [1, 2, 3, 4, 5, 6];
// // test.map((item) => item);
//
// // function deleteArgObject(arr, deleteType, deleteId) {
// //   // 遍历数组中的每个对象
// //   arr.forEach((obj) => {
// //     // 检查对象是否符合要删除的类型和ID
// //     if (obj.type === deleteType) {
// //       obj.arg = obj.arg.filter((arg) => arg.id !== deleteId);
// //     }
// //   });
// //
// //   return arr;
// // }
// //
// // // 示例用法
// // let data = [
// //   { arg: [{ id: 123 }, { id: 222 }], type: "show" },
// //   { arg: [{ id: 333 }, { id: 222111 }], type: "move" },
// // ];
// //
// // data = deleteArgObject(data, "show", 123);
// // console.log(data);
// //
// // const test = {
// //   name: "组件名",
// //   value: { label: "", value: "" },
// //   fields: children,
// // };
//
// const arr = [
//   { id: 1, name: "红", age: 20 },
//   { id: 2, name: "黄" },
//   { id: 3, name: "蓝", age: 30 },
// ];
//
// //找出没有的
// const test = arr.map((item) => {
//   if (!item.hasOwnProperty("age")) {
//     return { process: item.hasOwnProperty("age"), id: item.id };
//   }
// });
// //判断是否有一个有
// const test1 = arr.some((item) => {
//   return item.hasOwnProperty("age");
// });
// //判断是否全部有
// const test2 = arr.every((item) => {
//   return item.hasOwnProperty("age");
// });
// console.log("[test2]>>>>test:", test, 111, test1, 222, test2);
// vars = "";
// let arr = vars?.path ? vars.path : [];
// arr[0] = 1;
// console.log(arr);

const updateCid = (items, cidMap) => {
    items.forEach((item) => {
        // 如果当前对象的 cid 需要更新，则更新为新的 cid
        if (item.cid !== undefined) {
            if (!cidMap.has(item.cid)) {
                // 为当前 cid 分配一个新的 cid
                cidMap.set(item.cid, cidMap.size + 1000); // 从 1000 开始分配新的 cid
            }
            item.cid = cidMap.get(item.cid);
        }
        if (item.condition && Array.isArray(item.condition)) {
            updateCid(item.condition, cidMap);
        }
    });
};
const data = [
    {name: "test1", cid: 111},
    {name: "test2", cid: 22},
    {
        name: "test3",
        cid: 33,
    },
    {condootion: [{cid: 111}, {cid: 222}, {cid: 333}]},
];
const cidMap = new Map();
updateCid(data, cidMap);
console.log("[test2]>>>>data:", data);

const test1 = data["some"](item => {
    return item.id === 111
})
//function
console.log('[test2]>>>>test1:', test1)
function f() {
    console.log(f)
}