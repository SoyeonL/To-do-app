const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: {type:String, required:true, minlength:2, maxlength:12},
});

const Course = mongoose.model("Course", CourseSchema);

module.exports = {Course, CourseSchema};