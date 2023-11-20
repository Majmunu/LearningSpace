export default function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
    return Object.assign(objA, objB);
}
const mergedObj = merge({name: 'Max', hobbies: ['Sports']}, {age: 30});
console.log(mergedObj);

const countAndDescribe = <T extends { length: number }>(element: T): [T, string] => {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';

    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements';

    }
    return [element, descriptionText]
}
console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key]
}

const key = extractAndConvert({name: 'Max'}, 'name')
console.log(222, key)
