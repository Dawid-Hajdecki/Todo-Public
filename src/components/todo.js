import React, {useState} from 'react';

import Form from './form';
import './app.css';

const Todo = (props) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    const todoEdit = (value) => {
        props.todoEdit({
            id: edit.id,
            value: value
        })
        setEdit({
            id: null,
            value: ''
        })
    }
    if(edit.id){
        return <Form edit={edit} todoEdit={todoEdit}/>
    }
    
    return props.todoList.map((e, index) => {
        return(
            <div key={index} className={e.isComplete ? 'todo todoCompleted' : 'todo'}>
                <div id={"div" + index} onClick={() => props.todoCompleted(e.id)} className="cursorPointer">{e.value} </div>
                <button onClick={() => setEdit({ id: e.id, value: e.value})}>Edit</button>
                <button onClick={() => props.deleteTodo(e.id)} >Delete</button><br/>
            </div>
        )
    })
}

export default Todo
