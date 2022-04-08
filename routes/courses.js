const router = require('express').Router();

const {getCourses, getCourse, postCourse, updateCourse} = require('../controllers/courseController.js');

router.get('/', getCourses);
router.get('/:id', getCourse);
router.post('/', postCourse);
router.patch('/:id', updateCourse);

module.exports = router;