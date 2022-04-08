const Task = require('../models/Task.js');

const postTask = (req,res)=>{
    let task = new Task(req.body);

    task.save()
    .then(result=>{
        res.json({data:task})
    })
    .catch(error=>console.log(error));
}

const getTasks = (req,res)=>{
    Task.find({}).exec()
    .then(results=>{
        res.json(results);
    })
    .catch(error=>res.status(500).send(error));
}

const getTask = (req,res)=>{
    Task.find({'_id':req.params._id}).exec().
    then(results=>{
        res.json(results);
    })
    .catch(error=>res.status(500).send(error));
}

const deleteTask = (req,res)=>{
    Task.deleteOne({'_id':req.params._id}).exec()
    .then(results=>{
        res.json(results);
    })
    .catch(error=>console.log(error));
}

module.exports = {
    postTask,
    getTasks,
    getTask,
    deleteTask
};