import Task from "./Task"
import React from "react"

const Tasks = ({tasks,onDelete,onToggle}) => {
    
    return (
        // setTasks([...tasks,{}])
        <>
            {
            tasks.map(
                (task,index)=> (
                <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle}/>
                ))
            }
        </>
    )
}

export default Tasks
