import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../store/todoList/actions";


const TodoInput = () => {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todoList)
    const [value, setValue] = useState('')

    const handleClick = () => {
        const length = todoList.todos.length;
        dispatch(addTodo(value, 'id'+length))
        setValue('');
    }

    const handleEnter = (e) => {
        if(e.key == 'Enter'){
            handleClick();
        }
    }

    return(
        <div className="addTodo">
            <input type="text" placeholder="검색어 입력하든지 말든지" onChange={(e) => {setValue(e.target.value)}} value={value}
                   onKeyUp={handleEnter}/>
            <button className="add" onClick={handleClick} >추가</button>
        </div>        
    )
}

export default TodoInput;