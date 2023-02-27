import './App.css';
import {Tasks} from './context/TaskContext';
import {numOfTask} from './context/Counter';
import React, { useContext, useState, useEffect } from 'react'
 
function App() {

  const [input, setInput] = useState("");
  const {task, setTask} = useContext(Tasks);
  const {numberOfTask, setNumberOfTask} = useContext(numOfTask);

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
    <div className="divBox flex flex-col items-center justify-center h-screen w-screen font-mono bg-sky-100">

      <h1 className="text-6xl font-bold mt-[10px] font-[monospace]">To-Do App</h1>

      <div className='flex justify-center mt-[20px]'>
        <input className='border-2 border-sky-500 rounded-l-lg px-4 py-1 max-w-2xl min-w-[300px] w-[70vw]' type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button className='rounded-r-lg bg-sky-500 px-4 py-1 hover:bg-green-500' onClick={() => addTodo(input)}>Add</button>
      </div>

      <p className='mt-[20px] text-2xl'>Tasks Remaining: {numberOfTask}</p>

      <ul className='flex flex-col gap-y-2 p-4 h-96 bg-teal-400 max-w-6xl min-w-[320px] w-[85vw] items-center rounded-[10px]'>
        {task.filter((arrayItem)=> arrayItem.complete !== true).map((item) => {
        return(
          <li key={item.id} className='test flex items-center justify-between max-w-5xl min-w-[300px] gap-x-5 p-5 bg-teal-50 rounded w-[80vw]'>
            <p className='truncate text-lg'>{item.todo}</p>
            <div className='flex'>
              {item.complete === false && <button className='rounded-l-lg bg-lime-500 px-4 py-1 hover:bg-lime-600 hover:text-white' onClick={() => completeHandler(item.id)}>Complete</button>}
              <button className='bg-red-500 py-1 px-2.5 rounded-r-lg hover:bg-red-600 hover:text-white' onClick={() => removeToDo(item.id, item.complete)}>&times;</button>
            </div>
          </li>
        )
      })}
      </ul>

      <h2 className='mt-[20px] text-2xl'>Completed Tasks</h2>

      <ul className='flex flex-col gap-y-2 p-4 h-96 bg-green-400 max-w-6xl min-w-[320px] w-[85vw] items-center rounded-[10px] mb-[20px]'>
        {task.filter((arrayItem)=> arrayItem.complete === true).map((item) => {
          return(
            <li key={item.id} className='test flex items-center justify-between max-w-5xl min-w-[300px] gap-x-5 p-5 bg-teal-50 rounded w-[80vw]'>
              <p className='truncate line-through decoration-2 text-lg'>{item.todo}</p>
              <button className='rounded bg-red-500 py-1 px-2.5 hover:bg-red-600 hover:text-white' onClick={() => removeToDo(item.id, item.complete)}>&times;</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
