import { useState, createContext, useEffect } from "react";
import { tareas } from "../data/Task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {

    const [tasks, setTask] = useState([]);

function createTask(task) {
  setTask([
    ...tasks,
    {
      title: task.title,
      id: tasks.length,
      desc: task.description
    },
  ]);
}

function deleteTask(taskId) {
  setTask(tasks.filter((task) => task.id !== taskId));
}

useEffect(() => {
  setTask(tareas);
}, []);
  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
