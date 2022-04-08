import React from 'react';
import axios from 'axios';

const AddCourse = props => {

    const handleFormSubmit = event => {
        event.preventDefault();

        let data = {
            name: props.courseName
        };

        axios.post('/api/courses', data)
        .then(result=>{
            props.setCourses([...props.courses, {name: result.data.name}]);
            alert('Course added!');
            props.setCourseName("");
        })
        .catch(error=>console.log(error));
    }

    return (
        <>
            <form onSubmit={event=>handleFormSubmit(event)}>
                <label>
                    Add a course
                    <input value={props.courseName} type="text" onChange={event=>props.handleCourseName(event)}></input>
                    <button>Add</button>
                </label>
            </form>
        </>
    ) 
}

export default AddCourse;