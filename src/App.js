import './App.css';
import {Tasks} from './context/TaskContext';
import React, { useContext, useState, useEffect } from 'react'
 
function App() {

  const [input, setInput] = useState("");
  const {task, setTask} = useContext(Tasks);
  const [numberOfTask, setNumberOfTask] = useState(0);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task))
    localStorage.setItem("numberOfTask", numberOfTask)
  }, [task, numberOfTask])

  //Adding todo task function
  const addTodo = (todo) => {
    const newTodo = {
      todo: todo, complete: false, id: Math.random()
    }

    //cannot add a empty string
    if (todo.length < 1) {
      return
    }

    //adding non-empty string to the task array
    setTask([...task, newTodo])

    //resetting the input field
    setInput("")

    //increasing the number of tasks counter
    setNumberOfTask(numberOfTask + 1)
  }

  //remove todo that matches the id and reduces counter if its not completed
  const removeToDo = (id, itemComplete) => {
    setTask(
      task.filter((item) => item.id !== id)
    )

    if (itemComplete === false) {
      if (numberOfTask > 0) {
        setNumberOfTask(numberOfTask - 1)
      }
    }
  }

  //changing the completed from false to true
  const completeHandler = (id) => {
    setTask(task.map((item) => {
      if (item.id === id) {
        if (numberOfTask > 0) {
          setNumberOfTask(numberOfTask - 1)
        }
        return {...item, complete: true}
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
              {item.complete === false && <button onClick={() => completeHandler(item.id)}>Complete</button>}
              <button onClick={() => removeToDo(item.id, item.complete)}>&times;</button>
            </li>
          )
        })}
        </ul>
        <p>{numberOfTask}</p>
    </div>
  );
}

export default App;
