const Meeting = require('../models/meetingModel');

exports.createMeeting = async (req, res) => {
  try {
    const { title, agenda, date, participants } = req.body;
    const newMeeting = new Meeting({ title, agenda, date, participants });
    await newMeeting.save();
    res.status(201).json({ message: 'Meeting created successfully', meeting: newMeeting });
  } catch (error) {
    res.status(500).json({ message: 'Error creating meeting', error });
  }
};

exports.getMeetings = async (req, res) => {
  try {
    const meetings = await Meeting.find();
    res.status(200).json({ meetings });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching meetings', error });
  }
};
