import React from 'react'
import axios from 'axios';

const Task = props => {

    const deleteHandler = event => {

        let data = props.task;

        axios.delete(`/api/tasks/${data._id}`, data)
        .then(results=>{
            props.setTasks(props.tasks.filter(item=>item._id !== props.task._id))
        })
        .catch(error=>console.log(error));
    }

    return(
        <>
            {props.course ?
                <div className="task">
                    <li key={props.task._id}>{props.course[0].name}&nbsp;&nbsp;&nbsp;{props.description} </li>
                    <button onClick={deleteHandler}>Delete</button>
                </div>
                :
                <div className="task">
                    <li key={props.task._id}>{props.newName}&nbsp;&nbsp;&nbsp;{props.description} </li>
                    <button onClick={deleteHandler}>Delete</button>
                </div>
                    
            }
            
        </>
    )
}

export default Task;