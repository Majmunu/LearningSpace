import React, {PropsWithChildren} from "react";
// import _ from 'lodash'

// console.log(_.shuffle([1, 2, 3]))

//定义props接受数据类型
interface TodoListProps {
    items: {
        id: string,
        text: string
    }[],
    delete: (todoId: string) => void
}

const TodoList: React.FC<TodoListProps> = (props) => {

    const {items: todo} = props
    return (
        <div>
            <ul>
                {todo.map((todo) => <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={props.delete.bind(null, todo.id)}>delete</button>
                </li>)}
            </ul>
        </div>)
}
export default TodoList