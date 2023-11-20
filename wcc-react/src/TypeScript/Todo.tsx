import React, {useState} from "react";
import TodoList from "./TodoList";
import NewTodo from "./NewTodo";
import {Todo} from "./todo.module";
import Practice from "./practice";


function TodoPage() {
    const todosInitialValue = [{id: 't1', text: 'Finish this course'}]
    const [todos, setTodos] = useState<Todo[]>(todosInitialValue);
    const todoAddHandler = (value: string) => {
        console.log(value)
        setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text: value}])
        console.log(todos)
    }
    const todoDeleteHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== todoId)
        })
    }
    return (
        <div className="App">
            <h1>HELLO WORD</h1>
            <NewTodo onAddTodo={todoAddHandler}/>
            <TodoList delete={todoDeleteHandler} items={todos}/>
            <Practice/>
        </div>
    );
}

export default TodoPage;