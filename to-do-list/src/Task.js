import React from "react";
import "./Task.css";

export default function Task({obj, deleteTask, onToggle}){
    function handleDelete(){
        setTimeout(deleteTask(obj.id), 2000);
    }
    function handleToggle(){
        onToggle(obj.id)
    }

    return (
        <div class="tasks">
            <input class="checkbox" onChange={handleToggle} type="checkbox"/>
            <span className={obj.status? "completed":""}>{obj.title}</span>
            <button onClick={handleDelete}>undo</button>
        </div>
        )
}