import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AddTask from './AddTask.js';
import AddCourse from './AddCourse.js';
import TaskList from './TaskList.js';
import Filter from './Filter.js';

const App = props => {

    const [courseName, setCourseName] = useState();
    const [courses, setCourses] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [chosenCourse, setChosenCourse] = useState();
    const [filter, setFilter] = useState("all");
    const [chosenFilter, setChosenFilter] = useState();

    useEffect(function getCourses() {
        axios.get('/api/courses')
        .then(results=>{
            setCourses(results.data);
        })
        .catch(error=>console.log(error));

    }, [courses]);

    const handleCourseName = event => {
        setCourseName(event.target.value);
    }

    // const handleFilter = event => {
    //     setCourseName(event.target.value, ()=>{
    //         axios.get(`/api/tasks/${props.courseName}`)
    //         .then(result=>{
    //             setTasks(...result.data);
    //         })  
    //         .catch(error=>console.log(error));
    //     });
    // }

    return (
        <>
            <div className='wrapper'>
                <h1 className='title'>Todo List</h1>

                <AddCourse handleCourseName={handleCourseName} setCourseName={setCourseName} courseName={courseName} setCourses={setCourses} courses={courses} />
                <AddTask courses={courses} setTasks={setTasks} tasks={tasks} setChosenCourse={setChosenCourse} chosenCourse={chosenCourse}/>
                {/* <Filter handleFilter={handleFilter} courses={courses}/> */}
                <TaskList tasks={tasks} setTasks={setTasks} chosenCourse={chosenCourse} setChosenCourse={setChosenCourse}/>
            </div> 


        </>
    ) 
}

export default App;

