import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPin, removePin, removeTodo} from "../store/todoList/actions";

const TodoItem = ({todo, index, pin}) => {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todoList);

    const handleRemove = (id) => {
        dispatch(removeTodo(id))
    }

    const handlePin = (id) => {
        if(pin === 'pin-off'){
            dispatch(addPin(id))
        }else{
            dispatch(removePin(id))
        }
    }

    useEffect(() => {

    }, [])

    return (
        <>
            <li className={`${pin}`}>
                <div className="num">{index+1}</div>
                <button className="cancel" onClick={() => handleRemove(todo.id)} >-</button>
                <button className="pin" onClick={() => handlePin(todo.id)}>핀
                </button>
                <span>{todo.text}<br/>{todo.id}</span>
            </li>
        </>
    )
}

export default TodoItem;