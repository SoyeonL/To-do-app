require('dotenv').config();

const express = require("express");
const app = express();

const connection = require('./db/connection.js');

connection.once('open', ()=>{
    const server = app.listen(process.env.PORT || 8080, ()=>console.log("Connected and Listening"));
})

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const {courseFormValidator} = require('./validators');
// app.use(courseFormValidator);
// const {taskFormValidator} = require('./validators');
// app.use(taskFormValidator);

const router = require("./routes/index.js");

app.use('/api', router);
