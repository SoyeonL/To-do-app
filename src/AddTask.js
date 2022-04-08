import React from 'react';
import {useState} from 'react';
import axios from 'axios';

const AddTask = props => {

    const [description, setDescription] = useState();


    const handleChosenCourse = event => {
        props.setChosenCourse(event.target.value);
    }

    const handleDescription = event => {
        setDescription(event.target.value);
    }

    const handleFormSubmit = event => {
        event.preventDefault();

        let data = {
            description: description,
            course: {name: props.chosenCourse}
        };

        axios.post('/api/tasks', data)
        .then(result=>{
            props.setTasks([...props.tasks, result.data]);
            setDescription("");
        })
        .catch(error=>console.log(error));

        // axios.patch('/api/courses/:id', data)
        // .then(result=>{
        //     props.setTasks({description: result.data.description});
        // })
        // .catch(error=>console.log(error));

    }

    return (
        <>
            <form onSubmit={event=>handleFormSubmit(event)}>
                <label>
                    Add a Task
                    <select defaultValue='default' onChange={event=>handleChosenCourse(event)}> 
                        <option disabled value='default'>choose a course</option>
                        {Object.values(props.courses).map(course=><option key={course._id} value={course.name}>{course.name}</option>)}
                    </select>
                    <input type="text" value={description} onChange={event=>handleDescription(event)}></input>
                    <button>Add</button>
                </label>
            </form>

        </>
    ) 
}

export default AddTask;