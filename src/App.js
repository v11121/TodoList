import React from 'react';
import logo from './logo.svg';
import './App.scss';
import TodoList from "./components/TodoList";

function App() {
    return (
        <div className="App">
            <div className="wrap">
                <div className="title">오늘 할 일</div>
                <TodoList />
            </div>
        </div>
    );
}

export default App;
