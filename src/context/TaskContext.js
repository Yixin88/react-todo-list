import React, { createContext, useState } from 'react'


export const Tasks = createContext();

const getLocalStorage = () => {
    let list = localStorage.getItem("task")
    if (list) {
      return (list = JSON.parse(localStorage.getItem("task")))
    } else {
      return [];
    }
  }

export default function TaskContext({children}) {
  
  const [task, setTask] = useState(getLocalStorage())

  return (
    <Tasks.Provider value={{task, setTask}}>
        {children}
    </Tasks.Provider>
  )
}
