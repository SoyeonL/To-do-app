const mongoose = require('mongoose');
const {CourseSchema} = require('./Course.js');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    description: {type:String, required:true, minlength:2, maxlength: 25},
    course: [CourseSchema]
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;