const router = require('express').Router();

const {getTasks, getTask, postTask, deleteTask} = require('../controllers/taskController.js');

router.get('/', getTasks);
router.get('/:_id', getTask);
router.post('/', postTask);
router.delete('/:_id', deleteTask);

module.exports = router;