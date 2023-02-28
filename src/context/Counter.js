import React, { createContext, useState } from 'react'


export const numOfTask = createContext();

const getLocalStorage = () => {
    let taskCounter = localStorage.getItem("numberOfTask")
    if (taskCounter) {
      return (taskCounter = +localStorage.getItem("numberOfTask"))
    } else {
      return [];
    }
  }

export default function Counter({children}) {
  
  const [numberOfTask, setNumberOfTask] = useState(getLocalStorage());

  return (
    <numOfTask.Provider value={{numberOfTask, setNumberOfTask}}>
        {children}
    </numOfTask.Provider>
  )
}
