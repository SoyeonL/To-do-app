const router = require('express').Router();

const {getCourses, getCourse, postCourse} = require('../controllers/courseController.js');

router.get('/', getCourses);
router.get('/:_id', getCourse);
router.post('/', postCourse);
// router.patch('/:id', updateCourse);

module.exports = router;