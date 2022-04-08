import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Task from './Task.js';

const TaskList = props =>{

    useEffect(function loadTasks() {
        axios.get('/api/tasks')
        .then(result=>{
            props.setTasks(result.data)
        })
        .catch(error=>console.log(error));
    }, [props.tasks, props.chosenCourse]);

    return (
        <>
            <div className='task-container'>
                <ul className="taskList">
                    {props.tasks.map(task=><Task key={task._id} description={task.description} course={task.course} setTasks={props.setTasks} task={task} tasks={props.tasks} newName={props.chosenCourse}/>)}
                </ul>
            </div>
        </>
    )
}

export default TaskList