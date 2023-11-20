// class Component {
//   constructor(name) {
//     this.name = name;
//     this.events = [];
//   }
//
//   addEvent(event) {
//     this.events.push(event);
//   }
//
//   removeEvent(event) {
//     const index = this.events.indexOf(event);
//     if (index !== -1) {
//       this.events.splice(index, 1);
//     }
//   }
// }
//
// // 创建组件对象
// const component1 = new Component('Component 1');
// component1.addEvent('Event A');
// component1.addEvent('Event B');
// component1.addEvent('Common Event 1');
// const component2 = new Component('Component 2');
// component2.addEvent('Event C');
// component2.addEvent('Common Event 1');
// const component3 = new Component('Component 3');
// component3.addEvent('Event X');
// component3.addEvent('Common Event 2');
// // 打印组件和事件信息
// console.log(component1);
// console.log(component2);
// console.log(component3);
// const data = [
//   { keys: 'ids', value: [1, 2, 3, 4, 5] },
//   {
//     keys: 'ids',
//     value: [
//       { name: 'haha', age: '22' },
//       { name: 'hah2a', age: '222' },
//       { name: 'ha3ha', age: '232' },
//       { name: 'ha2ha', age: '232' },
//       { name: 'ha4ha', age: '225' }
//     ]
//   }
// ];

// function transformData(inputData) {
//   const result = [];
//
//   for (const item of inputData) {
//     if (item.keys === 'ids' && Array.isArray(item.value)) {
//       for (let i = 0; i < item.value.length; i++) {
//         if (typeof item.value[i] === 'object') {
//           const id =
//             i < inputData[0].value.length ? inputData[0].value[i] : null;
//           const { name, age } = item.value[i];
//           if (name && age) {
//             result.push({ id, name, age });
//           }
//         }
//       }
//     }
//   }
//
//   return result;
// }
//
// try {
//   const transformedData = transformData(data);
//   console.log(transformedData);
// } catch (error) {
//   console.error('An error occurred:', error.message);
// }

const inputData = [
  { id: 1, name: 'haha', age: '22' },
  { id: 2, name: 'hah2a', age: '222' },
  { id: 3, name: 'ha3ha', age: '232' },
  { id: 4, name: 'ha2ha', age: '232' },
  { id: 5, name: 'ha4ha', age: '225' }
];

const keys = 'ids';
const values = [
  inputData.map(item => item.id),
  inputData.map(item => ({ name: item.name, age: item.age }))
];
console.log(values);
const result = values.map(value => ({ keys, value }));

console.log(result);
