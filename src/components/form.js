import React, {useState} from 'react'
import './app.css';

const App = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmitAdd = (e) => {
    e.preventDefault()
    
    props.addTodo({
      id: Math.floor(Math.random() * 100000), 
      value: input,
      isComplete: false
    })
    
    setInput("")
  }

  return (
    <>
      {(!props.edit) ?
        <form className="todoAdd" onSubmit={handleSubmitAdd}>
          <label>Add Todo</label>
          <input id="todoInputAdd" type="text" onChange={handleChange} value={input}></input>
        </form>
      :
        <form onSubmit={() => props.todoEdit(input)}>
          <label>Edit Todo</label>
          <input id="todoInputEdit" type="text" onChange={handleChange} value={input}></input>
        </form>
      }
    </>
  );
}

export default App;
