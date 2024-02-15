import Textfield from "./input.js";
import TaskList from "./TaskList.js";
import { useState } from "react";
import "./App.css"

export default function App(){
  const [taskList, setTaskList] = useState([]);

  function addTask(task){
    let newTask = {
        title: task,
        id: Date.now(),
        status: false,
    };
    console.log(newTask);
    setTaskList([newTask, ...taskList]);
  }

  function deleteTask(id){
    let filteredArray = taskList.filter(obj => {
      return obj.id !== id;
    })
    setTaskList(filteredArray)
  }

  function onToggle(id){
    let newArr = taskList.map((obj)=>{
      if (obj.id === id){
        return {...obj, status: !obj.status};
      }else{
        return obj;
      }
    });
    setTaskList(newArr);
  }
  console.log(taskList)
  return (
    <div class="mainContainer">
      <Textfield addTask={addTask}/>
      <TaskList 
        taskList={taskList} 
        deleteTask={deleteTask} 
        onToggle={onToggle}
      />
    </div>
  )
}
