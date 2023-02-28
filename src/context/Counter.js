import React, { createContext, useState } from 'react'


export const numOfTask = createContext();

const getLocalStorage = () => {
    let taskCounter = localStorage.getItem("numberOfTask")
    if (taskCounter) {
        console.log('if ran')
      return (taskCounter = parseInt(localStorage.getItem("numberOfTask")))
    } else {
        console.log('else ran')
      return localStorage.setItem("numberOfTask", JSON.stringify(0));
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
