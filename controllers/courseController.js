const {Course} = require('../models/Course.js');

const postCourse = (req,res)=>{
    let course = new Course(req.body);

    if (res.locals.validationErrors != null) {
        res.status(400).json(res.locals.validationErrors);
    } else {   
        course.save()
        .then(result=>{
            res.json({data:course})
        })
        .catch(error=>res.status(500).send(error));
    }

}

const getCourses = (req,res)=>{
    Course.find({}).exec()
    .then(results=>{
        res.json(results);
    })
    .catch(error=>res.status(500).send(error));
}

const getCourse = (req,res)=>{
    Course.findOne({"_id":req.params._id}).exec()
    .then(results=>{
        res.json(results);
    })
    .catch(error=>res.status(500).send(error));
}

// const updateCourse = (req,res)=>{
//     Course.findOne({"name":req.body.course}).exec()
//     .then(results=>{
//         results.task.push(req.body.description);
//     })
//     .catch(error=>res.status(500).send(error));
// }

module.exports = {
    postCourse,
    getCourses,
    getCourse
};