import './App.css';
import {Tasks} from './context/TaskContext';
import React, { useContext, useState } from 'react'
 
function App() {

  const [input, setInput] = useState("");
  const {task, setTask} = useContext(Tasks);
  const [numberOfTask, setNumberOfTask] = useState(0);

  const addTodo = (todo) => {
    const newTodo = {
      todo: todo, complete: false, id: Math.random()
    }

    if (todo.length < 1) {
      return
    }
    setTask([...task, newTodo])

    setInput("")

    setNumberOfTask(numberOfTask + 1)
  }

  const removeToDo = (id) => {
    setTask(
      task.filter((item) => item.id !== id)
    )
  }

  const completeHandler = (id) => {
    setTask(task.map((item) => {
      if (item.id === id) {
        setNumberOfTask(numberOfTask - 1)
        return {...item, complete: !item.complete}
      }
      return item
    }))
  }


  return (
    <div className="App">
      <h1>To-Do App</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => addTodo(input)}>Add</button>
        <ul>
          {task.map((item) => {
          return(
            <li key={item.id}>
              {item.todo}
              <button onClick={() => completeHandler(item.id)}>Complete</button>
              <button onClick={() => removeToDo(item.id)}>&times;</button>
            </li>
          )
        })}
        </ul>
        <p>{numberOfTask}</p>
    </div>
  );
}

export default App;
