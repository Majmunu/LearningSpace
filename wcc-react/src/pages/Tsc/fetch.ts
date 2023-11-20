import axios from "axios";
interface  Todo{
    id:number;
    title:string;
    completed:boolean;
}
const url='http://jsonplaceholder.typicode.com/todos/1'
axios.get(url).then(response=>{
    const todo=response.data as Todo;
    console.log(todo)
    const ID=todo.id;
    const title=todo.title;
    const finished=todo.completed;
    console.log(`
    The todo with ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${finished}
    `)
});

//when to use annotations
// 1) Function that returns the 'any' type
const json='{"x":10,"y":20}';
const coordinates={x:10,y:20};
const parsed=JSON.parse(json);
console.log(parsed)
console.log(coordinates)

const add=(a:number,b:number)=>{
    return a+b;
}