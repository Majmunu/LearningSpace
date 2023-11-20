// const events = [
//     {
//         onSelect: {
//             en: "onSelect",
//             cn: "选择事件",
//             desc: "树节点选中时触发的事件",
//             type: "function(selectedKeys: string[], info: { selected: boolean, selectedNodes, node })"
//         },
//     },
//     {
//         onChange: {
//             en: "onChange",
//             cn: "改变事件",
//             desc: "树节点改变时触发的事件",
//             type: "function(selectedKeys: string[], info: { selected: boolean, selectedNodes, node })"
//         }
//     }
// ];
// // 遍历数组并提取每个事件对象中的 "cn" 值
// events.forEach(event => {
//     const eventKeys = Object.keys(event);
//     eventKeys.forEach(key => {
//         const cnValue = event[key].cn;
//         console.log(cnValue);
//     });
// });
const data = [
    { keys: 'ids', value: [1, 2, 3, 4, 5] },
    { keys: 'ids', value: [
            { name: 'haha', age: '22' },
            { name: 'hah2a', age: '222' },
            { name: 'ha3ha', age: '232' },
            { name: 'ha2ha', age: '232' },
            { name: 'ha4ha', age: '225' }
        ]}
];

function transformData(inputData) {
    const result = [];

    for (const item of inputData) {
        if (item.keys === 'ids' && Array.isArray(item.value)) {
            for (let i = 0; i < item.value.length; i++) {
                if (typeof item.value[i] === 'object') {
                    const id = i < inputData[0].value.length ? inputData[0].value[i] : null;
                    const { name, age } = item.value[i];
                    if (name && age) {
                        result.push({ id, name, age });
                    }
                }
            }
        }
    }

    return result;
}

try {
    const transformedData = transformData(data);
    console.log(transformedData);
} catch (error) {
    console.error("An error occurred:", error.message);