import React, { createContext, useState } from 'react'


export const Tasks = createContext();

export default function TaskContext({children}) {
  
  const [task, setTask] = useState([])

  return (
    <Tasks.Provider value={{task, setTask}}>
        {children}
    </Tasks.Provider>
  )
}
