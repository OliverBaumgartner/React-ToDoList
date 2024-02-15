import React from "react";
import Task from "./Task.js"

export default function TaskList({taskList, deleteTask, onToggle}) {
    return(
        <div class="tasklist">
            {taskList.length===0 ? "Great, no tasks scheduled" : taskList.map((obj) => {
                return <Task 
                    key={obj.id} 
                    obj={obj} 
                    deleteTask={deleteTask}
                    onToggle={onToggle}
                    />;
            })}
        </div>
    )
}