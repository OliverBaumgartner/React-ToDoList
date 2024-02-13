import React from "react";
import { useState } from "react";

export default function Textfield({addTask}) {
    const [task, setTask] = useState("");

    function handleClick(){
        addTask(task);
    }

    return (
        <div>
            <input type="text" placeholder="new Task" 
            onChange={(e) => setTask(e.target.value)}/>
            <button onClick={handleClick}>Add</button>
        </div>
        )
}
