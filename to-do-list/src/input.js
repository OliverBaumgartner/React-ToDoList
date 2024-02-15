import React from "react";
import { useState } from "react";

export default function Textfield({addTask}) {
    const [task, setTask] = useState("");

    function handleClick(){
        if (task.length > 0){
            addTask(task);
            setTask("")
        }
    }
    function handleKeyPress(event){
        if (event.keyCode === 13){
            handleClick()
        }
    }

    return (
        <div class="input">
            <input class="taskInput" type="text" value={task} placeholder="new Task" 
            onKeyDown={handleKeyPress}
            onChange={(e) => setTask(e.target.value)}/>
            <button class="buttonInput"onClick={handleClick}>Add</button>
        </div>
        )
}
