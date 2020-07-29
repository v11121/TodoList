import React from "react";
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";

const Todos = () => {
    const todoList = useSelector((state) => state.todoList)

    const pinEle = todoList.pins.map((pin, index) => (
        <TodoItem key={index} index={index} todo={pin} pin='pin-on'/>
    ));

    const todoEle = todoList.todos.map((todo, index) => (
        <TodoItem key={index} index={index+todoList.pins.length} todo={todo} pin='pin-off'/>
    ));
    return (
        <ul>
            {pinEle}
            {todoEle}
        </ul>
    )
}

export default Todos;