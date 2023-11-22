import {useState} from "react";
import {tasks as tasksData} from "../data/tasks";

export function TasksList(){
    const [tasks, setTasks] = useState(tasksData);

    const handleDeleteTasks = (index) =>{
        const newTask = [... tasks];
        newTask.splice(index,1);
        setTasks(newTask);
    }
    const handleCompleteTasks = (index) =>{
        const newTask = [... tasks];
        if(newTask[index].completed === false){
            newTask[index].completed = true;
        }else{
            newTask[index].completed = false;
        }

        setTasks(newTask)
    }
    const addTask = (title) =>{
        const newTask = [...tasks];
        const newTaskPoint = {title : title, description:"something", completed: false};
        newTask.push(newTaskPoint);
        setTasks(newTask);
    }
    return(
        

        <div id = "mainWindow">


            <button id={"addButton"} onClick={() => addTask("new")}>Add</button>
            <ul>
                {
                    tasks.map((tasks,index)=>{
                        return(
                            <>
                                <li key={index} style={{textDecoration : tasks.completed ? 'line-through':"none"}}>
                                    {tasks.title}
                                </li>
                                <button onClick={() => handleCompleteTasks(index)}>{tasks.completed?'Undo':"Complete"}</button>
                                <button onClick={()=>handleDeleteTasks(index)}>Delete</button>


                            </>
                        );
                    })
                }
            </ul>

        </div>


    )
}