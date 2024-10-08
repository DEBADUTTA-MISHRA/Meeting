const express = require('express');
const authRoutes = require('./authRoutes');
const meetingRoutes = require('./meetingRoutes');
const userRoutes = require('./userRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/meetings', meetingRoutes);
router.use('/users', userRoutes);

module.exports = router;
