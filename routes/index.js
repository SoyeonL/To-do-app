const router = require('express').Router();

const taskRouter = require('./tasks.js');
const courseRouter = require('./courses.js');

router.use('/tasks', taskRouter);
router.use('/courses', courseRouter);

module.exports = router;