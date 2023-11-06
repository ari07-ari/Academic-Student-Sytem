const router = require('express').Router();
const userRoutes = require('./userRoutes');
const programRoutes = require('./programRoutes');
const courseRoutes = require('./courseRoutes');
const studentRoutes = require('./studentRoutes');

router.use('/users', userRoutes);
router.use('/program', programRoutes);
router.use('/course', courseRoutes);
router.use('/student', studentRoutes);

module.exports = router;
