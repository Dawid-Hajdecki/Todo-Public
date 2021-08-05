import React, {useState} from 'react'
import './app.css';

import Form from './form'
import Todo from './todo'

const App = () => {
    const [todoList, setTodoList] = useState([])
    const addTodo = (ele) => {
        if(ele.length !== 0) {
            setTodoList([ele, ...todoList])
        }
    }
    const deleteTodo = (id) => {
        const newArr = [...todoList]
        newArr.forEach((ele, index) => {ele.id === id && newArr.splice(index,1)})

        setTodoList(newArr);
    }
    const todoCompleted = (id) => {
        const newArr = [...todoList]
        newArr.forEach((ele) => {ele.id === id && (ele.isComplete = !ele.isComplete)})

        setTodoList(newArr);
        
    }
    const todoEdit = (todo) => {
        const newArr = [...todoList]
        newArr.forEach((ele) => ele.id === todo.id && (ele.value = todo.value))

        setTodoList(newArr);
    }

    return (
        <div className="container">
            <div className="app">
                <Form addTodo={addTodo}/>
                <div className="todoList">
                    <Todo todoList={todoList} deleteTodo={deleteTodo} todoCompleted={todoCompleted} todoEdit={todoEdit}/>
                </div>
            </div>
        </div>
    )
}

export default App
