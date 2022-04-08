import React from 'react';
import axios from 'axios';

const Filter = props => {



    return (
        <>
            <label>
                View by Course
                <select defaultValue='all' onChange={event=>props.handleFilter(event)}> 
                    <option value='all'>All</option>
                    {Object.values(props.courses).map(course=><option key={course._id} value={course.name}>{course.name}</option>)}
                </select>
            </label>
        </>
    )
}

export default Filter;