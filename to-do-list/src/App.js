import Textfield from "./input.js";
import TaskList from "./TaskList.js";
import { useState } from "react";
export default function App(){
  const [taskList, setTaskList] = useState([]);

  function addTask(task){
    let newTask = {
        title: task,
        id: Date.now(),
        status: false
    };
    console.log(newTask);
    setTaskList([...taskList, newTask]);
  }

  return (
    <div>
      <Textfield addTask={addTask}/>
      <TaskList taskList={taskList}/>
    </div>
  )
}
