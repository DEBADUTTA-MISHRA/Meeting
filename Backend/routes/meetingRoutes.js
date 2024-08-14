const express = require('express');
const { createMeeting, getMeetings } = require('../controllers/meetingController');
    const {authMiddleware} = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/create', authMiddleware, createMeeting);
router.get('/', authMiddleware, getMeetings);

module.exports = router;
